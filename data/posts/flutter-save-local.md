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

**Write**
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

## SQLite
It is used when a relational database is needed in the flutter.

We can store and manage complex data structures and relationships, and we can search, sort, and filter data using queries. We can use it when we want to store and manage data in a table form.

1️⃣ However, because it is a relational database, defining initial settings and table structure can be complicated.

2️⃣ Also, overhead can be large compared to simple data storage. There are limitations to storing and managing non-relational data.

[](https://pub.dev/packages/sqflite)

**Example of using SQLite**

```json
depedencies:
	flutter:
		sdk: flutter
	sqflite: 
```

### Open & Close

```dart
var db = await openDatabase('my_db.db');

await db.close();
```

```dart
// Get a location
var databasePath = await getDatabasePath();
String path = join(databasesPath, 'demo.db');

// Delete the database
await deleteDatabases(path);

// Open the database
Database database = await openDatabases(path, version: 1, onCreate: (Database db, int version) async {
	await db.execute('CREATE TABLE Test');
});

// Insert records in a transaction
await database.transaction((txn) async {
	int id1 = await txn.rawInsert('INSERT INTO TEST');
	print('inserted1: $id1');
	 int id2 = await txn.rawInsert(
      'INSERT INTO Test(name, value, num) VALUES(?, ?, ?)',
      ['another name', 12345678, 3.1416]);
  print('inserted2: $id2');
});

// Update record
int count = await database.rawUpdate(
	'UPDATE Test Set name',
	['updated name', 1234567, 3.1416]
);
print('updated $count');

// Get record
List<Map> list = await database.rawQuery('SELECT * FROM Test');
List<Map> expectedList = [
	{'name': 'updated name', 'id': 1, 'value': 9876, 'num': 456.789},
	{'name': 'another name', 'id': 2, 'value': 1234, 'num': 3.14},
];
print(list);
print(expectedList);
assert(const DeepCollectionEquality().equals(list, expectedList));

// Count record
count = Sqflite.firstIntValue(await database.rawQuery('SELECT COUNT(*) FROM Test'));
assert(count == 2);

// Delete a record
count = await database
    .rawDelete('DELETE FROM Test WHERE name = ?', ['another name']);
assert(count == 1);

// Close the database
await database.close();
```

## path_provider


---
[](https://toyou101.tistory.com/9)

[](https://medium.com/@nandhuraj/
flutter-data-persistence-a-guide-to-storing-model-lists-with-sharedpreferences-59da63023168)

[](https://pub.dev/packages/shared_preferences)