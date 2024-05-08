There are two main ways to change the app logo in Flutter.

- Changing the logo image files
- Using package

## Changing Files
Of course, the first thing to prepare is a image of an app icon. The standard for the image is 1024x1024.

As an example, we prepared the following 1024x1024 images.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6f0d6466-42eb-4b13-8370-ec420497b5cf)

### Converting image to app icon
Having a 1024x1024 image doesn't mean that it can be used as an app icon right away.

Because image files that is used on Android and IOS, the image mush be converted.

Of course, we don't have to convert the image ourselves. We can put the image we want on the site that converts the image, download it, and use it.

[](https://www.appicon.co/)

Example 👇🏼

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6a6ac9b2-a7c4-4539-810a-ab86128e405c)

If decompress the downloaded zip file, you can check the folder structure as follows.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9191e77c-c0b8-4ee9-bd79-b7741008affd)

### Applying app icon: Android version
In the flutter app root directory, the *android/app/src/main/res* folder is organized as shown in the picture below.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9420d754-5c65-47bd-a701-b20972fd9b9c)

If compare the various files in this *res* folder with the files we downloaded, you can see that the names are the same.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e2e29f3e-e273-4ba7-9c15-d9a38b3ba9f7)

Simply replace the folders with the same name in the res folder with the downloaded icon folder.

### Applying app icon: IOS version
In IOS folder, we can see the *ios/Runner/Assets.xcassets*. The Assets.xcassets is consiting of like below image.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/97b35d24-c892-4c2e-a154-cb20ac34adcf)

If we look at the downloaded image folder, there is a folder called *AppIcon.appiconset*. If we look inside, there are images like *Assets.xcassets*.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3ef29f86-eeec-4744-87d8-4cc5dfc8d5ed)

Replace the existing image with the downloaded images and it's done.

### 🚨 Caution

There is an important point here.

Inside the *AppIcon.appiconset* in *Assets.xcassets*, there is a *contents.json* file.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/445708bf-4dbb-4834-b516-6840af19c31c)

The `filename` of the json file would be the same as the image you downloaded. If it is not the same, there is a possibility of an error. (It doesn't seem to be unconditional..?)

In my case, the app icon was not applied, and when I checked on xcode, it said that there was an error in the image setting.

You can change the name of the downloaded image or change the `filename` of the corresponding size in the json file to match the downloaded image.

> 💡 **NOTE**   
> The Json file is contained in the IOS folder downloaded from the above site. That's why it's better to replace the folder itself instead of just moving the image.   
> ![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/16641a4a-8523-4442-8494-e88d05686f79)

## Using Package
![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/874eafa6-cfb6-42ec-91ad-84da35a1abac)

[](https://pub.dev/packages/flutter_launcher_icons)

The above package makes it easier to change the launcher icon than to replace the file.

#### 1️⃣ Install

Install the package using command or directly in the pubspec.yaml file.

![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/76caa3aa-c7f1-4862-9ff4-7f9b0cd84676)

#### 2️⃣ Setting

#### Upload image
Upload the image file to `assets` folder.

There are two things that we need to care about.

1. Image must be 1024x1024
1. Icon must not be transparent and must not include alpha.

> 🚨 **NOTE**   
> In my case, I always used `.png` format image so that there is no problem at all. However, in some blogs, they said some image format doesn't work well.

> So, I recommend uploading the image with `.png` format to assets folder.

#### Add information to yaml file 
Before add needed information to yaml file, we'd better to check the **flutter_launcher_icons** package.

When we install the package without developement command, it is placed to just dependencies. This package is not for user but setting, so I moved this package to dev_dependencies like below.

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f60357e7-6b9c-48b6-a7c4-474c7c0874e5)

Declare `flutter_icons` in the same position as dev_dependencies.

Elements of `flutter_icons` include `android`, `ios`, and `image_path`.

So, it looks like 👇🏼

![12](https://github.com/jinscodes/Blog_nextJS/assets/87598134/aea695a2-47ee-460b-894c-3846d1aebe88)

#### Command

---
[](https://velog.io/@adbr/flutter-1%EB%B6%84%EB%A7%8C%EC%97%90-App-Launcher-Icon-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

[](https://blog.dglee.co.kr/40)

[](https://asufi.tistory.com/entry/Flutter-Flutter-%EC%95%B1-%EC%B6%9C%EC%8B%9C-%ED%95%98%EA%B8%B0-release-build-apk)
