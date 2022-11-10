---
published: true
title: "Raspberry Pi Kubernetes Cluster — Load Balancer | Issue #6"
subTitle: ''
description: |
    Welcome to the Raspberry PI Kubernetes home lab series. A bite sized informative guide to help you provision a cluster from scratch. Our cluster should be now up and running and we should be able to easily provision services, deployments, volumes, etc...
tags:
    - kubernetes
    - raspberryPi
coverImage: 'https://media-exp1.licdn.com/dms/image/D4D12AQEHKYcJX1jU1A/article-cover_image-shrink_423_752/0/1668096145768?e=1673481600&v=beta&t=a2uaibMNeUuU-acSTfd0agQrX4sSDi7odqtofkvYs6w'
---

Today’s issue will walk you through [exposing a service to an external IP address](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types).

Since our cluster is running on [bare metal](https://en.wikipedia.org/wiki/Bare_machine) we don't have the luxury of provisioning an external load balancer. Kubernetes doesn't provide a direct implementation for network load balancers and instead comes with built-in functionality to integrate with different cloud providers (AW, GCP, Azure, etc..) This is normally done by allowing Kubernetes to automatically create load balancers on your [cloud provider](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/). Without the ability to Load Balance traffic we are left with two options: "[NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)" and "[ClusterIP](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)" which are solutions better suited for Internal Network or Cluster communication.

In this Lab we will be implementing [MetalLB](https://metallb.universe.tf/) a solution that offers network balancing so that external traffic and services can communicate with our cluster.

## 1 Requirements
   - [1 k8s cluster](https://www.linkedin.com/pulse/raspberry-pi-kubernetes-cluster-start-issue-4-julian-tellez/) with a [compatible CNI](https://metallb.universe.tf/installation/network-addons/)

## 2 Preparation

Please check the compatibility matrix before you implement MetalLB, if you are following this series you would have installed [Flannel](https://github.com/flannel-io/flannel) and therefore are good to go! Kubernetes [CNI](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) integrations are very interesting a worth a read on their own right. [Calico](https://projectcalico.docs.tigera.io/about/about-networking) for example, has a really interesting implementation and definitely worth exploring.

## 3 Installation

Version 0.13.5 has come a long way an integrating with MetalLB is incredibly simple. [see reference](https://metallb.universe.tf/installation/#installation-with-kustomize). We will resource this latest version and supply a configuration file along with it.

```yaml
# kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1

kind: Kustomization

namespace: metallb-system

resources:
  - github.com/metallb/metallb/config/native?ref=v0.13.5
  - config.yaml
```


MetalLB is setup as an L2 Balancer by default and will be idle until configured. The easiest deployment is probably the Layer 2 Configuration, which works by responding to [ARP requests](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) and providing the machine's MAC address to clients.

As a bare minimum (no pun intended) it will expect a pool of available addresses in your network, and a reference for them. From the network perspective it is represented as if the cluster had multiple IPs assigned to its network interface. As you can see from the configuration below we are assigning ports **100 to 250**, which should be more than enough for our raspberry PI experiments.

```yaml
# config.yaml

apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: first-pool
  namespace: metallb-system
spec:
  addresses:
  - 192.168.0.100-192.168.1.250
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: advertisment
  namespace: metallb-system
spec:
  ipAddressPools:
  - first-pool
```

Apply the [kustomization](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) file and verify. MetalLB will create a deamon set "speaker" on every slave node, that will ensure the load balancer can reach to our services and a controller (responsible for address assignments).

```yaml
# Apply
kubectl apply -k <kustomization_directory>
```

![](https://media-exp1.licdn.com/dms/image/D4D12AQEBbc22sIMqCQ/article-inline_image-shrink_1500_2232/0/1668094779053?e=1673481600&v=beta&t=10Kxtx9KLfZ6odFO6i9xDy59IyZWtBHo_nV0UM5e0JY)

## 4 Test the Load Balancer

Let's deploy an nginx service and assign a load balancer to it

```bash
kubectl run nginx --image=nginx

kubectl expose deploy nginx --port 80 --type LoadBalancer
```

Let's check that our service has indeed deployed and that has it has been assigned with an external IP

```
kubectl get service

# Output
NAME                 TYPE           CLUSTER-IP   EXTERNAL-IP     
service/nginx       LoadBalancer    10.96.4.10   192.168.0.230
```

And there we go! our service is now available to the network!

![](https://media-exp1.licdn.com/dms/image/D4D12AQGI3Up0ttmeHg/article-inline_image-shrink_1000_1488/0/1668095712457?e=1673481600&v=beta&t=f9c_ICIfZGblntTbiCNB0Fnj1zmZIsBIMNoYO2EAf1Y)

We are are now ready to start assigning IPs to our services. it is important that you know how L2 level Balancers work so you can extend the basic configuration for MetalLB.
Leave a comment if you have any questions, we will be looking into provisioning Kubernetes secrets powered by [git secrets](https://git-secret.io/) next. Happy Coding.

[← Previous Issue : Start the Cluster | Issue #5](https://www.linkedin.com/pulse/raspberry-pi-kubernetes-cluster-nfs-storage-issue-5-julian-tellez/)
