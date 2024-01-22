## Intro..
There are a lot of problems when setting up the initial setting to use the flutter. 

Most errors can be recognized through the `flutter doctor`, and can be solved based on the errors in the `flutter doctor`.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3abcb2a7-3d4e-40ff-b159-00e2a9e97cf9)

## Flutter Doctor
Flutter Doctor is a command-line tool provided by the Flutter framework. It is used to diagnose and troubleshoot issues related to the Flutter installation and configuration in your development environment. When you run the “flutter doctor” command in your terminal or command prompt, it performs a series of checks and provides feedback on the status of your Flutter installation, as well as any potential issues that need to be addressed.

```bash
$ flutter doctor
```

However, when we do flutter doctor, we can face a lot of error.

### 🚨 Error: Android toolcahin - Unable to locate Android SDK
If we are encountering the error "Unable to locate Android SDK" while working with the Android toolchain, here are some steps you can take to resolve the issue:

1. Check Android Studio Installation:
	1. Make sure you have Android Studio installed on your machine. Android Studio is the official IDE for Android development and comes bundled with the Android SDK.
	2. ![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6545b9a8-2cc1-4a08-88d0-66dc81f08e47)
	3. ![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/328e34af-7b55-4f0b-a7c8-27d3c97a5d0e)

2. Verify SDK Location in Android Studio: 
	1. Open Android Studio and go to "File" > "Project Structure."
	2. Under "SDK Location," verify the path to the Android SDK. This is the location that your development environment needs to be aware of.
	3. ![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/23439f98-c20f-4f63-bdc5-67fd17139649)