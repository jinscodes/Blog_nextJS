Sometimes, we want to get rid of an items from the list.

There are ways to remove the item, such as dialog, icon, alert, or swipe.

On the mobile platform, we are familiar with swipe from the left to right to get rid of the item like below

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ebee49db-6ced-43c7-a286-f00a3cd58b65)

## Dismissible
It's called swipable, removable, and dismissible.

This widget wrapped `List` widget, and then made it possible to remove the item from the list with swpie.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9b632620-875f-4dea-945c-9b9816084a6e)

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ce2c3acb-1a85-47d0-824a-9608aea56665)

`Dismissible` widget has two properties: **key**, **onDismissed**.

### key
In the most case of Widget, it doesn't care about key value, but some widgets are needed to be speicified.

Dismissible widget needs key value because it uses unique id.

### onDismissed
It is a function that operates when an event for the widget occurs.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/70e54e62-2f15-4de6-8dd0-a3d034899039)

At this time, the direction is received as an argument, which is an argument that can specify which function to execute depending on the direction.

## Implement an exception screen in the absence of data
Before showing the data, it should be checked for data. And if there is no data, an exception screen should be shown.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/029bc084-e067-41e9-874c-7c2232a7ffb4)

First, declare the mainContent variable to be displayed on the screen in the build method.

Create a certain text widget to show as a default value and use the isNotEmpty attribute to put the widget to show when the contents are present.


---
[](https://api.flutter.dev/flutter/widgets/Dismissible-class.html)

[](https://www.youtube.com/watch?v=ORIi0wM0Np4)

[](https://velog.io/@jeong_woo/Flutter-swipe%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AD%EC%A0%9C-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EB%B0%8F-undo-Dismissible-SnackBar)