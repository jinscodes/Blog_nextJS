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

If you want to update only certain parts of the screen, you can implement them separately.

For example, if you create a widget that updates frequently to the point where you need to draw a new one every second, as shown below, you can implement it separately.

![12](https://github.com/user-attachments/assets/c7c2c4a2-8061-40fe-85a4-e842f6ef6b99)

Provider has the disadvantage of being able to listen only to view model streams, and it does not support one-time events such as creating warning windows, so it is inconvenient to implement them yourself. When using Provider, broke MVVM rules in cases like this.

![13](https://github.com/user-attachments/assets/4ade69b0-193e-4b08-8393-551a6417e86c)

## Types of State Management: BLoC Pattern

The Bloc(Business Logic Component) pattern is commonly used for state management in Flutter, especially for complex applications. It separates the UI from the business logic and uses streams to manage and propagate state changes. The `flutter_bloc` package is widely adopted for implementing the Bloc pattern.

### Implementing MVVM Patterns with BLoC

BLoC is very similar to Provider. It feels like a Provider extension because it provides a few more features in addition to what Provider provides. There is only one big difference. The point is that Provider only notifies 'state has changed', while BLoC only notifies 'pre-defined state'.

Let's take a look at the code below.

![14](https://github.com/user-attachments/assets/6c7f8f07-7d9b-400a-b0c6-5fe63749f308)

BLoC cannot have two states at the same time.

![15](https://github.com/user-attachments/assets/663270c0-8790-4e96-934f-14cb9e10d3e4)

Because of these above things, ViewModel is naturally divided into different classes based on their characteristics. These different functions are separated and made into different cubits.

Let's look at the figure below.

![16](https://github.com/user-attachments/assets/872b7fb1-a823-4572-97de-39b77522d890)

Let's see the widget tree comparing to Provider.

![17](https://github.com/user-attachments/assets/d1cae206-9d13-4e29-a024-ad13879d46f9)

Of course, Providers can develop code by separating classes like Cubit, but while Providers are autonomous, BLoC is forced to divide classes.

Forced separation enables object-oriented encapsulation, but this separation is often more inconvenient. For example, if data sharing is required between Cubits, there is a lot of work to be done.

MVVM patterns prohibit reference between ViewModel and instead recommend communicating at upper layers, view, or lower layers. BLoC uses the same rules. BLoC Repository is used in cases like this.

![18](https://github.com/user-attachments/assets/09f2bc4e-be0d-4b77-ab54-094f0d90f603)

Below is the code using BLoC.

![19](https://github.com/user-attachments/assets/ad8180cd-5242-4163-9522-c36fb491cf55)

## Types of State Management: GetX Package

GetX is a powerful and lightweight state management library for Flutter.

It provides a simplified and high-performance way to manage state, handle navigation, and inject dependencies. GetX is known for its simplicity and efficiency.

### Implementing MVVM Patterns with GetX

GetX is most popular package among three libraries in **pub.dev**.

The class configuration is almost the same as when using StatefulWidget. Only the two below are different. I'll explain it in the comments in the code.

- Register and import service and view model objects
- Use Rx and Obx to update only relevant widgets
  - Rx: a class that informs the outside when a variable value changes
  - Obx: Widgets to redraw the screen when Rx changes occur

![20](https://github.com/user-attachments/assets/da18a271-a4a1-4cfa-8d7e-d4dd89141950)

Providers and BLoC always need to use BuildContext to get a view model, but GetX can call objects without BuildContext.

![21](https://github.com/user-attachments/assets/0c81e451-ab11-4842-8949-43d753476487)

While GetX uses the method of getting instances of the same type among view models that currently exist in memory, Providers and BLoC use dependency injection with BuildContext.

BuildContext is one of the main concepts in which Flutter widgets work. In the development of declarative UI methods such as Flutter, children are drawn one by one from the top of the widget tree to draw a screen. When each widget is drawn on the screen, it receives a BuildContext. BuildContext indicates the location of the widget that you need to draw in the widget tree. When you draw a widget, you can trace back this value to know where the screen area you need to draw, theme values such as colors and fonts, and screen navigator information. Even if you don't have to pass every one of these values to the widget creator, you can get dependence injected through BuildContext.

The widget tree figure below is a more detailed picture of how to use dependency injection using BuildContext.

---

[](https://kkangsnote.tistory.com/247)

[](https://medium.com/@enitinmehra/state-management-in-flutter-a-comprehensive-guide-7212772f026d)

[](https://engineering.linecorp.com/ko/blog/flutter-architecture-getx-bloc-provider?fbclid=IwAR1PbF9GHnum6WruP9SEYd2gdCNScjxzo-hTTp3Nlqv0o4K341NVbL8S4nU)
