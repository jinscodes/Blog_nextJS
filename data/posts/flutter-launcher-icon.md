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

There is an important point here.

Inside the AppIcon.appiconset in Assets.xcassets, there is a *contents.json* file.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/445708bf-4dbb-4834-b516-6840af19c31c)

---
[](https://velog.io/@adbr/flutter-1%EB%B6%84%EB%A7%8C%EC%97%90-App-Launcher-Icon-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

[](https://blog.dglee.co.kr/40)

[](https://asufi.tistory.com/entry/Flutter-Flutter-%EC%95%B1-%EC%B6%9C%EC%8B%9C-%ED%95%98%EA%B8%B0-release-build-apk)
