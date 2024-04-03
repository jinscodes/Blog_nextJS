WillPopScope is deprecated. Why? 

In this post, it introduces the background why WillPopScope is deprecated.

If you want to know about Predictive Back Feature that is adapted after the version of Android 14 in detail, Click the below link.

[](https://www.youtube.com/watch?v=Elpqr5xpLxQ)

## Background
Predictive back features will be introduced from Android 14 (API level 34), and accordingly, the existing incompatible Flutter Navigator API (WillPopScope, Navigator.willPop) has been depreciated.

**Predictive Back Feature (ahead-of-time model)**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8685f123-1658-432f-9085-84ed161efc57)

Predictive Back Feature is a function that informs users in advance that if the screen is pulled to the left, an animation that makes the current screen slightly smaller will be executed, and a backward action will be performed. 

Simply put, it gives the user the opportunity to decide whether to move backwards or cancel this action, which is why this feature is introduced.



From Android 10, if you pull the left/right side of the screen, you can move to the previous screen with an arrow icon like ios.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f0f683c2-2e9c-4b7a-8992-64132b3213dc)

However, there are problems: un-intentional backward.

Users couldn't know in advance that their touch was misrecognized as a backward motion, nor had the opportunity to correct the wrong touch, because when a user pulls the side of the screen, the arrow moves right back after it appears.

To solve these problems, Predictive Back Feature, ahead-of-time, appears. 

## WillPopScope Deprecated