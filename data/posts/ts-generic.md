## What's Generic?
The reason why we use the repository of variables in programming is for flexibility in data values. The word variable refers to something that can change and vice versa, the constant is always fixed.
 
Based on this concept, the type we've used up to this point, number[] and string, has always been fixed and never changed. And a little bit of flexibility is added to this is the number | string | undefined union type.


*However, in this programming environment, the situation is not always fixed and does not flow as intended.*

It is in this industry that variables that can change when and where always occur.

Therefore, instead of specifying the type directly as a fixed value, a device that can code more flexibly through a type that can change at any time through a "variable" is needed, and this is the **generic** type to be dealt with today.

*Simply, it can be said that the type is a variable.*
 
Let's use the following code example to find out why generics should not be left out of type scripts.

We create a method called `add()`, which is a versatile multi-method that adds numbers to make integers and adds strings to make combined strings.
Since the two types of numbers and strings are handled at the same time, the simple one can be configured as follows through the union type.

```ts
function add(x: string | number, y: string | number): string | number {
   return x + y;
}

add(1, 2); // 3
add('hello', 'world'); // 'helloworld'
```

At first glance, there seems to be no problem, but there is a catch here.

The Union is the trap.

We intended `x: string, y: string`, or `x: number, y: number`, but there is a possibility that it could actually be `x: string, y: number`, or `x: number, y: string`.

Thus, the compiler catches these things smartly and informs us of the errors with red lines.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b1548ae1-026b-471a-8799-8a9b685570c1)

How do we solve this? 

This multi-method was declared as a union type, which became a problem. Then, we only need to separate the function and distribute it so that only one role is played in one function type.

In TypeScript, this is called the **function overload**.

```ts
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any) {
   return x + y;
}

add(1, 2); // 3
add('hello', 'world'); // 'helloworld'

// Overloading does not allow the next function call to occur.
// add(1, '2');
// add('1', '2');
```

However, as the number of types allowed increases, the code becomes longer, making it less readable.

This is why **generics** came out because of these limitations.

By designating it as a angle brackets and a capital letter T variable as follows, the type declared in the code through generics can be converted into a variable, and the type can be flexibly used later.

```ts
function add<T>(x: T, y: T): T { // Generic: Expressions using the angle brackets and the letter T. T is a variable name.
   return x + y;
}

add<number>(1, 2); // When calling a generic type function, if it is determined as <number>, the T part of the function is changed to number and executed.
add<string>('hello', 'world'); // 'helloworld'
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6446d040-67fe-46d3-b770-0f0811110f97)

## Advanced Type - Generics
In this way, the Generic type provides a way to declare a type at the time of use, not at the time of declaration of a function or class.

It is a principle that variables or function interfaces can be reused in various types by simply writing down variable characters when declaring and determining the type used at the time of creation.

The characteristics of generics are listed as follows.

- It prevents the type from being fixed and can declare reusable elements.
- Ensure type stability by conducting type checks at compilation time.
- Casting-related codes can be removed.
- Generic logic can be used to create reuse codes that can receive different types.

Generic is originally a type that is often used to create highly reusable components in languages such as C# and Java. In particular, it is used to create components that operate in more than one type.

In fact, if looking at the method type form of the Typescript library, it is all composed of generics.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/858ba0f1-0b86-4226-860a-d99259e2d0f1)

The above picture is the ts library related to cookie. There is a generic type.

> **💡 NOTE**   
> If the deflection <> symbol is used in front of the variable name and the function name, it becomes a 'type affirmation'.    Therefore, in order to implement a generic, you must write a deflection parenthesis after the variable name and the function name.

> And the generic name does not have to be T. I can attach it as I want, but I customarily process it in one capital letter. (T, U, K...)


```ts
// a method of receiving arguments and making them into an array
function toArray<T>(a: T, b: T): T[] {
   return [a, b];
}

// If the generics are expressed as arrow functions, it becomes as follows.
const toArray2 = <T>(a: T, b: T): T[] => { ... }


toArray<number>(1, 2); // numeric arrangement
toArray<string>('1', '2'); // Character arrangement
toArray<string | number>(1, '2'); // Mixed arrangement

// In fact, compilers infer on their own by looking at the type of argument they transfer, so they infer on their own even if they do not use generics when calling a function.
toArray(1, 2);
toArray('1', '2');
toArray<string | number>(1, '2'); // However, sometimes automatic type inference is not well done, so have to declare generics.
```

> Usually, the second method of the code above, which omits generics when calling a generic function, is commonly used because of its readability. 

> However, if the code is complicated and the compiler is stupidly poor at type inference, we may have to specify the generics yourself.

It should be noted that if an argument is received in an array from a generic, the generic should be `T[]` or `Array<T>` separately. In the case of general types and objects, we can receive them without any separate processing.

```ts
function loggingIdentity<T>(arg: T[]): T[] {
   console.log(arg.length); // The array has .length, so there is no error.
   return arg; // Return Array
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
   console.log(arg.length);
   return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity2([1, 2, 3]);
```

Generics, in particular, are used a lot with interfaces.

```ts
// generic interface
interface Mobile<T> { 
   name: string;
   price: number;
   option: T; // Generic Type - Assuming that the option attribute contains a variety of data
}

// A literal pate type can also be assigned to the generics themselves.
const m1: Mobile<{ color: string; coupon: boolean }> = {
   name: 's21',
   price: 1000,
   option: { color: 'read', coupon: false }, // Option attributes are flexibly assigned by generic types
};

const m2: Mobile<string> = {
   name: 's20',
   price: 900,
   option: 'good', // Option attributes are flexibly assigned by generic types
};
```

It also goes well with type alias.

```ts
type TG<T> = T[] | T;

const number_arr: TG<number> = [1, 2, 3, 4, 5];
const number_arr2: TG<number> = 12345;

const string_arr: TG<string> = ['1', '2', '3', '4', '5'];
const string_arr2: TG<string> = '12345';
```

## Generic Constraints (extends)
Generics determine the type at the time of use, so it doesn't matter if you put virtually any type.

```ts
function identity<T>(p1: T): T {
   return p1;
}

identity(1);
identity('a');
identity(true);
identity([]);
identity({});
```

Although flexibility with the input value has been secured, it is necessary to limit the input value depending on where it is used for each function.

As the most representative example, if a method called `forEach()` is used to create it, this `forEach()` is a higher-order function that traverses the array, so it is necessary to receive the original value in the array.

In addition, even when implementing methods for libraries such as React, input values are created by limiting the range. For example, only object types are allowed for the entire attribute value of React.
 
*To this end, the generics of TypeScript provide the ability to limit the types of types applied.*

When the `extents` keyword is used for generics as follows, the types of types that may be input as generics may be limited.

> 💡 **NOTE**   
> Generic's `extends` is slightly different in definition from interface or class `extends`.   
> Class `extends` have the definition of **extension** as a meaning of inheritance, but the difference is that generic `extends` have the meaning of **restriction**. 

> Therefore, if there is a generic in the form of `<T extensions K>`, it can be defined that T should be allocable to K.

```ts
type numOrStr = number | string;

// only number and string
function identity<T extends numOrStr>(p1: T): T {
   return p1;
}

identity(1);
identity('a');

identity(true); //! ERROR
identity([]); //! ERROR
identity({}); //! ERROR
```

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Generic-%ED%83%80%EC%9E%85-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0)

[](https://www.typescriptlang.org/docs/handbook/2/generics.html)