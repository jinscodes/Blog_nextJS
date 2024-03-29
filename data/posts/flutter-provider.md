In this session, we will learn how to use a **provider**. 

Instead of BLoC patterns, **Providers** can manage the state in a simpler way.

*(The BLoC pattern will be covered in the next post)*

## What is provider?
First, there is a UI (View) part, and the provider's method is executed in the UI to modify or retrieve the data. 

The provider returns the data variables specified in the model to the instance using the fromJson method and stores them in the data variable in the provider.

After saving it, use the `NotifyListeners()` method to let them know that the change has been made, so that the UI (View) can get the change through *Consumer* and apply it to the screen.

However, this *Consumer* is the same as using `Provider.of` and the difference is that if you use `Provider.of(context)`, you can rebuild the entire widget you use, and if you use *Consumer*, you can make only a few parts rebuild.

*(Of course, even in the case of Provider.of(context), setting the parameter to listen: false can prevent rebuilding.)*

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2adcda20-2aa4-40d7-b7c2-f0aab64c9c96)

#### STEP1
Configure folders and files as follows.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/74f45641-6ba3-46de-ba69-c90bff035d3a)

#### STEP2
Write *http* and *provider* in the pubspec.yaml file and `flutter pub get` or save in the terminal.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f685781b-98ff-4a00-8621-1af1d6a2b1cc)

**Provider**
[](https://pub.dev/packages/provider)

**http**
[](https://pub.dev/packages/http)

#### STEP3
Make the album.dart in model folder.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/03e276f1-33bd-4d1c-a018-712b8107c6e4)

#### STEP4
Write the code of album_provider.dart in provider folder.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6eb2a509-3d7f-48b2-9994-b373f4bdba40)

#### STEP5
Write the code of album_view.dart in view folder like below. And then, print the all datas through *Consumer* widget and `ListView.builder`.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0aab63d2-2cee-4a46-8206-4e4fb9e5599d)

#### STEP6
Lastly, follow the below code for main.dart. It's important to wrap it with `ChangeNotifierProvider`.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/362fb017-f1a0-4849-a710-3e211e706602)

DONE!!

---
[](https://pub.dev/packages/provider)

[](https://totally-developer.tistory.com/83)

[](https://www.youtube.com/watch?v=KZv1EDGbHFU)