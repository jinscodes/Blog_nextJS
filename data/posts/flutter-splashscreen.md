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
// splashscreen.dart
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

Putting the created splash screen into the main.dart's `materialApp` so that it runs immediately when the app starts.

```dart
// main.dart
Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'POMODORO APP',
      theme: ThemeData(
        textTheme: const TextTheme(
          displayLarge: TextStyle(
            color: Color(0xFF232B55),
          ),
        ),
        cardColor: const Color(0xFFF4EDDB),
        colorScheme: ColorScheme.fromSwatch(
          backgroundColor: const Color(0xFFE7627C),
        ),
      ),
      home: const SplashScreen(), // <=
    );
  }
```

#### initState()
When the screen is ready, add a code that moves to the next screen after a certain period of time. 

The code below is the code that automatically Navigates after 1.5 seconds.

```dart
// splashscreen.dart
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

### (Utilization) Block Navigate and shut down the app if certain conditions are not met
As I mentioned earlier, SplashScreen may need to stop Navigate and shut down the app due to service checks or other issues, depending on the situation.

This is also implemented in `initState()`.

```dart
 @override
  void initState() {
    _navigateToHome();
    super.initState();
  }

  _navigateToHome() {
    Timer(const Duration(seconds: 3), () {
      if (userData) {
        Navigator.pushReplacement(context,
            MaterialPageRoute(builder: (context) => const Onboarding()));
      } else {
        exit(0);
      }
    });
  }
```

The above code is designed to move to `Onboarding()` if there is userData, and the app is terminated if there is no userData.

This is the example ↓

![splashscreen2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1e93fd69-2c95-4706-a9c8-f74f71ee8916)

### Using Library
This time, we will implement the screen using the flutter_native_splash package.

### Install Package And Create yaml File
Check the latest version of the flutter_native_splash package and add the package version to the dependencies location of the pubspec.yaml file to proceed with the installation.

[](https://pub.dev/packages/flutter_native_splash)

```yaml
dependencies:
  flutter_native_splash: ^2.2.7
```

Create a new file named flutter_native_splash.yaml in the app project root path and add the code below. 

The code can be found on the package site.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5df28669-d838-4d32-888b-867ed5c6c90c)

Package option values are as follows.

- color: background color of splash screen
- background_image: background image of splash screen
- image: main image of splash screen
- color_dark: background color in dark mode
- background_image_dart: background image in dark mode
- image_dart: main image in dark mode
- android_gravity: image location on Android
- ios_content_mode: image location in ios
- fullscreen: full screen of splashscreen

### Insert Image and Create Image
Save the image to be used by Splash Screen to the asset/splash.png location.

Now run the following command to create a splash screen image.

```bash
flutter pub run flutter_native_splash:create
```

💡 If you want to remove the image, run the following command

```bash
flutter pub run flutter_native_splash:create
```

--- 
[](https://box-world.tistory.com/75)

[](https://hanyohan0923.github.io/posts/Flutter-Pomodoro2/)

[](https://pub.dev/packages/flutter_native_splash)

[](https://dev-nam.tistory.com/38)