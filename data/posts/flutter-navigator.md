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



---
[](https://titann.tistory.com/49)

[](https://api.flutter.dev/flutter/widgets/Navigator/pushReplacement.html)

[](https://docs.flutter.dev/cookbook/navigation/navigation-basics)