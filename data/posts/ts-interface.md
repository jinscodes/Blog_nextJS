## Intro...
When working on a project, the interface was used to determine the types and structures of the return values of functions or just types. 

Also, we considered which interface or type is better for use. (we decided to use the interface)

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

## Interface Vs. Type
Assuming that the object structure type is declared and used, it may be implemented as an interface or as a type alias.

The following is an example code that implements the same object structure type as literal, type alias, and interface, respectively.

```ts
// literal
const a1: {
	name: string;
	age: number;
	talk: () => void;
} = {
	name: "jay",
	age: 26,
	talk () {},
};

// type alias
type Ty = {
	name: string;
	age: number;
	talk: () => void;
};

const a2: Ty = {
	name: "jay",
	age: 26,
	talk () {},
}

// interface
interface In {
	name: string;
	age: number;
	talk: () => void;
}

const a3: In = {
	name: "jay",
	age: 26,
	talk () {},
}
```

As above, we may have thought about which one to use between an interface and a type alias, which is not much different from the eye.

My answer is interface.

This is because interface can be extended, unlike type alias.

Interfaces such as extents and implements can be used in various ways, regardless of simply expressing the object type, and there are various supported grammar.

So if we look at most of the TS libraries, we can see that most of them declare the type with the interface.

Of course, type aliases can also be extended by creating cross-types from version 2.7 of TS.

For example, if there are `type Cat = { nyan:false }` and `type Bird = { purrs:true }`, it can be extended with & like `type Fusion = Cat & Bird`.

And if we need to bundle a single type rather than an object type into a union or tuple type, we can use a type alias.
 
However, because the ideal feature of the software is open to extension, it may be seen as the right side to use the interface rather than type aliases if possible.

## Optional Properties (?:)
When using interface, the flexibility of the code disappears if all of the properties defined in the interface must be used.   
If considering it too strongly, we may have to create an interface for each structure.

Optional Properties is the operator to solve it.

**Colon(:)** with **question mark(?)** make the properties optional

```ts
interface CraftBeer {
  name: string;
  hope?: number; // hope property is optional
}

function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
}

let myBeer = { name: 'Saporo' }; // no specification of hope property
brewBeer(myBeer); // Saporo : work well
```

```ts
interface User {
   name: string;
   age: number;
   gender?: string;
}

let user: User = {
   name: 'jeff',
   age: 30,
};

user.age = 10;
user.gender = "male"; // according to the optional property, being able to add the value of the property later

user.lalala = ''; // However, cannot freely insert properties that are not even defined at all.
```

The principle of the optional properties is simple.

When a player object has a `name` but may or may not have an `age`, it can be written as follows, which is in fact the same as the `number | underdefined` declaration in Union type.

```ts
// both are same
interface IUser {
   name: string;
   age?: number;
}

type TUser = {
   name: string;
   age: number | undefiened;
}
```

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/80bd645e-9780-4614-a653-fe05ffd975b2)

However, it's important to note that since age is an optional property, if we make the logic with age property, the compiler emits an error. This is because it cannot infer whether the age property is used reliably or not.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c3e6ef63-9584-43f5-88d9-c2b4faa31242)

In this case, as a type guard technique, it can be solved by simply squeezing the logic to compare conditional expressions only when the player.age attribute exists.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/759cb6aa-c656-4e2e-82de-d255069e7787)

## Readonly Property
Read-only property literally refers to a property that allocates a value only when an object is first created by an interface and cannot be changed thereafter.

If we put the readonly property in front of it as follows, it is simply applied.

There is no problem when declaring an object through the interface for the first time and substituting a value. However, if we approach the property separately and try to correct it, an error will occur.

```ts
interface User {
   name: string;
   age: number;
   gender?: string;
   readonly birthYear: number; // read-only property
}

let user: User = {
   name: 'jeff',
   age: 30,
   birthYear: 2010, // Can only be assigned when initializing a value
};

user.birthYear = 1999; // Error - You can't modify it afterwards
```

> 💡 **[readonly vs const]**   
Readonly and const are similar in that the value is declared only when initialized, and then the value cannot be modified.

> However, it is important to remember that these two are used differently, but the variable uses const and the property uses readonly.

#### Utilize readonly
If all properties are read-only, we don't need to treat each property as readonly. We can handle it as a Utility or Assertion type.

```ts
// readonly each property
interface IUser {
  readonly name: string,
  readonly age: number
}

let user: IUser = {
  name: 'Neo',
  age: 36
};

user.age = 85; // Error
user.name = 'Evan'; // Error
```

```ts
// Use Readonly Utility
interface IUser {
  name: string,
  age: number
}

let user: Readonly<IUser> = { // thinking of it as a separate data type called Readonly like Array
  name: 'Neo',
  age: 36
};

user.age = 85; // Error
user.name = 'Evan'; // Error
```

```ts
// Type assertion
let user = {
  name: 'Neo',
  age: 36
} as const; // If as const is attached to the object data itself without using a separate interface, this itself becomes a literal type.

user.age = 85; // Error
user.name = 'Evan'; // Error
```

#### Readonly Array
If using `ReadonlyArray<T>` utility type, we can create Read-only array.

Can define the value only when the declaring, after that cannot fix the content of the array.

```ts
let arr: ReadonlyArray<number> = [1,2,3]; // read-only array

arr.splice(0,1); // error
arr.push(4); // error
arr[0] = 100; // error
```

## Interface Compatibility
Can make multiple interfaces with the same name.

When they overlap, it can be seen that the declared properties in the plan are combined into one.

It is a technique that is usefully frequently used when adding content to an existing interface.

```ts
interface IFullName {
  firstName: string,
  lastName: string
}

interface IFullName {
  middleName: string
}

const fullName: IFullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
};
```

## Interface Extends
Like the class, interfaces can be expanded between interfaces.

When inheriting from the JavaScript class, the `extents` keyword is used, but we can also use it in the interface.

```ts
interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe: Developer = { name: "jay", skill: "TS" };
```

If implementing the extends of interfaces, using interaction type (&).

```ts
type Person = { name: string };

type Developer = Person & { skill: string };

let fe: Developer = { name: "jay", skill: "TS" };
```

The peculiar thing is that the interface extension allows multiple extensions. (Class only can do one `extends`)

```ts
interface Person {
  name: string;
  age: string;
}

interface Programmar {
  favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmar {
  isLiveInSeoul: boolean;
}

const person: Korean = {
  name: "Jay Han",
  age: 26,
  favoriteProgrammingLanguage: "kor",
  isLiveInSeoul: true,
}
```

## Interface Function Type
#### Call Signature

Interface can be used to declare the function type.

Just as in JAVA, the method shape was added when defining the interface as follows, it is understood that the interface also defines the shape (type) of the function.

This is called a call signature in technical terms.

```java
public interface login {
  public Boolean loginUser(); // only function name in java
}
```

```ts
interface login {
  (username: string, password: string): boolean; // not function name, but function shape(parameters, return) in ts
}

// parameters name doesn't need to match the interface
// Also, there is no need to write a type in a function to be declared through type inference
let loginUser: login = function(id, pw) {
  console.log("login");
  return true;
}
``` 

Function can have attribute value in JS.

When we define the function type as it is through interface, function attributes also can do.

```ts
interface GetText {
  (name: string, age: number): string;
  totalCall?: number; // define function attribute value
}

const getText: GetText = function (name, age) {
  if (getText.totalCall !== undefine){
    getText.totalCall += 1;
    console.log(`totalCall: ${getText.totalCall}`);
  }
  return '';
}

getText.totalCall = 0; // function attribute value
getText('', 0); // 1
getText('', 0); // 2
```

Call signautre is usefully used to register additional method to prototype of object of js.

The following example registers a new method called `getshortKeys()` as a prototype in the main object of JavaScript: Object.

```ts
interface Object {
  getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function () {
  return Object.keys(this).filter((key) => key.length <= 3>);
};

const obj = {
  a: 1,
  bb: 2,
  ccc: 3,
  dddd: 4,
};

console.log(obj.getShortKeys()); // ['a', 'bb', 'ccc']
```

#### Interface Function Overload
Multi-function can be implemented by overloading the function's own type even within the interface.

```ts
interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const add:Add = (x: any, y: any) => x + y;
```

In fact, if looking at the predefined TS interface file lib.es5.d.ts, we can see that two filter functions in JS are defined as overloads.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/15054b77-2ed8-4ca4-ab90-e196bbe8ffae)

## Interface Class Type
Like C# and Java, type rules can be set so that classes meet certain conditions in TS.

If defining a class by interface, we can paste it next to the class definition using the implements keyword.

```ts
interface IUser {
   name: string;
   getName(): string;
}

// When the IUser interface is implemented, the property structure of the User class must follow the definition of the IUser.
// That is, the name variable and getName() method must be implemented as default values in the class.
class User implements IUser {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   getName() {
      return this.name;
   }
}

const neo = new User('Neo');
neo.getName(); // Neo
```

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/aac22df1-a048-49f4-bf72-c93b4971668a)

### Construct Signature
If the above call signature defines the function type structure, the construct signature defines 
the `new class()` generator function type structure.

By applying this, it is possible to receive a class of function parameters and proceed with initialization instead.

```ts
interface ICatConstructor {
  new (name: string): Cat; // construct signature
}

class Cat {
  constructor(public name: string) {}
}

// function that receives the class as param and reset it
function makeKitten(c: ICatConstructor, n: string) {
  return new c(n); // ok
}

const kitten = makeKitten(Cat, "Lucy");
console.log(kitten.name); // Lucy
```

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/458cfc83-9983-45d6-bd71-df4919919553)


---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4-%F0%9F%92%AF-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)

[](https://ts.dev/style/)