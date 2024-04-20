It may take time to get data from the app or to configure the screen. At that time, by adding a loading animation, a better ux experience can be provided to the user.

Representatively, there are two types of loading animation. First is just loading animation like the below image.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a6ee9303-b077-47ee-8bc4-2d31eb3fdbf3)

Another loading animation is shimmer loading effect. It seems like the below image.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6a3bb980-c6fa-4341-bcea-8b310ee7f7da)

## Loading Animation Package
There are a lot of loading animation libaray(package). 

I used loading_animation_widget package.

[](https://pub.dev/packages/loading_animation_widget)

```bash
$ flutter pub add loading_animation_widget
```

or directly importing the dependencies in the pubspec.yaml file

```yaml
dependencies: 
	loading_animation_widget: ^1.2.1
```
The above installing is the basic step to use this package.

To use loading animation widget, we need to use `LoadingAnimationWidget` widget. 

```dart
@override
Widget build(BuildContext context) {
	return Scaffold(
		body: Center(
			child: LoadingAnimationWidget.staggerDotWave(
				color: Colors.white,
				size: 200,
			),
		),
	);
}
```

If loading animation with more than one color, we have to provide both requried colors.

```dart
@override
Widget build(BuildContext context) {
	return Scaffold(
		body: Center(
			child: LoadingAnimationWidget.twistingDots(
				leftDotColor: Colors.red,
				rightDotColor: Colors.blue,
				size: 200,
			),
		),
	);
}
```

### Details about loading animation
The loading animation won't work the way we intended it to. Maybe if just follow the code above, the loading animation can go back to infinity.

Because there is no standard for loading. (No reason to stop..)

In other words, you just need to give a state that can distinguish whether it is a loading screen or not.

In my case, they declared a boolean called `_isLoad`.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/de30f8c5-a8ee-4978-9063-53fd99a4f9d5)

The above code is to change `_isLoading` to `false` after 3 seconds. If `_isLoading` is `true`, it shows the loading screen, and if it is `false`, it shows the normal screen.

---
[](https://docs.flutter.dev/cookbook/effects/shimmer-loading)

[](https://pub.dev/packages/loading_animation_widget)

[](https://www.geeksforgeeks.org/flutter-loading-animation-widget/)