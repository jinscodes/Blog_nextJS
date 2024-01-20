## Intro...
The power of flutter is enormous these days. 

Although my goal is to make application and release it on the market, it's not easy to approach native because it's so difficult. However, Flutter made it relatively easy to access the app.

Just because flutter is easier than other native doesn't mean it's as easy as it gets. 

This post is about making flutter project. Let's get it!

If you want to check the documents, check it ↓

Official:   
[flutter](https://flutter.dev/)

Flutter dev:   
[flutter-dev](https://docs.flutter.dev/get-started/install)

## Settings: VScode, Xcode, and Android Studio
It's necessary to do a lot of settings to develop the app using Flutter. 

### VScode
Most developers may have experience using VScode or may be using it.

To use Flutter via VScode, we need to install extensions.

**Dart Extension**:
![dart](https://github.com/jinscodes/Blog_nextJS/assets/87598134/93258fa8-8e0e-4320-b71b-3d3e2329ae5f)

**Flutter Extension**:
![flutter](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3432f2bc-3d8e-4c3c-bdf3-358862fed15c)

**Flutter Wdiget Snippets Extension (Not Necessary, But Recommended)**:
![flutter-sni](https://github.com/jinscodes/Blog_nextJS/assets/87598134/06e40af4-ba9c-4d97-bf2c-80688f09491e)

### Xcode
Flutter is a cross-platform for mobile application, so we can make ios application using flutter.

When developing ios app, using ios simulator and releasing it through Xcode. Therefore, Xcode is needed when developing the app.

1. Xcode: Web 
	1. [](https://developer.apple.com/xcode/ "Web")
2. Xcode: Mac App Store
	1. [](https://apps.apple.com/us/app/xcode/id497799835 "Mac App Store")

After the installing the Xcode throught the above link, do next as follow.

```bash
$ sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
$ sudo xcodebuild -runFirstLaunch
$ sudo xcodebuild -license
$ sudo gem install cocoapods
```

### Android Studio
Surely, an android application can be developed using flutter. However, unlike ios, android studio is needed to use android emulator and release the app.

1. Android Studio
	1. [](https://developer.android.com/studio)


## Install Flutter SDK 
To make application with flutter, we need to install flutter SDK. 

Firstly, make the folder for installing the flutter SDK. 

```bash
$ mkdir ~/development
$ cd ~/development
```

If we have created a folder to download the Flutter SDK, use the command below to clone the Flutter SDK.

```bash
$ git clone https://github.com/flutter/flutter.git -b stable
```

Alternatively, we can download the Flutter SDK that we distribute over the web using the following command.

```bash
$ curl -O https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_2.0.3-stable.zip
$ unzip flutter_macos_2.0.3-stable.zip
```

## Setting Path
To use the Flutter SDK, we must set the path to the Flutter SDK. Use the following command to modify the file for adding the path.

```bash
$ code ~/.zshrc
```

And, add the following to the bottom of the file.

```md
...
export PATH=$HOME/development/flutter/bin:$PATH
```

## Dependency Installation
We need to install the SDK and Tools needed to develop the app with Flutter. Run the following command to install what we need to develop the app with Flutter.

```bash
flutter doctor
```

If copy the Flutter SDK to git clone, it takes a lot of time to build the SDK. If download the SDK from the web, it also includes what was built, so we can proceed a little faster.

When the run is complete, we can see the following results.

![flutterdoctor](https://github.com/jinscodes/Blog_nextJS/assets/87598134/024fbb46-3dac-4242-aec6-73ab00cff5c7)

We can check what flutter SDKs we need through the `flutter doctor` command.

## Create Flutter Project
If there are no problems (flutter doctor), we can create flutter app project.

```bash
$ flutter create my_app
```

And then, run Android emulator or iOS simulator, and then run the app generated through the command.

**Open IOS Simulator**

```bash
	open -a Simulator
```

**Open Android Simulator**

```bash
	emulator -list-avds
	emulator -avd @name-of-your-emulator
```

**Start flutter project**

```bash
	cd my_app
	flutter run
```

### Result
#### Simulator
![simulator](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d9215f5-5e25-4f30-a127-e876079255c8)

#### Run Flutter
![runflutter](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fcf5a35b-f261-4f1b-b9ed-bb456c682b94)

---
[](https://deku.posstree.com/ko/flutter/installation/)

[flutter](https://flutter.dev/)

[flutter-dev](https://docs.flutter.dev/get-started/install)
