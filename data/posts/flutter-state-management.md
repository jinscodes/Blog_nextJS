## What is State Management?

**State**, in the context of a Flutter app, represents the information that can change over time and influences the appearance and behavior of the UI. Effective state management involves handling and updating this data to keep the UI in sync with the application’s logic.

In Flutter, the UI is typically divided into widgets, and state management revolves around how data is shared and updated between these widgets. Good state management ensures that when a change occurs in one part of the app, it accurately reflects in the other relevant parts of the UI.

## Reason For Using Open Source Library

When creating an app, it is recommended to unify it in one structure. It is difficult to maintain if you create the results in different patterns on each screen. If you draw a patternable part and make it an architectural library, you can get a unified output even if the workers are different.

At this point, you can create your own architectural library or use open source. However, if you make it yourself, you have to verify it by yourself, create your own manuals, and lack references to refer to when various situations arise. On the other hand, the popular open-source library has been discussed and tested by a variety of people over a long period of time. Many people are constantly verifying and updating it, have well-equipped manuals, and you can easily find references for various problem situations.

When developing the application with Flutter, we must consider and choose architecture library. There are multiple libraries, such as GetX, Provider, and BLoC. Let's compare these three libraries.

## MVVM Pattern

Every libraries, GetX, Provider, and BLoC, are using MVVM pattern. MVVM creates classes by dividing them into the three section: **M**odel-**V**iew-**V**iew**M**odel.

MVVM refers to the pattern that is consisting of **ViewModel** manipulating the Model's data and **View** showing **ViewModel**.

![](https://github.com/user-attachments/assets/b6e44a57-c331-4f5c-9de3-507c0c8fb5d3)

The MVVM pattern is mainly used when data needs to be processed.

There is an example.

![1](https://github.com/user-attachments/assets/9fb83644-9891-4bb5-b081-a1795c0f9122)

In the traditional development method, when an action occurs, everything is handled in one function.

The below example is

1. It's not using viewmodel
2. `exampleFunc` definition is complex → Get data, update screen, close screen if error occurs
3. It's ambiguous to test this function

```dart
exampleFunc() {
	// Get data
	final data = await requestArticle();

	// Update screen
	view.updateTitle(data.title);
	view.updateText(data.text);

	// Close screen if error occurs
	if (data.hasError) {
		Navigator.pop();
	}
}
```

But, the MVVM pattern reflects the action result as data as shown below. When the result is obtained from the data, the purpose of writing the code becomes clear and the test becomes easier.

1. Below example is using viewmodel
2. `exampleFunc` definition is clear -> Get data from outside and store it inside
3. Perform a function test by comparing data before and after function call

```dart
exampleFunc() {
  this.data = await requestArticle();

	if (data.hasError) {
    emit(HasError());
  }
}
```

Furthermore, the MVVM architecture also applies the following rules.

![2](https://github.com/user-attachments/assets/7d3b5a91-9300-4483-bb9a-e786a9b7b94b)

---

[](https://kkangsnote.tistory.com/247)

[](https://medium.com/@enitinmehra/state-management-in-flutter-a-comprehensive-guide-7212772f026d)

[](https://engineering.linecorp.com/ko/blog/flutter-architecture-getx-bloc-provider?fbclid=IwAR1PbF9GHnum6WruP9SEYd2gdCNScjxzo-hTTp3Nlqv0o4K341NVbL8S4nU)
