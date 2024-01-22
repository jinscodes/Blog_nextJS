## Intro..
There are a lot of problems when setting up the initial setting to use the flutter. 

Most errors can be recognized through the `flutter doctor`, and can be solved based on the errors in the `flutter doctor`.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3abcb2a7-3d4e-40ff-b159-00e2a9e97cf9)

## 🚨 Error: Android toolcahin - Unable to locate Android SDK
If we are encountering the error "Unable to locate Android SDK" while working with the Android toolchain, here are some steps you can take to resolve the issue:

### 1. Check Android Studio Installation:
Make sure we have Android Studio installed on your machine. Android Studio is the official IDE for Android development and comes bundled with the Android SDK.
	
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6545b9a8-2cc1-4a08-88d0-66dc81f08e47)

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/328e34af-7b55-4f0b-a7c8-27d3c97a5d0e)

### 2. Verify SDK Location in Android Studio: 
Open Android Studio and go to "File" > "Project Structure."

Under "SDK Location," verify the path to the Android SDK. This is the location that your development environment needs to be aware of.
	
![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/23439f98-c20f-4f63-bdc5-67fd17139649)

### 3. Set Environment Variables:
There are two ways to set environment variables.

1. set only for the current terminal instance the SDK path with the following commands:
		
```bash
	$ flutter config --android-sdk /path/to/android/sdk
```
```bash
	$ flutter config --android-studio-dir /path/to/android/studio
```

2. Ensure that the ANDROID_HOME and PATH environment variables are set correctly.

	1. **ANDROID_HOME**: Should point to the root directory of your Android SDK installation.

	2. **PATH**: Add the tools and platform-tools directories within the Android SDK to your system's PATH.

#### ANDROID_HOME
Second solution helps us solve the issue, But we need the sdk, platform-tools, tools and the ndk-build paths too on my profile file.

Of course, everything needs to be installed first. (In my case the .zshrc file, the same can be done on your .bashrc and etc.)

```zshrc
#SDK exporting - this will solve your issue
export ANDROID_HOME=/home/{user}/Android/Sdk 

#Tools exporting - it can be need in your case
export PATH=/home/{user}/Android/Sdk/platform-tools:$PATH
export PATH=/home/{user}/Android/Sdk/tools:$PATH
export PATH=/home/{user}/Android/ndk-build:$PATH

#Flutter binary exporting
export PATH=/home/{user}/flutter/bin:$PATH
```

Then, reload the profile file.

```bash
source ~/.zshrc
```

### Result
After that, the `flutter doctor` will run properly.

```bash
$ flutter doctor
```

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/daf4a8b2-d935-407a-b30c-a3294bec05e9)

---
[](https://stackoverflow.com/questions/44485848/android-sdk-cannot-be-found-by-flutter)

[](https://richz.tistory.com/entry/Flutter-Doctor-%EC%8B%A4%ED%96%89%EC%8B%9C-%EB%B0%9C%EC%83%9D%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%98%A4%EB%A5%98%EB%93%A4)