---
layout: post
title: "Fresh Install Yosemite to Development: The Easy Way"
date: "2014-12-21 13:06:34"
category: journal
accent_color: "#5a5a5a"
tags: [Yosemite, OSX, development]
---

#### Disclaimer 
This requires being comfortable in the command line. You've been warned. This is also opinionated to a degree. It sets you up with the following:
<br><br>

* **OSX Yosemite**
* **zsh as default in command line**
* **numerous other settings from [thoughtbot](http://thoughtbot.com) [laptop](https://github.com/thoughtbot/laptop) and [dotfiles](https://github.com/thoughtbot/dotfiles)**
* **all the apps that I use that are listed in the `cask-install.sh`. You can add different ones available via [caskroom.io](http://caskroom.io).**

## Here's the game plan:

* Backup your laptop, perhaps twice. Sync everything that you can. Also upload your Sublime Text preferences to Dropbox or make it a gist so you can copy it all back.
* Download OSX Yosemite from the App Store.
* Format jump drive "Untitled" of 8gb or more.
* Run a terminal command to format the install for use off of the "Untitled" jum drive.
* Set your startup disk as the jump drive
* Restart
* Format your hard drive so it's clean. There's a little bug with hidden files and node_modules.

### Making the Bootable USB
Download OSX Yosemite from the App Store. It installs to your Applications folder.

#### The USB
Find an 8GB USB drive. You can use a larger one but this only requires about 6GB of space. Open disk utility and erase it. The default settings are just what we need. 

#### The Terminal Command
Once you have it formatted run copy and paste the code below into your terminal window. This will prompt you for your password. Give your password and wait for a while. This process takes between 30-45 minutes usually.

<br>
<script src="https://gist.github.com/filmgirl/eac030290e688e802abb.js"></script>

Once the task is done, you'll have a bootable USB. In Spotlight, type in "Startup Disk". This is a system preference and you should select your USB which is now titled "Install OSX Yosemite".

### Dev Envi Comes First

Go here to thoughtbot's [laptop](https://github.com/thoughtbot/laptop) script and follow their instructions. It's a simple curl command and a couple others.

{% highlight bash %}
curl --remote-name https://raw.githubusercontent.com/thoughtbot/laptop/master/mac
less mac
bash mac 2>&1 | tee ~/laptop.log
{% endhighlight %}

### Installing Apps
Simply run this bash script with `./cask-install.sh`, or fork and edit it for your needs! It can be in any directory, I ran it right from my cloned github repo that I forked from [this guy's dotfiles](https://github.com/sandnuggah/dotfiles). I only used part of his stuff but some other parts are useful such as the OSX defaults.

<br>
<script src="https://gist.github.com/ColeTownsend/aae9a778c08a68e6c3e7.js"></script>