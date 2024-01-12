## Intro...
In previous post, `keyof` and `typeof` have often appeared in previous post. 

What is the `keyof` and `typeof`?

## TypeScript - keyof / typeof

### typeof operator
- typeof: An operator that converts object data into an object type

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

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b246497e-1203-4717-9b6b-f53183ed7013)

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

## 

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-keyof-typeof-%EC%82%AC%EC%9A%A9%EB%B2%95)