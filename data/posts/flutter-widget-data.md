## Intro...
When I started my first flutter project as a side project, the first thing I created was a login page.

It was so different from the app to make up the web's login screen and data.

It was difficult to configure the screen, of course, but I struggled for a long time because I didn't know how to transfer it to another widget to save and use variables.

I tried to convey the variables through the constructor, but the statefulWidget was divided into two classes, and I didn't know how to use the variables received in the statefulwidget in the state class.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e8a8c98a-61ef-4f3d-9694-f14d5a0530f1)

## Passing Data to StatefulWidget: Auth
The first thing that I wanted to do is to make login widget.

I divided the login functions into three dart files: **auth.dart & login.dart & signup**

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
          Login(token: loginToken, setToken: setToken)));
  }

	 Widget build(BuildContext context) {
    return Builder(
			...
			Navbutton(
				title: login,
				setState: setToken,
			),
		);
	}
}
```

To check the presence or absence of tokens, declare loginToken and setToken.

Send declared 'loginToken' and 'setToken' to 'NavButton' as Param.

At this time, I thought that if I simply sent it like that, I could use loginToken and setToken right away. However, it was possible to send variables and functions to NavButton, but using it was different from my expectations.

The reason was that stateful Widget is divided into two classes.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/33bed845-d3a9-46fe-8b0c-634ebdf8c774)

## Passing Data to StatefulWidget: Login

---
[](https://stackoverflow.com/questions/50287995/passing-data-to-statefulwidget-and-accessing-it-in-its-state-in-flutter)