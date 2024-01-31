## Intro...
When I started my first flutter project as a side project, the first thing I created was a login page.

It was difficult to configure the screen, of course, but I struggled for a long time because I didn't know how I transfer datas to another widget to save and use it.

I tried to convey the variables through the constructor, but it's not what I thought. I didn't know how to use the variables received in the statefulwidget in the state class.

This post is about data passing through **widget**.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e8a8c98a-61ef-4f3d-9694-f14d5a0530f1)

## Passing Data Through The Widget Constructor
The simplest way to send data from a widget to another is using its constructor.

In my case, on the first page(auth.dart file), there are datas: `loginToken` and `setState` function. When the user click the login button, the screen is switched to the login page(login.dart file). At this time, the datas(`loginToken` and `setState`) can be used in the login page because when the login is successful, client gets token and save it into `loginToken` using `setState`.

It means that `loginToken` and `setState` must be passed.

Widget constructor is the simplest way to pass the data to another file or class.

Here's the example

```dart
// Auth.dart
class _Auth extends State<Auth> {
	String loginToken;
	setToken(token) {
    setState(() {
      loginToken = token;
    });
  }

	return Scaffold(
		body: Center(
			child: LoginButton(token: loginToken, setState: setToken),
		),
	);
}
```

```dart
// Login.dart
class Login extends StatelessWidget {
	final String token;
	final Function setState;

  Login({super.key, required this.token, required this.setToken}); // constructor

	Widget build(BuildContext context) {
		return Scaffor(
			...
		)
	}
}
```

Like above codes, datas what we want to pass may be delievered through the constructor.

However, if the destination is StatefulWidget, it requires same process once more. (of course, that's not the case)

```dart
// Login.dart
class Login extends StatefulWidget {
	final String token;
	final Function setState;

	Login({super.key, required this.token, required this.setToken}); // constructor

	@override
  State<Login> createState() => _LoginState(token: token, setToken: setToken);
}

class _LoginState extends State<Login> {
	final String token;
	final Function setState;

	Login({super.key, required this.token, required this.setToken}); // constructor

  @override
  Widget build(BuildContext context) {
		return const Scaffold(
			...
		)
	}
}
```

Even at a glance, using constructor twice is inconvenient and inefficient.

Even, the above code causes warning.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e8db3dd3-e844-424c-b2b4-5aef6067dd86)

## Passing Data Through Widget Keyword
Using the keyword **widget**, the above warning can be solved.

In addition, it is more efficient than code to deliver data using a constructor.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cf1dcc93-0ea1-47da-bd14-711de672efb4)

Here's the example of using widget:

```dart
// Login.dart
class Login extends StatefulWidget {
	final String token;
	final Function setState;

	Login({super.key, required this.token, required this.setToken}); // constructor

	@override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
		String token = widget.token; // widget
		Function setToken = widget.setToken; // widget

		return const Scaffold(
			...
		)
	}
}
```

Like the above, with wedget, we don't have to use the constructor twice. In addition, the length of the code can be reduced because it can be used directly without allocation.

> 💡 If we want to allocate data with *widget* keyword, we must write the type in front.   
> At this time, the type must match the original existing data type.

---
[](https://stackoverflow.com/questions/50287995/passing-data-to-statefulwidget-and-accessing-it-in-its-state-in-flutter)

[](https://docs.flutter.dev/cookbook/navigation/passing-data)

[](https://medium.com/flutter-community/simple-ways-to-pass-to-and-share-data-with-widgets-pages-f8988534bd5b)

[](https://www.youtube.com/watch?v=cuT1koj18yU)