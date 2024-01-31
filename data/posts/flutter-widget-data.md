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

---












## Passing Data to StatefulWidget
The first thing that I wanted to do is to make login widget.

I divided the login functions into three dart files: **auth.dart & login.dart & signup.dart** (I'm not gonna deal with the signup.dart in this post.)

In auth.dart, it has two main things. 

1. Check the token to see if being logged in.

2. Go to the login page or signup page.

```dart
class Auth extends StatefulWidget {
  const Auth({super.key});

  @override
  State<Auth> createState() => _AuthState();
}

class _AuthState extends State<Auth> {
  late String loginToken = "";

  setToken(token) {
    setState(() {
      loginToken = token;
    });
  }

	loginClick() {
    return Navigator.push(
    	context,
      MaterialPageRoute(
        builder: (context) =>
          Login(token: loginToken, setToken: setToken))); // !!!!!
  }

	 Widget build(BuildContext context) {
    return Builder(
			...
			Navbutton(
				title: login,
				setState: loginClick,
			),
		);
	}
}
```

To check the presence or absence of tokens, declare loginToken and setToken.

And then, I tried to send the declared 'loginToken' and 'setToken' to *Login* as Param.

At this time, I thought that if I sent it like above, I could use `loginToken` and `setToken` right away. However, it was possible to send variables and functions to *Login*, but using it was different from my expectations.

The reason was that statefulWidget is divided into two classes.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0f83e719-4594-4a11-b04d-87a86839d34b)

To be precise, if `{title: login, setState: setToken}` in *auth* is sent to *Login*, I got it in Login's first class(StatefulWidget class). However, the place where I wanted to use the received param is the second class.

Here I stopped and thought.

How did I use `{title: login, setState: setToken}` in the second class(_LoginState).

- Send it to _loginState using same method
- Another way

## Receiving Data to StatefulWidget

### Consturctor
The first way I tried is the same way I sent parameters from auth to login.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/760a6883-fb88-4f30-aa69-37c5aa70084a)

Surely, it worked. However, warning occurs.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c46ab0c8-1ee8-4fc9-bc80-b8f0703471db)

After seeing this error, I speculated that there must be another way to use data sent to statefulWidget from *Auth* in the subclass.

### Widget
Also, of course, there was a way to use the data passed to the statefulWidget from *Auth* in the subclass that extends the statefulWidget.

It's `widget`!

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cf1dcc93-0ea1-47da-bd14-711de672efb4)

💡 

---
[](https://stackoverflow.com/questions/50287995/passing-data-to-statefulwidget-and-accessing-it-in-its-state-in-flutter)

[](https://docs.flutter.dev/cookbook/navigation/passing-data)