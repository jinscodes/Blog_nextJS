We can’t just have a beautiful application that does nothing functional. 

We will be required to move around the application or send data back and forth between screens.

In Flutter, navigation from one screen to another is possible because of Navigators, a simple widget that maintains a stack of Routes, or in simpler terms, a history of visited screens/pages.

## Push
**Push** 

If you have any knowledge in Data Structures, then you know about Stacks. If you have even basic knowledge of stacks, then you know about push and pop.

The data structure and stack are always related, so if you know about the data structure, you know about the stack (at least you've heard of it). 

If you know about the stack, you've heard about push and pop.

pushing is adding element to the top of a stack of elements and popping is removing the top element from the same stack.

So in case of Flutter, when we navigate to another screen, we use the push methods and Navigator widget adds the new screen onto the top of the stack. Naturally, the pop methods would remove that screen from the stack.

### Navigator.push()
If there is no data to send, it's possible to change the screen through `Navigator.push()`.

```dart
Navigator.push(
	context,
	MaterialPageRoute(
		builder: (context)=>AnotherScreen(),
	),
);
```

Here is an example 👇🏼

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4b64cb5c-b033-4171-b3d8-f35e3ce3c48e)

### Navigator.pushNamed()
We can provide the path through MaterialApp's property, `initialRoute` and `rotues`.

`initialRoute` sets the start screen. If making a map of screenName and Wideget in the `routes` and specify it, you can switch a simple screen call through the string.

```dart
MaterialApp(
	title: "Flutter App",
	theme: ThemeData(
		primaryColor: Colors.blue,
		brightness: Brightness.dark,
	),
	initialRoute: HomeScreen.routeName,
	routes: routes,
)

final routes = {
	HomeScreen.routeName: (_) => HomeScreen(),
	AnotherScreen.routeName: (_) => AnotherScreen(),
};

Navigator.pushNamed(context, AnotherScreen.routeName);
```

Or,

```dart
Navigator.push(
	context,
	MaterialPageRoute(
		settings: const RouteSettings(
			name: AnotherScreen.routeName,
		),
		builder: (context) => AnotherScreen(),
	),
);
```

Here is an example

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/13f5ef00-080b-4544-ac7f-e180fb1edf5c)

### Navigator.pushNamedAndRemoveUntil()
`Navigator.pushNamedAndRemoveUntil()` do `push()` the pages and remove the pages in the stack.

```dart
Navigator.pushNamedAndRemoveUntil(context, newRouteName, (route) => false);
```

Remove all previous pages from stack

```dart
Navigator.pushNamedAndRemoveUntil(
	context, 
	ThirdScreen.routeName, 
	(route) => false, 
	arguments: {"update": true}
);
```

Or, remove all before a particular page in the stack

```dart
Navigator.pushNamedAndRemoveUntil(
	context,
	ThridScreen.routeName,
	ModalRoute.withName(SecondScreen.routeName),
	arguments: {"update": true},
);
```

There is an example 👇🏼

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f4bebbdd-1012-4303-b37d-62e1c07a7d67)

### Navigator.pushReplacementNamed()
`Navigator.pushReplacementNamed()` allows to remove the current page from the stack and put the page you want to move into the stack.

```dart
Navigator.pushReplacementNamed(context, ThridScreen.routeName);
```

---
[](https://medium.com/flutter-community/flutter-push-pop-push-1bb718b13c31)

[](https://seosh817.tistory.com/211#1.%20Navigator.push()%EB%A1%9C%20%ED%99%94%EB%A9%B4%20%EC%A0%84%ED%99%98-1)