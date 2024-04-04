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
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/bf7bb722-16ff-4f01-8d53-b03ac2a89e79)

First of all, WillPopScope is a class that provides customization for backward movement to the default widget. `OnWillPop` is a callback function that runs when a user presses a back button and is used to define the logic that should run when the back button is pressed.

If onWillPop returns true, the current screen will pop and move to the previous screen, but if it returns false, the pop action will not be performed.

It is often implemented in this way to prevent the back button from going backward by pressing the back button at the bottom of the screen. *(If you want to show any action, not just block the back button action, you can define the action you want on WillPop and return false.)*

However, in the case of WillPopScope, it is not compatible with Predictive Back Feature, which is supported on Android 14, so Flutter will offer PopScope as an alternative.

## PopScope Introduced
![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/426c9262-a3b6-44e1-8684-666010737dc6)

PopScope is a new ahead-of-time API to support Predictive Back Feature, supported by Android 14, replacing WillPopScope and Navigator.willPop, which were previously used to manage back press action.

**canPop**
- Boolean type parameter that controls the backward action
- Default value is true
- If value is true, backward action works well, and vice versa

**onPopInvoked**
- Callback function called when a backward action occurs, whether successful of not
- Even if canPop is false, onPopInvoked is still called, and didPop is false. On the other hand, if canPop is true, didPop is also true.



---
[](https://velog.io/@jeongminji4490/Flutter-WillPopScope-Deprecated)

[](https://docs.flutter.dev/release/breaking-changes/android-predictive-back#migration-guide)