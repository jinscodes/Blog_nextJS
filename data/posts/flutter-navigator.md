## Intro..
There was a situation where I had to use Navigator while making a simple app for practice with a flutter.

I looked at document to use Navigator correctly, and there were two types: `Navigator.push` and `Navigator.pushReplacement`.

Both `Navigator.push` and `Navigator.pushReplacement` work similarly. 

So, what exactly is the difference between the two? And what should be used in what situations?

> More details about the router in the flutter will be discussed later. Now this post is a simple comparison between Navigator.push and Navigator.pushReplacement.

## Difference Between Navigator.push And Navigator.pushReplacement
The biggest difference between Navigator.push and Navigator.pushReplacement is whether the previous screen is present or not.

#### Navigator.push
`Navigator.push` builds up the previous screen. This is because push works in the form of a stack. 

> For more information on Navigator, see on the next post...

Since the previous screen is drawn on the new screen with the accumulated screen, it is possible to go back.

Also, since it is possible to go back, a go back button is automatically generated in AppBar.

Here is the example ↓

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c5ea5eeb-f494-492b-9989-fad33eff6308)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c5b45429-a659-4330-86ee-48135d8f14d5)

#### Navigator.pushReplacement
`Navigator.pushReplacement` is a literal replacement. In other words, new screen replaces the existing screen, not builds it on the existing screen.

The previous screen cannot exist because it does not stack unlike `Navigator.push`.

Of course, the Back button is not generated in AppBar either.

Here is the example ↓

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/62cbc1eb-50b1-47e9-9953-3ff63e5f12f8)

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/abd831ce-aa46-443b-a084-65fb118cf4c7)

## Situation To Use Navigator.push Or Navigator.pushReplacement
It looks like we can use anything because the screen changes with either one.

But we should never use anything.

#### Navigator.push

`Navigator.push` gets a previous screen. So, it should be used when it should be able to go back to the previous screen.

Let's take an example of a screen where we sign up.

In most apps these days, signup is divided into several steps. Let's assume that step1 is a name, step2 is an ID password, and step3 is an e-mail.   
If we realize that the name of the first step is wrong in the second stage, we need to go back to the first step.   

As such, screens that are divided into steps or should be able to go back should use `Naviagtor.push`.

#### Navigator.pushReplacement
`Navigator.pushReplacement` can be used in the opposite situation.

In other words, it can be used mainly in situations where you cannot go back to the previous screen.

Alternatively, if the Back icon is created in AppBar and the screen structure is broken, we should use `Navigator.pushReplacement`.

For example, there is an onboarding screen.

In most cases, the on-boarding screen does not need a backward function. In addition, when the on-boarding screen is over and the main screen comes out, the on-boarding screen should not appear again.


---
[](https://titann.tistory.com/49)

[](https://api.flutter.dev/flutter/widgets/Navigator/pushReplacement.html)

[](https://docs.flutter.dev/cookbook/navigation/navigation-basics)