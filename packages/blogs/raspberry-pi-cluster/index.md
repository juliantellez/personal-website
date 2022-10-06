---
title: Your very own Personal Cloud powered by Raspberry Pi
published: false
---

In an effort to learn and better understand the layers of the cloud, I have decided to re-create a small cloud provider at home. For the purposes of this experiment we would narrow down the cloud's scope to provision storage, networking. 

# Installing Raspbian

Images can be found [here](https://www.raspberrypi.org/downloads/raspbian/).

```
# Find the volume
diskutil list

# Unmount the Volume 
diskutil unmountDisk /dev/disk2

# Flash the image into Volume
sudo dd if=<path-to-image>/raspbian-image.img of=/dev/rdisk2 bs=1m
```

# SetUp WiFi and ssh.

See [the official documentation](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)

```
# adds wpa supplicant config

cp ~/<path-to-file>/wpa_supplicant.conf Volumes/boot/wpa_supplicant.conf

# adds ssh
touch /Volumes/boot/ssh
```


# References

- [Build you own raspberry pi cluster](https://www.jeffgeerling.com/blog/2017/how-build-your-own-raspberry-pi-cluster).
- [Headless raspberry pi setup](https://www.gngrninja.com/code/2019/3/10/raspberry-pi-headless-setup-with-wifi-and-ssh-enabled).
- [Access Raspberry PI through ssh ](https://www.raspberrypi.org/documentation/remote-access/ssh/).
- [Raspberry PI - personal cloud](https://www.rs-online.com/designspark/raspberry-pi-4-personal-datacentre-part-1-ansible-docker-and-nextcloud).





https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/55776947_2340964296228567_8721924685448677120_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=103&_nc_ohc=0VV_JpMIXKYAX8XWl4x&oh=cf12cba59d208072ca3dd67b5d6d8248&oe=5EDA35A1 640w,
https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/55776947_2340964296228567_8721924685448677120_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=103&_nc_ohc=0VV_JpMIXKYAX8XWl4x&oh=e892b76a53f47249a326f4a230bfa648&oe=5EAD2565 750w,
https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/55776947_2340964296228567_8721924685448677120_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=103&_nc_ohc=0VV_JpMIXKYAX8XWl4x&oh=4265d6d5d488169f488d9fbaa1766cbf&oe=5E9FC11B 1080w
