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

---
[](https://www.tektutorialshub.com/typescript/typescript-data-types/)

[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EC%A2%85%EB%A5%98-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC)