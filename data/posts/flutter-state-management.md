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

![1](https://github.com/user-attachments/assets/b6e44a57-c331-4f5c-9de3-507c0c8fb5d3)

The MVVM pattern is mainly used when data needs to be processed.

There is an example.

![2](https://github.com/user-attachments/assets/9fb83644-9891-4bb5-b081-a1795c0f9122)

In the traditional development method, when an action occurs, everything is handled in one function.

The below example is

1. It's not using viewmodel
2. `exampleFunc` definition is complex → Get data, update screen, close screen if error occurs
3. It's ambiguous to test this function

![3](https://github.com/user-attachments/assets/45f6e3d6-411f-4568-9a0e-c364ca702d29)

But, the MVVM pattern reflects the action result as data as shown below. When the result is obtained from the data, the purpose of writing the code becomes clear and the test becomes easier.

1. Below example is using viewmodel
2. `exampleFunc` definition is clear -> Get data from outside and store it inside
3. Perform a function test by comparing data before and after function call

![4](https://github.com/user-attachments/assets/c131ff1c-a2b8-46a7-a8d5-7e28bd0cec05)

Furthermore, the MVVM architecture also applies the following rules.

![5](https://github.com/user-attachments/assets/7d3b5a91-9300-4483-bb9a-e786a9b7b94b)

## Types of State Management: Stateful Widgets

There are a range of state management solutions for various project complexibilties and developer preferences.

As you know, stateful widgets are the mechanism in Flutter for handling the state. Flutter provides two classes: `StatefulWidget` and `State`.

The `StatefulWidget` represents the immutable part of the widget, while the `State` object holds the mutable state data. When the state changes, calling `setState()` triggers a rebuild of the widget, updating the UI.

### Implementing MVVM Patterns with StatefulWidget

![6](https://github.com/user-attachments/assets/0b895de5-3625-4e84-aca3-8aea4ff7b8aa)

The below code is the part of the ListViewModel that serves as ViewModel.

![7](https://github.com/user-attachments/assets/9d81e395-ce45-4947-9836-96e5ba9307a9)

And then, the below code is the part of the ListPage that serves as View.

![8](https://github.com/user-attachments/assets/7673bff9-6fe0-4a3c-bcb2-0f53b85a47dc)

The above code has the disadvantage that even if only clickCount is changed, `onUpdated()` is called and the entire screen is updated. Complementing this is the minimal build, which updates only the relevant views when data changes.

![9](https://github.com/user-attachments/assets/fea9d511-7f05-473e-909b-0401f5c0b17c)

You can modify the code above to make it a minimal build. However, there are more parameters and callbacks, which complicates the code. It can be easily implemented with GetX at this time.

## Types of State Management: Provider Package

The popular state management package for Flutter is Provider. Through Provider, we can create and manage providers to hold the application's state. Widgets can listen to these providers for changes in the state. Provider is particularly useful for managing global or shared state.

### Implementing MVVM Patterns with Provider

Unlike GetX, Provider uses an object called Provider to provide a ViewModel using BuildContext dependency injection.

When the screen is configured, the widget tree is configured as follows.

![10](https://github.com/user-attachments/assets/985d5e33-5d2c-40c4-b914-a55ae6323c23)

Let's see the code.

![11](https://github.com/user-attachments/assets/389c0201-94ce-4cb4-b361-5538b5d936d4)

---

[](https://kkangsnote.tistory.com/247)

[](https://medium.com/@enitinmehra/state-management-in-flutter-a-comprehensive-guide-7212772f026d)

[](https://engineering.linecorp.com/ko/blog/flutter-architecture-getx-bloc-provider?fbclid=IwAR1PbF9GHnum6WruP9SEYd2gdCNScjxzo-hTTp3Nlqv0o4K341NVbL8S4nU)
