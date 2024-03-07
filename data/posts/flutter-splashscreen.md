## Intro..
The screen that comes out as soon as the app is launched is called a splash screen. 

99% of the apps we use, such as Netflix, do not come out of the main page as soon as we run it for the first time, but go through the screen with the logo floating as above.

This screen is necessary because it takes some time to get data through automatic login or to conduct security-related inspections during splash screen, rather than just showing off the logo.

Or, in some cases, it's simple to prevent further access from this screen for service inspection, but it's a very meaningful screen.

## Splash Screen
There are approximately two ways to make a splash screen.

1. Without Using Library
2. Using Library

### Without Using Library
Simply put, prepare a splash screen and initially show the splash screen for a certain period of time before letting it move to the main screen.

#### Prepare The Splash Screen
First of all, the screen needs to be made in the same way as we build the other screens.

```dart
Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).cardColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset("assets/image/clock.png"),
            Text(
              "POMO",
              style: TextStyle(
                fontSize: 50,
                fontWeight: FontWeight.w900,
                color: Theme.of(context).textTheme.displayLarge!.color,
              ),
            ),
          ],
        ),
      ),
    );
  }
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fe3c4cfc-20b8-459e-bd11-a6b2193fc761)

> You can freely create this screen as you want.

#### initState()
When the screen is ready, add a code that moves to the next screen after a certain period of time. 

The code below is the code that automatically Navigates after 1.5 seconds.

```dart
  @override
  void initState() {
    super.initState();
    _navigateToHome();
  }

  _navigateToHome() {
    Timer(const Duration(seconds: 1.5), () {
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => const Onboarding()));
    });
  }
```

This method utilizes `initState()`.

The above code is not very difficult and the project is less heavy because it does not use any other library.

This is the result ↓

![spalshscreen](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4b460572-52f7-47c6-a7f9-492da2534127)