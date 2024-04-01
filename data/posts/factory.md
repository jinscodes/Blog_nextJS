Factory constructor is one of the confusing topics for beginners in dart. To understand it better, one must understand the factory design pattern first.

## What Is Factory Design Pattern
Factory is based on a single-tone pattern and is a creator that you use without creating new instance.

If you already have an instance, you don't create it, but return it and reuse it, and you create only one instance according to the single-tone concept. For Factory, we need to first look at what a single-tone pattern is.

In a Factory pattern, we create objects without exposing the creation logic to the client and refer to newly created objects using a common interface. 

It's not easy to accept this definition. Explain it via code and factory construct.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/06cda4b1-7cec-40b7-bcd1-b8c36d07a7a1)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b2ad3672-28b2-4b21-ae68-2d61b658ea33)

If we need to create the object of these subclasses with the following criteria,

1. Give `Golden` instance, if the user wants a dog to guard
2. Give `Labrador` instance, otherwise.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5b7bbdcd-a674-46b5-b8a2-f152517c319c)

What if you want this logic in multiple places?

If repeating if-else many times, you can use logic in Multiple places. 

However, a code that repeats if-else many times is unacceptable because there is a very good chance that there are other better ways to do this. 

So, how can we make this simple?

It's the factory constructor!

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7939bf5c-8277-46e2-95b8-45acdb4ad67d)

Now we have moved the instance creation logic to the parent class.

To use it

![5-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f4f94cad-fa38-4883-a236-4d9dfde75f18)

or

![5-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9b0239a4-51e4-470f-bbd6-2ae21e1b6f33)

## Design Pattern
To understand *factory* more, we need to know about factory design pattern definition.


1. We create objects without exposing the creation logic to the client.

	1. We haven’t exposed the object creation logic to the client(main() method), it’s hidden inside our parent class ‘Dog’, the client needs to call the factory constructor with the required parameters to get the needed object.

2. We refer to newly created objects using a common interface.

	1. We are returning an instance of Labrador(or Golden) with type Dog, not as Labrador(or Golden). The parent class is the common interface here as it is compatible with both the sub-classes.

---
[](https://medium.com/nerd-for-tech/factory-constructor-in-dart-part-1-1bbdf0d0f7f0)

[](https://inpa.tistory.com/entry/GOF-%F0%9F%92%A0-%ED%8C%A9%ED%86%A0%EB%A6%AC-%EB%A9%94%EC%84%9C%EB%93%9CFactory-Method-%ED%8C%A8%ED%84%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90)

[](https://totally-developer.tistory.com/121)