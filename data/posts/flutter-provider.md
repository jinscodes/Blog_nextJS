In this session, we will learn how to use a **provider**. 

Instead of BLoC patterns, **Providers** can manage the state in a simpler way.

*(The BLoC pattern will be covered in the next post)*

## What is provider?
First, there is a UI (View) part, and the provider's method is executed in the UI to modify or retrieve the data. 

The provider returns the data variables specified in the model to the instance using the fromJson method and stores them in the data variable in the provider.

After saving it, use the `NotifyListeners()` method to let them know that the change has been made, so that the UI (View) can get the change through *Consumer* and apply it to the screen.

However, this *Consumer* is the same as using `Provider.of` and the difference is that if you use `Provider.of(context)`, you can rebuild the entire widget you use, and if you use *Consumer*, you can make only a few parts rebuild.

*(Of course, even in the case of Provider.of(context), setting the parameter to listen: false can prevent rebuilding.)*

---
[](https://totally-developer.tistory.com/83)