Today, we're going to learn about storing data you need while developing the app with Flutter. 

There are many ways to store data, but in this article, we'll make examples of each using the three most commonly used methods: Shared_Preferences, SQLite, and path_provider packages!

## Share Preferences
It is a good way to store simple data. 

It is often used to store small pieces of information that are paired with key and value, and to store simple data such as user settings and login information. 

It has the advantage of being lightweight and fast in accessing data.

1️⃣ However, because it is a very simple method of storing data, it is not suitable for storing or managing complex data structures.

2️⃣ Also, it is slow to store large amounts of data. This is because it stores data in XML format, not files, and loads all data into memory.

[](https://pub.dev/packages/shared_preferences)

**Example of using share preferences**

```json
depedencies:
	flutter:
		sdk: flutter
	shared_preferences: ^2.0.20
```

### Write & Read & Remove Data

#### Write
```dart
final SharedPreferences prefs = await SharedPreferences.getInstance();

// set int
await prefs.setInt('counter', 10);

// set boolean
await prefs.setBool('repeat', true);

// set double
await prefs.setDouble('decimal', 1.5);

// set string
await prefs.setString('action', 'Start');

// set string list
await prefs.setStringList('items', <String>['Earth', 'Moon', 'Sun']);
```

#### Read
```dart
final SharedPreferences prefs = await SharedPreferences.getInstance();

// get int
final int? counter = prefs.getInt('counter');

// get boolean
final bool? repeat = prefs.getBool('repeat');

// get double
final double? decimal = prefs.getDouble('decimal');

// get string
final String? action = prefs.getString('action');

// get string list
final List<String>? items = prefs.getStringList('items');
```

#### Remove
```dart
final SharedPreferences prefs = await SharedPreferences.getInstance();

// remove data
await prefs.remove('counter');
```

---
[](https://toyou101.tistory.com/9)

[](https://medium.com/@nandhuraj/
flutter-data-persistence-a-guide-to-storing-model-lists-with-sharedpreferences-59da63023168)

[](https://pub.dev/packages/shared_preferences)