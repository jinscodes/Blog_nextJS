## ...Inro
JS has eight data types. 

Seven primitive types and one object Data Type. 

- Primitive types: `number`, `string`, `boolean`, `bigint`, `symbol`, `undefined`, and `null`
- Object types: `object`

The TS type system supports all of them and brings its own special types.

- Special types: `unknown`, `any`, `void`, and `never`

Also, TS provides both numeric and string-based enums. Enums allow a developer to define a set of named constant.

![types](https://github.com/jinscodes/Blog_nextJS/assets/87598134/bc84a213-3a26-42d6-8fa9-5356ce392562)

## Types

### Type - Boolean
Value of true / false

```ts
let isBool: boolean;
isBool = true;

let isDone: boolean = false;
```

### Type - Number
As for the static type, there are no int, float, or double types like C/JAVA, and the number data type of Javascipt is used as it is.

It also supports hexadecimal, decimal, binary, and octal literal.

```ts
let num: number;
let integer: number = 6;
let float: number = 3.14;

let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484

let infinity: number = Infinity;
let nan: number = NaN;

function plus(num1: number, num2: number): number {
	return num1 + num2;
}
```

### Type - String
The ES6 template string is included in the string type as well as the single-quote (') and double-quote (").

```ts
let red: string = 'Red';

let green: string = "Green";
let yourColor: string = 'Your color is' + green;

let myColor: string = `My color is ${red}.`;

function strings(str1: string, str1: string): string {
	return str1 + str1;
}
```

### Type - Array
The array type can be written in two ways.

The first method is to write [] after the type that represents the array elements, the second method is to use the Array<> array type.

```ts
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
// or
let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];
```

```ts
// only number
let nums:number[] = [100, 101, 102];

// only string
let strs:string[] = ['apple', 'banana', 'melon'];

// only boolean
let boos:boolean[] = [true, false, true];

// all types (any type)
let someArr: any[] = [0, 1, {}, [], 'str', false];

// specific data types (union type)
let selects:(number | string)[] = [102, 'apple'];
```

```ts
// Array return function with remaining parameters (spread operator)
function getArr(...args: number[]): number[] {
   return args;
}
getArr(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

### Type - Tuple
Tuple is subtype of the array.

The term tuple may be unfamilar, but tuple is just the array that the size and type are fixed.

For example, we can use tuple to express RGB color.

```ts
let rgbColor: [number, number, number] = [255, 255, 0];
```

Like this, it can be applied by specifying an array in which a predetermined number of elements must always be imported.

```ts
let x: [string, number]; // declare tuple type

x = ["hello", 10]; // success
x = [10, "hello"]; // error (elements type is wrong)
x = ["hello", 10, 99]; // error (number of element is wrong)
```

```ts
let user: [number, string, boolean] = [1234, 'HEROPY', true];
console.log(user[0]); // 1234
console.log(user[1]); // 'HEROPY'
console.log(user[2]); // true
```

```ts
/* two-demensional tuple */
let users: [number, string, boolean][];
// or
let users: Array<[number, string, boolean]>;

users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];
```

Unlike above examples, we can fix not only types but the value. (strong type)

```ts
/* Fixed the value itself as well as the type */
let tuple: [1, number];
tuple = [1, 2];
tuple = [1, 3];

tuple = [2, 3]; // Error - TS2322: Type '2' is not assignable to type '1'.
```

### Type - Enum
Enum is a commonly used type that we hear once we have dealt with languages such as C and Java, and refers to a set of specific values(constants).

If the tuple type learned above is an array that fixes a specific type or value, Enum can be seen as another independent data type that fixes a specific value.

```ts
// 상수 집합
enum Avengers { SpiderMan, IronMan, Thor, Hulk }

let hero: Avengers = Avengers.SpiderMan; // 0
```

Enum can also be accessed by index number.

```ts
// Understand that the system is automatically indexed internally, such as {SpiderMan = 0, IronMan = 1, Thor = 2, Hulk = 3}.
enum Avengers { SpiderMan, IronMan, Thor, Hulk } 

let hero: Avengers = Avengers[0];
```

If desired, the index of Inum can be changed to user convenience and used.

```ts
// If you determine the index number directly, the system will use {SpiderMan = 2, IronMan = 3, Thor = 4, Hulk = 5} 
// In this way, internally, it is understood that indexing increases sequentially after a set number.
enum Avengers { SpiderMan = 2, IronMan, Thor, Hulk }

let hero: Avengers = Avengers[2]; // SpiderMan
let hero: Avengers = Avengers[5]; // Hulk
```

More details about Enum ⬇️

[](https://jay-h-blog.vercel.app/posts/TypeScript/ts-types-enum)

### Type - Object
In JS, objects include not only objects but also arrays and functions as objects.

The same is true of TS, which basically refers to any type that the typeof operator returns as an "object."

> 💡 It means the rest, not exactly number, string, boolean, bigint, symbol, null, or underdefined.

```ts
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();
```

Since it is recognized as several types of higher types, there are many difficulties in using objects as types in TS.

Moreover, if you give the object type an object value as follows and actually inquire, an error will occur.

```ts
const player: object = { name: 'nico' };
player.name; // Error
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0763e7fc-c27a-4e40-af0d-bf89ccf4f791)

Therefore, if we really want to specify a type for an object, we can use it in a way that specifies the types for object properties individually as follows.

```ts
let userA: { name: string, age: number };
userA = {
  name: 'HEROPY',
  age: 123
};

let userB: { name: string, age: number };
userB = {
  name: 'inpa',
  age: false, // Error
  email: 'inpa@naver.com' // Error
};
```

However, we may feel that it is not very readable whether it is a type or an object. To overcome this, TS added an alias function called type literal and a grammar called interface. (Type aliases and interfaces will be covered later.)

```ts
// type alias
type IUser = {
    name: string,
    age: number
}
 
let userA: IUser = {
    name: 'HEROPY',
    age: 123
};
 
let userB: IUser = {
    name: 'inpa',
    age: false, // Error
    email: 'inpa@naver.com' // Error
};
```

```ts
// interface
interface IUser {
  name: string,
  age: number
}

let userA: IUser = {
  name: 'HEROPY',
  age: 123
};

let userB: IUser = {
  name: 'inpa',
  age: false, // Error
  email: 'inpa@naver.com' // Error
};
```

### Type - Any
Any type literally means acceptable for all types.

It is safe to say that the type of variable we used in JS is actually any.
 
The reason why any type exists is that when creating an application, there may be cases where it is necessary to express an unknown type.

For example, when dealing with variables or functions in dynamic content, such as data received from users or third-party libraries, they are often well-described in official documents but still useful when they are unknown.

```ts
let any: any = 123;
any = 'Hello world';
any = {};
any = null;

let list: any[] = [1, true, "free"];
list[1] = 100;
```

```ts
// explicitly specify any type
let product_id: any = 124981;
product_id = 'p9023412'; // enable any value

// Implicitly specify any type
let product_id;
product_id = 124981;
product_id = 'p9023412';
```

But let's not abuse any type.

If we're going to use any type many times, we just code it in JS, because there's no reason to use any TS.

And above all, we may lose the protection device of TS compile.

For example, compriler does not warn us of an incorrect operation(like JS).

```ts
const a: any[] = [1, 2, 3, 4]; // array
const b: any = true; // boolean

a + b; // compiler allows it...
```

> 💡 To strictly prohibit the use of Any to maintain the advantages of a strong type system, an error may occur when using Any through the compilation option `"noImplicitAny": true` in tsconfig.

### Type - Unknown
Unkown's Un seems to mean something negatively, but he's just like any without having to think hard.

Literally, Unknown means an unknown type, and you can receive all data types, such as any.

```ts
let a: any = 123;
let u: unknown = 123;
```

So why did TS distinguish between any and unknown while allowing all types?

- any accepts whatever it is
- Unknown has a strong sense of unknown. 

The difference is "how strict it is"

For example, in the case of any type, data of the number type is put in as shown below, and when the method length of the string type is used, it simply returns underdefined without causing any error.

```ts
let value: any = 10;
console.log(value.length); // undefined
```

However, the unknown type allows all values in the same way as the any type, but has the characteristic that it cannot be calculated carelessly because it does not know what type the assigned value is.

So, the editor itself displays an error in advance as follows.

```ts
let valueNum: unknown = 10;
let valueStr: unknown = "Test";

console.log(valueNum.length); // error!!
console.log(valueStr.length); // error!!
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b0a67c58-03e9-43aa-bafc-a18169f93867)

In this case, it can be solved through `typeof` that is often used in JS

```ts
let valueNum: unknown = 10;

if (typeof valueNum === "number") {
  console.log(valueNum.length);
}
```

In this way, if the unknown type is used instead of any, there will be many codes that need to be checked, but since it can prevent problematic parts in advance, it is possible to develop a stable application compared to any type.

### Type - Null / Undefined
Just as underdefined was a data type and value in JavaScript, there are null and underdefined types in typeScript.

```ts
let nullable: null = null;
let undefinedable: undefined = undefined;
```

By default, null and underdefined are considered as all other types of subtypes, which means that null and underdefined can be assigned to any of several types.

However, it is only possible if it is not in strict mode in tsconfig.json.

```ts
/* enable only when not in strict mode */
let num: number = undefined;
let str: string = null;
let obj: { a: 1, b: false } = undefined;
let arr: any[] = null;
let und: undefined = null;
let nul: null = undefined;
let voi: void = null;
```

> 💡 Using the compile options --stricks or --strictNullChecks, null and underdefined are only allocable to any and their respective types. This option helps prevent many unspecified common errors, so --strictNullChecks is recommended where possible.

> 💡 Undefined is exceptionally allocable to voids

### Type - Never
The never type is not a type to contain any data type values, such as number or string.

The never type is a keyword to tell you what is wrong in the type script, and it can be considered to represent a type that can never occur.
 
Usually, when an empty array is incorrectly declared as a type, you can see never.

This is the most common mistake that type script beginners make, so be sure to keep that in mind.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ce978726-0a1c-43b3-89af-e13d6cd35e5c)

Never can also be used as a return type that always causes an error or never returns an error in a function expression that returns an error.

```ts
// Generates a custom never type function that generates an error
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

const result = fail(); // The type of return is inferred as never.
```

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0b096c65-f267-49ae-be53-c49aff2cdb7b)

The never type is also a subtype that can be assigned to all types, such as null or undefined.

However, on the contrary, no type can be assigned to never(except for never himself).

```ts
function getError(): never {
   throw new Error('ERROR');
}

let never_type: never;

never_type = 99; // Error occurred: numeric value cannot be assigned to a never-type variable.

// No error occurs because the return value of the function is of the never type.
never_type = getError();
```

### Type - Void
Since void indicates that no type can exist, it can be considered the opposite type of any.

Therefore, it can be considered that void is usually used to express the type of return when there is no return value in the function.

```ts
// function without return value
function hello(n: number): void {
  let sum: number = n + 1;
}

const hi: void = hello(1); // Functions that do not return values actually return underdefined
console.log(hi); // undefined
```

If void is defined as a variable type rather than a function, only underdefined and null can be assigned to void type variables.

In other words, it can be considered that it is not useful to declare void as a type variable.

```ts
let unusable: void = undefined;
unusable = null; // Success, only when not using stricNullChecks option in tsconfig
```

### Type - Literal
We may think that only data types such as number, string, and array are put in because of the type, but only for strings and numbers, the value itself can be declared as a type.

#### Numeric Literal Types
For example, there is a constant like below. What type of this constant?

```ts
const num = 3;
```

Since it has an integer value, you may think it is a number, but if you check it, it has a type 3.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/42a513d3-fb84-437b-8e34-2d9caa2f8424)

As mentioned above, the type of TS can specify not only the data type but also the value itself(limited to numbers and letters). This is because the basis of TS is to specify types as accurately as possible.

Organically, this is a legitimate judgment. The value of the const constant does not change once it is initialized.

So, we can omit the type because it's a constant anyway.

```ts
const num: 3 = 3;

const num3 = 3; // type omitted
```

In addition to the cosnt constant, other applications can be used like this. (You can just use the number type, but when you want to decide the return type more clearly.)

```ts
// A function that returns a number of dice from 1 to 6 (a dice cannot contain more than 7 digits)
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  // ...
}
```

#### String Literal Types
The string literal type is used to accurately specify a value for a string.

```ts
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

function animate(dx: number, dy: number, easing: Easing) {
   if (easing === 'ease-in') {
      // ...
   } else if (easing === 'ease-out') {
   } else if (easing === 'ease-in-out') {
   } else {
      // filtering null and undefined
   }
}

animate(0, 0, 'ease-in');
animate(0, 0, 'uneasy'); // Error: unacceptable "uneasy"
```

String literal types can be used in the same way to distinguish the overload of object-oriented functions to be learned later.

```ts
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overload ...
function createElement(tagName: string): Element {
    // ...
}
```

### Type - Union
If more than one type is allowed, it is called Union. It is also used in the sense of OR. Types are distinguished by | (pipes), and parentheses are not necessary for a single type, but should be overwritten for an array.

```ts
let union: string | number;
union = "Hello type!";
union = 123;
union = false; // error!
```

```ts
// Only string and number are allowed in the array, but it is free unlike tuple
// To express type as union, use parentheses (if not, string | number[] -> string and number array)
let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
// Or
let array: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];
```

```ts
function padLeft(value: string, padding: boolean | number) {
  // ...
}

let indentedString = padLeft("Hello world", true);
```

#### 🚨 Cuation
As follows, the parameter types of the `introduce()` function were combined into `Person` and `Developer` type aliases into Union.

We may think that the union type is a type that can be A or B, so we can use age or skill, which are attributes provided by these interfaces, in the function, but from a TS point of view, it is impossible to know whether a `Person` type will come or a `Developer` type will come at the time of invoking the `introduce()` function.

```ts
type Person = {
  name: string;
  age: number;
}

type Developer = {
  name: string;
  skill: string;
}

function introduce(someone: Person | Developer) {
  someone.name; // O
  someone.age; // X Type error
  someone.skill; // X Type error
}
```

In other words, tsc has the characteristic of reliably inferring types in the direction where no error occurs, no matter which type comes in.

As a result, only the `name`, which is an attribute common to both `Person` and `Developer`, is accessible.
 
If we use the return value as a union even in a function, it emits an error.

Considering the number of all cases, the return value varies depending on whether the number or string enters the x and y parameters, so the union is specified, but it is not correct from the compiler's point of view.

```ts
function add(x: string | number, y: string | number): string | number {
   return x + y;
}

add(1, 2);
add('1', '2');
add(1, '2');
```

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d7bfef59-52bb-4a6c-9f4e-cac8c80c3840)

This part is a natural principle.

In the code below, the value of add(1, 2) is received for the result variables of the string and number types. It is also logically correct from the Union's point of view.

```ts
function add(x: string | number, y: string | number): string | number {
   return x + y;
}

const result: string | number = add(1, 2);
result.charAt(1);
```

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dbc2a405-ed1c-4888-9de4-60006d0e7225)

However, it also cuases errors as follows.

Because the compiler is unsure whether the result variable is a string or number, it warns about executing charAt(), a string method.

> 💡 This can be solved through function overloading.

### Type - Intersection
If using &(ampersand) to combine two or more types, this is called Intersection.

If understanding the union learned above as if **or**, we can look at the intersection as if **and**.

Intersections are useful because they can combine existing types without creating new types, but they are not a frequently used method.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b8b62e95-ac94-455b-b337-b2fd7bb8d1d8)

```ts
type Person = {
   name: string;
   age: number;
};
type Developer = {
   name: string;
   skill: number;
};

const heropy: Person = {
  name: 'Heropy',
  age: 36,
  skill: 11 // Error - { The format 'name: string; age: number; skill: number; }' cannot be assigned to the format 'person'. 
  // Object literal can only specify known properties and does not have 'skill' in type 'person' 
};

// The two types of aliases are combined to form one type: {name: string, age: number, skill: number}.
const neo: Person & Developer = {
   name: 'Neo',
   age: 85,
   skill: 11,
};
```

> 💡 Rather than inferring the type by type & intersection as above, it is recommended to just create and allocate a new type.

### Type - Type Alias
A type alias is a type variable defined by a user.

If defining a complicated and long type in a single line as follows, it is not readable, so it can be seen as a method of grouping the types with a type alias and declaring the alias as a type name.

> 💡 The national rule is to capitalize the variable names of type alias and interface.


```ts
let Dom: {version:string, el:(selector:string)=>void, css:(prop:string)=>void} = {
  version: '0.0.1',
  el(){},
  css(){}
};
```

```ts
type Operation = {
	version: string, 
    el: (selector:string) => void, 
    css: (prop:string) => void
}

let Dom: Operation = {
  version: '0.0.1',
  el(){},
  css(){}
};
```

If we can't remember what type of bundle this type alias was, we can check it as preview status on the editor.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4e60ebd4-6850-4b12-9002-335583883520)

The way to declare type alias is similar to variables.

Declare the data type named type and put value of the type.

```java
int num = 123123;

string str = "hello";
```

```ts
// type name = type;
type Name = string;
type Age = number;

let name: Name = 'Tom';
let age: Age = 20;
```

### Type - Interface
The interface refers to a promise or rule defined between each other.

To put it more simply, it can be said that it is an object type that combines the things that define the type. That is why it is called the shell or blueprint of an object.

Interfaces in type scripts can usually define appointments in the following categories

- Specification of the object(type of attributes and attributes)
- Parameter of the function
- Specification of the function(parameters, return type, or etc...)
- The way to access to array and object
- class

Like this, interface has advantages of not only type designation but also self-expanding to increase utilization.

```ts
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person { // Interface Inheritance
  skill: string;
}

function logUser(obj: Developer) {
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.skill);
}

let person = { 
  name: 'Capt', 
  age: 28, 
  skill: 'typescript, javascript' 
};

logUser(person);
```

> 💡 [preference: type alias vs. interface] Type aliases and interfaces look similar at first glance, but the biggest difference between them is whether the type is expandable/non-expandable. While the interface can be expanded in various ways, type aliases are not. Therefore, when using a simple set of types, it is recommended to use type aliases and declare them as possible interfaces.

More details about Interface ↓

[interface](https://jay-h-blog.vercel.app/posts/TypeScript/ts-interface)

### Type - Generic
We can think of generics as variable types.

The reason why we use data in a box called a variable rather than directly dealing with it is to increase **reusability**.

In this way, it is understood that the type created to increase **reusability** by substituting the type later like a function parameter is a generic type.

Generic is used by using angle brackets like <T>. T in angle brackets is the name of type, so it can be changed.

```ts
type IsArray<T> = T[];

const numberArr: IsArray<number> = [1, 2, 3, 4, 5];
const stringArr: IsArray<string> = ['a', 'b', 'c', 'd', 'e'];
const mixArr: IsArray<string | number> = ['a', 2, 'c', 4, 'e'];
```

```ts
function getText<T>(text: T): T {
   return text;
}

getText<string>('hi'); // 'hi'
getText<number>(10); // 10
getText<boolean>(true); // true
```

## Type Table
![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f2c64e62-aaeb-4256-9616-654cbe436bca)

---
[](https://www.tektutorialshub.com/typescript/typescript-data-types/)

[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EC%A2%85%EB%A5%98-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC)