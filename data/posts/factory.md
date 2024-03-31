Factory constructor is one of the confusing topics for beginners in dart. To understand it better, one must understand the factory design pattern first.

## What Is Factory Design Pattern
In a Factory pattern, we create objects without exposing the creation logic to the client and refer to newly created objects using a common interface.

It's not easy to accept this definition. Explain it via code and factory construct.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/06cda4b1-7cec-40b7-bcd1-b8c36d07a7a1)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b2ad3672-28b2-4b21-ae68-2d61b658ea33)

If we need to create the object of these subclasses with the following criteria,

1. Give `Golden` instance, if the user wants a dog to guard
2. Give `Labrador` instance, otherwise.

---
[](https://medium.com/nerd-for-tech/factory-constructor-in-dart-part-1-1bbdf0d0f7f0)

[](https://inpa.tistory.com/entry/GOF-%F0%9F%92%A0-%ED%8C%A9%ED%86%A0%EB%A6%AC-%EB%A9%94%EC%84%9C%EB%93%9CFactory-Method-%ED%8C%A8%ED%84%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90)