## Intro..
There are two main ways to manage values such as color in a flutter.

Use constants to manage frequently used values at once or to make them a little more stringent.

Alternatively, there is a way to create and manage ThemeData.

## Constant
If working on the project, not just the flutter, we have to use a lot of colors.

And it's cumbersome to input the color in Rgb every time.

Create the theme.dart in the common folder and set a constant using the appTheme class.

Create variables and assign them to all the colors in the app.

```dart
// common/theme.dart
class appTheme {
  static const Color mainGreen = Color(0xFF111111);
  static const Color white = Colors.white;
  static const Color grey = Colors.grey;
  
  // main_page
  static const Color bottomNavBackgroundColor = white;
  static const Color bottomNavSelectedColor = mainGreen;
  static const Color bottomNavUnselectedColor = grey;

  // home_page
  static const Color buttonAddBackgrounColor = mainGreen;
  static const Color buttonAddForegroundColor = white;
  static const Color buttonMoreBackgrounColor = mainGreen;
  static const Color buttonMoreForegroundColor = white;
  
  ...
}
```

But most of the time, the app itself doesn't have a huge amount of color and doesn't have to change color. 

Alternatively, the amount of variables can increase as the project increases in size.

## ThemeData
There is a method of creating and using ThemeData without declaring color values as constants in the class.

```dart
theme: ThemeData(
  primarySwatch: Colors.lightBlue,
  accentColor: Colors.teal,
  fontFamily: ‘Lato’,
  textTheme: ThemeData.light().textTheme.copyWith(
    title: TextStyle(
      fontSize: 20,
      fontFamily: ‘Lato’,
      fontWeight: FontWeight.bold,
    ),
  ),
)
```

--- 
[](https://uzzam.dev/33)