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

---

[](https://kkangsnote.tistory.com/247)

[](https://medium.com/@enitinmehra/state-management-in-flutter-a-comprehensive-guide-7212772f026d)

[](https://engineering.linecorp.com/ko/blog/flutter-architecture-getx-bloc-provider?fbclid=IwAR1PbF9GHnum6WruP9SEYd2gdCNScjxzo-hTTp3Nlqv0o4K341NVbL8S4nU)
