## Intro...
It is convenient to use `FutureBuilder` to receive data in Future format using a database or the Internet and display the list on the screen. 

In this article, we will learn how to use both `FutureBuilder` and `ListViewBuilder`.

## What are Future Operations?
Future operations are the operations which take time to perform and return the result later. To handle this problem, we use Asynchronous functions.

#### Asynchronous Functions
Asynchronous operations let your program continue other operations while the current operation is being performed. Dart uses Future objects (futures) to represent the results of asynchronous operations. To handle these operations, we can use Async/await, but it is not possible to integrate async and await on widgets. So it is quite tricky to handle futures in widgets. To solve this problem flutter provided a widget called Future Builder.

## Future Builder
In future builder, it calls the future function to wait for the result, and as soon as it produces the result it calls the builder function where we build the widget.

```dart
class ProjectModel {
	String id;
	List routines;

	ProjectModel ({
		this.id,
		this.routines
	});
}
```

Create a model “ProjectModel”.

In the below example, I have used the future builder and for a list, I have used List view builder.

```dart
Future getProjectDetails() async {
  var result = await http.get('https://getProjectList');
  return result;    
}
```

Implement the widget to display the list of projects with the future builder.

```dart
Widget projectWidget() {
  return FutureBuilder(
    builder: (context, projectSnap) {
      if (projectSnap.connectionState == ConnectionState.none &&
          projectSnap.hasData == null) {
        //print('project snapshot data is: ${projectSnap.data}');
        return Container();
      }
      return ListView.builder(
        itemCount: projectSnap.data.length,
        itemBuilder: (context, index) {
          ProjectModel project = projectSnap.data[index];
          return Column(
            children: <Widget>[
              // Widget to display the list of project
            ],
          );
        },
      );
    },
    future: getProjectDetails(),
  );
}
```

---
[](https://blog.nonstopio.com/flutter-future-builder-with-list-view-builder-d7212314e8c9)

[](https://jabhak-dasik.com/2023/03/27/flutter-future-builder%EC%99%80-listview-builder-%EA%B0%99%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)

[](https://www.youtube.com/watch?v=D7TYjCQfBNk)