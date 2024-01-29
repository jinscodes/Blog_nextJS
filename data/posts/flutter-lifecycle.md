## Intro..
With flutter, stateless and stateful widgets are used. 

While using stateless and stateful, I felt that I needed to study how the state of the flutter works.

This post is about lifecycle of the flutter.

## What Is Lifecycle of The StatefulWidget
The Stateful widget has a lifecycle. 

In the Flutter app, the lifecycle of widgets from creation to destruction is managed, and specific methods are called at a specific point in the life cycle. 

Understanding the state of this lifecycle enables precise control of widgets. The **build method** and **initState method** that we use without being aware of when creating widgets are also related to the lifecycle.

- createState
- initState
- build
- setState
- dispose

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/887715a8-5a0f-443c-a881-24c500cafb60)

## Widget Lifecycle in Flutter
#### Construction
When you instantiate a widget by calling its constructor, the widget is created. During construction, you typically provide any required parameters and initialize the widget’s state. The constructor is called once for each instance of the widget.

#### Initialization
After construction, the framework calls the initState() method of the widget's corresponding State object. This is where you can perform any initialization tasks that require the widget to have access to its BuildContext. You can initialize variables, subscribe to streams, set up listeners, and perform other setup tasks.

#### Build
The build() method is called whenever the widget needs to be rendered or updated. This method returns a widget tree, describing how the UI should look based on the current state of the widget. The framework invokes build() initially and subsequently whenever the widget's state changes or when its parent requests a rebuild.

#### State Updates
When the widget’s state changes, either through user interaction, data changes, or other events, the framework calls the setState() method of the widget's State object. This triggers a rebuild of the widget, causing the framework to call build() again. By calling setState(), you signal that the widget's state has changed and should be reflected in the UI.

#### Rebuilding
When the framework determines that a widget needs to be rebuilt, it calls the build() method to obtain a new widget tree. The new tree is compared to the previous tree, and the framework applies the necessary updates to the UI to reflect the changes. The rebuild process is efficient because Flutter uses a diffing algorithm to determine the minimal changes required to update the UI.

#### Deactivation
If a widget is removed from the widget tree but might be added back later, the framework calls the deactivate() method of the widget's State object. This method allows the widget to clean up any resources it no longer needs while preserving its state. For example, you can pause animations, cancel subscriptions, or release resources.

#### Disposal
When a widget is removed from the widget tree permanently, the framework calls the dispose() method of the widget's State object. This is the final opportunity for the widget to release resources, cancel subscriptions, or perform any cleanup tasks. After dispose() is called, the widget and its state are no longer usable.

It’s important to note that widgets in Flutter are immutable. When a widget’s state changes, Flutter rebuilds the widget tree, creating a new set of widgets with the updated state. This approach allows for efficient UI updates and helps maintain a declarative programming style.

Understanding the widget lifecycle enables you to manage state appropriately, handle asynchronous operations, and optimize your Flutter app’s performance by minimizing unnecessary rebuilds and resource usage.

## Seven Cycles of StatefulWidget 
The lifecycle of a stateful widget in Flutter consists of seven cycles.

Understanding these cycles is essential for managing the state and controlling the behavior of the widget. Let’s explore each cycle.

### CreateState()
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a43131a4-6136-4dd7-99bb-039ce31f248c)

This method is required and creates a State object for the widget. It holds all the mutable state for that widget. The State object is associated with the BuildContext by setting the mounted property to true.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2d4deb25-37af-4511-bbd2-789280a6f35e)

### initState()
![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9b9099a2-c250-4ff7-a92a-32f852645dba)

This method is automatically called after the widget is inserted into the tree. It is executed only once when the state object is created for the first time. Use this method for initializing variables and subscribing to data sources.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f8a36a54-7944-4808-8c3d-4cdfbf9380d7)

### didChangeDependencies()
![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1aed97ba-6035-48f3-880a-6e9fbc0e4c4a)

The framework calls this method immediately after initState(). 

It is also called when an object that the widget depends on changes. Use this method to handle changes in dependencies, but it is rarely needed as the build method is always called after this.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fadbe097-3c63-477c-98a7-1671beae6a8d)

### build()
![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7f6c70f4-78a8-4de7-b959-9e50ff59ce71)

This method is required and is called many times during the lifecycle. It is called after didChangeDependencies() and whenever the widget needs to be rebuilt. Update the UI of the widget in this method.

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e22a155d-0ccf-4aab-9b97-064007ea17b8)

### didUpdateWidget()
![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cc4f5744-4365-4472-a45a-021ea81c186e)

This method is called when the parent widget changes its configuration and requires the widget to rebuild. It receives the old widget as an argument, allowing you to compare it with the new widget. Use this method to handle changes in the widget's configuration.

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3b883d97-1462-4a57-b823-42a8638b8852)

### setState()
![12](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d8650714-69ce-4b49-80bd-2f4d8d35ec42)

The setState() method notifies the framework that the internal state of the widget has changed and needs to be updated. Whenever you modify the state, use this method to trigger a rebuild of the widget's UI.

![13](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7290c3af-5863-4fcf-95b1-046e8d553bb8)

### deactivate()
![14](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fce3326d-65a3-41cd-9711-baef9263bbc9)

This method is called when the widget is removed from the widget tree but can be reinserted before the current frame changes are finished. Use this method for any cleanup or pausing ongoing operations.

![15](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3e53f69a-b508-49b2-8741-9be39544eca1)

### dispose()
![16](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dec15a8f-c04a-43fe-bd28-d9c6a17aade2)

This method is called when the State object is permanently removed from the widget tree. Use this method for cleaning up resources, such as data listeners or closing connections.

![17](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dcd362d6-4095-47dd-b26b-ea7b6dd1c152)

After the dispose() method, the State object is no longer in the tree, and the mounted property is set to false. The state object cannot be remounted.

## Conclusion...
![18](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d8ceeb78-062f-4a9c-8a4a-2386051d8760)

> 💡 The constructor function is not part of the lifecycle as the state of the widget property is empty during that time.

Understanding these lifecycle cycles helps in managing state changes, handling dependencies, and updating the UI effectively in stateful widgets.

---
[](https://nomadcoders.co/flutter-for-beginners/lobby?utm_source=free_course&utm_campaign=flutter-for-beginners&utm_medium=site)

[](https://fronquarry.tistory.com/16)

[](https://dev.to/pranjal-barnwal/the-journey-of-a-widget-understanding-the-lifecycle-in-flutter-3plp)