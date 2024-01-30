## Intro...
When I started my first flutter project as a side project, the first thing I created was a login page.

It was so different from the app to make up the web's login screen and data.

It was difficult to configure the screen, of course, but I struggled for a long time because I didn't know how to transfer it to another widget to save and use variables.

I tried to convey the variables through the constructor, but the statefulWidget was divided into two classes, and I didn't know how to use the variables received in the statefulwidget in the state class.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e8a8c98a-61ef-4f3d-9694-f14d5a0530f1)

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