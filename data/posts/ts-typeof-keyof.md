## Intro...
In previous post, `keyof` and `typeof` have often appeared in previous post. 

What is the `keyof` and `typeof`?

## TypeScript - keyof / typeof

### typeof operator
> typeof: An operator that converts object data into an object type

Since `obj` in the code below is an object, of course, the object itself cannot be used as a type.

So, if we want to bring the type structure used in the object as it is and make it an independent type and use it, we can bring and use the type structure that constitutes the object if you specify the typeof keyword in front of you.

So, if we want to use type structure that is used in object as independent type, we can bring and use the type structure that constitutes the object by specifying the keyword `typeof`.


```ts
const obj = {
   red: 'apple',
   yellow: 'banana',
   green: 'cucumber',
};

// When we want to convert the above object into a type and use it
type Fruit = typeof obj;
/*
type Fruit = {
    red: string;
    yellow: string;
    green: string;
}
*/

let obj2: Fruit = {
   red: 'pepper',
   yellow: 'orange',
   green: 'pinnut',
};
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1cb562af-32c0-4e85-82f5-ac4eddf04672)

Functions can also be converted into types and reused.

In the case of a class, the class itself can be an object type, so typeof is not required. (The interface is impossible because it is a type.)

```ts
function fn(num: number, str: string): string {
   return num.toString();
}

type Fn_Type = typeof fn;
// type Fn_Type = (num: number, str: string) => string

const ff: Fn_Type = (num: number, str: string): string => {
   return str;
};

// --------------------------------------------------------------

class Classes {
   constructor(public name: string, public age: number) {}
}

type Class_Type = Classes;
// type Class_Type = { name: string, age, number }

const cc: Class_Type = {
   name: '임꺾정',
   age: 18888,
};
```

## keyof Operator
> keyof : an operator that extracts only properties of an object type and makes it a union type

```ts
type Type = {
   name: string;
   age: number;
   married: boolean;
}

type Union = keyof Type;
// type Union = name | age | married

const a:Union = 'name';
const b:Union = 'age';
const c:Union = 'married';
```

If wanting to use red, yellow, and green, which are the key values of the object as constant types, we can attach the `keyof` keyword to the `typeof obj` itself.

```ts
const obj = { red: 'apple', yellow: 'banana', green: 'cucumber' } as const; // In order to construct the constant type, the type is affirmed.

type Color = keyof typeof obj; // Get only the keys of the object and use the constant type

let ob2: Color = 'red';
let ob3: Color = 'yellow';
let ob4: Color = 'green';
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/74b65daa-f8e7-47b9-ac6a-1082c042786c)

Conversely, if we want to use apple, banana, and cucumber as constant types, we can use them as follows.

```ts
const obj = { red: 'apple', yellow: 'banana', green: 'cucumber' } as const;

type Key = typeof obj[keyof typeof obj]; // Get only the values of the object and use the constant type

let ob2: Key = 'apple';
let ob3: Key = 'banana';
let ob4: Key = 'cucumber';
```

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ad15fce6-b333-4507-addd-1c3e6d9c1ae3)

### Use keyof / typeof
#### Constant type that replaces Enum
If we don't want to use Enum, we can replace it to constant type.

```ts
enum EDirection {
   Up,
   Down,
   Left,
   Right,
}

const ODirection = {
   Up: 0,
   Down: 1,
   Left: 2,
   Right: 3,
} as const;

console.log(EDirection.Left); // 2
console.log(ODirection.Right); // 3

// use Enum as a type
function walk(dir: EDirection) {
   console.log(dir);
}

// In order to use an object as a type, the typeof and keyof parameters must be used
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {
   console.log(dir);
}

walk(EDirection.Left); // 2
run(ODirection.Right); // 3
```

#### Use generic
If the parameter key of the function must exist in the generic type T of the parameter obj, keyof T can collect the key values of the object and make it a union type.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // done
getProperty(x, "m"); // error: The type 'm' of the argument does not correspond to 'a' | 'b' | 'c' | 'd'.
```

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95)