---
title: "Raspberry Pi Kubernetes Cluster — NFS Storage | Issue #5"
subTitle: ''
description: |
    Today’s issue will walk you through installing and creating a [Network File Storage](https://en.wikipedia.org/wiki/Network_File_System) (NFS) server so it can be used as our default cluster's storage.
tags:
    - Kubernetes
    - raspberryPi
published: true
coverImage: 'https://media-exp1.licdn.com/dms/image/D4E12AQGNfFPRQUZEmQ/article-cover_image-shrink_720_1280/0/1665420704755?e=1671062400&v=beta&t=sgb6xZ_HHymYqGqWiPXgklFU0U1ruT3IvQXzCsrENpQ'
---

Welcome to the Raspberry PI Kubernetes home lab series. A bite-sized informative guide to help you provision a cluster from scratch. By now we should have our k8s cluster up and running! great job everyone!

## 1 Requirements

- 1 k8s cluster
- 1 external hard drive

## 2 Locate the Hard drive
Plug your hard drive into one of your slave nodes and SSH into it to find its location

```sh
sudo lsblk -o UUID,NAME,FSTYPE,SIZE,MOUNTPOINT,LABEL,MODEL
```

## 3 Format the hard drive with MKFS.ext3
We can see that our hard drive is located at /dev/sda2, let's go ahead and format the hard drive's filesystem so it can be used by the Linux system. Other examples include /dev/sdb2

```sh
sudo mkfs.ext3 -L k8s-volume /dev/sda2
```

## 4 Create a directory for the Volume and mount it
This could be in any location, we are going to "namespace" it under k8s-mount and label it k8s-volume-1

```sh
sudo mkdir -p /k8s-mount/k8s-volume-1
sudo mount /dev/sda2 /k8s-mount/k8s-volume-1 # mount disk
```

## 5 Install the [NFS server](https://manpages.debian.org/testing/nfs-common/nfs.5.en.html)

```sh
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install nfs-kernel-server -y
```

## 6 Start the server

```sh
sudo systemctl start nfs-server
sudo systemctl status nfs-server # verify is running
```

## 7 Allocate permissions

To have access to your NFS server we need to create some read/write permissions

```sh
# owner (read/write) group (read)

sudo find /k8s-mount/k8s-volume-1/ -type d -exec chmod 755 {} \;

sudo find /k8s-mount/k8s-volume-1/ -type f -exec chmod 644 {} \; 

sudo find /k8s-mount/k8s-volume-1/ -type f -exec chmod 777 {} \;
```

## 8 Setup remote access

The line below will give permissions to all hosts in the network. so be careful!

```sh
sudo nano /etc/exports

/k8s-mount/k8s-volume-1/ *(rw,sync,no_subtree_check,insecure)
```

We can set the permissions to be restrictive per host, let me know if you would like to see how this is done :), in the meantime is a walk-through of this setup and the official docs too.

## 9 Export the etc config

```sh
sudo exportfs -ra # export config
sudo exportfs -v # see current config
showmount -e # see what is being exported
```

## 10 Install the NFS client on all the other worker nodes

```
# ssh ssh ubuntu@192.168.0.xx # WOKER_NODE
sudo apt install nfs-common -y
```

## 11 Create Volume manifests

```yaml
# system-volume.yaml

apiVersion: v1
kind: Namespace
metadata:
  name: system-volume
  labels:
    name: system-volume
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-k8s-volume-1
  labels:
    type: local
spec:
  storageClassName: k8s-volume-1
  capacity:
    storage: 1Ti
  accessModes:
    - ReadWriteMany
  nfs:
    server: 192.168.0.26
    path: /k8s-mount/k8s-volume-1
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-k8s-volume-1
spec:
  storageClassName: k8s-volume-1
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Ti
```

## 11 Apply the manifests

```sh
kubectl apply -k path-to-manifest.yaml
kubectl — namespace system-volume get pv,pvc
```

## BONUS
This isn’t a required section but more of an educational addendum. Since we have given global access to our drive we can now access it anywhere from within the network

### 1 Find nodes

```sh
nmap -sP 192.168.0.1/24 # list nodes

WOKER_NODE_1=192.168.0.24
WOKER_NODE_2=192.168.0.26 # hard drive lives here…
```

### 2 find volume in the network

```sh
ssh ubunut@$WOKER_NODE_1 # a woker node

sudo apt install nfs-common -y

showmount -e $WOKER_NODE_2 # see what is being exported

#output
Export list for 192.168.0.26:
/k8s-mount/k8s-volume-1 *
```

### 3 Access hard drive

```sh
sudo mkdir -p /test

sudo mount -t nfs $WOKER_NODE_2:/k8s-mount/k8s-volume-1 /test/

ls -al /test/ # inspect drive
```

### 4 End of test
Clear the test area by removing the files created previously

```sh
sudo umount /test
sudo rm -rf /test
```

We are now ready to start using our local storage. it is important that you know how to access the nodes independently and that you understand how to manipulate the NFS server across the network. Leave a comment if you have any questions, we will be integrating with MetalLB's Load Balancer next. 

Happy Coding.

← Previous Issue : [Start the Cluster | Issue #4](https://www.linkedin.com/pulse/raspberry-pi-kubernetes-cluster-start-issue-4-julian-tellez)
