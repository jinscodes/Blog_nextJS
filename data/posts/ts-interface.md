## Intro...
When working on a project, the interface was used to determine the types and structures of the return values of functions or just types. 

However, the interface was used without knowing what the exact value was at that time. 

This post is about the type script interface.

## TypeScript - Interface
Interface is familar to people with Java experience.

But, in Java, interface is used only for abstract methods and constants, unlike TypeScript using it for objects.

Interface of the TS means a mutually defined commitment or rule between two systems. Or, it can be called the **shell of an object** or **blueprint**.

In other words, like defining the class or frame of the function in programming, interface is like a frame of types.

If multiple functions need to have the same signature, or if multiple classes need to define the same specification, it can be defined through the interface.

Therefore, properties that is defined in interface or method implementation are enforced to maintain consistency between each class and function.

Also, because interface is the grammar from TS, it doesn't be compiled to js. We can check through the compiled JS.

Interfaces in TS can usually define appointments in the following categories.

- Specification of the object (type of attributes and attributes)
- parameters of the function
- Spcification of the function (parameter, return value, and etc...)
- Way to approach to array and object
- class

```ts 
// Interface name in uppercase letters
interface Human {
  name: string; // name 키는 문자열 타입
  age: number; // age 키는 넘버 타입
  boo(): void; // boo 함수는 void 타입
}

// Create an object by giving the interface itself a type
const person: Human = {
  name: "da",
  age: 5,
  boo: () => console.log("this is boo"),
};

// The parameter receives the interface as a type.
function booboo(a: Human): void {
  console.log(`${a.name} is ${a.age} years old`);
};

booboo(person); // da is 5 years old
person.boo(); // this is boo
```

> 💡 **[Discussion of interface name]**   
	Usually, when naming an interface, there has been an implicit promise to put a capital I in front of it. For example, the code above is not `human`, but `IHuman`. This was because it was easy to recognize that this word was an interface by attaching a capital I to the first letter. In fact, developers who have been doing C# are familiar with C# and sometimes add capital I.

> Recently, however, the trend has changed to subtract capital I. This is because when developers touch the mouse cursor in the editor, the type structure comes out, so the general trend has been focused on why it is attached to the front that is bad for reading.

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%F0%9F%92%AF-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)

[](https://ts.dev/style/)