## Intro..
Among the types of TS, there is a type called Enum. Many novice developers are not familiar with or confused about the Enum type.

While studying TS, I felt the need to learn more about enum.

## Enum
Enum is a commonly used type that we hear once we have dealt with languages such as C and Java, and refers to a set of specific values(constants).

If the tuple type of type script is an array that fixes a particular type or value, Enum can be seen as another independent data type that fixes a particular value.

```ts
enum Color {
   Red,
   Green,
   Blue,
} // enum type

let c: Color; // Declare enum type variable
c = Color.Green; // Assign an enum value to an enum type variable
c = 'Hello'; // Error - Enum type variable can only come with set enum values (Red, Green, Blue)

let d: Color.Red; // The enum value can also be used as a type itself
```

### Enum Indexing
Basically, enum is characterized by starting at 0 and numbering the members (like an array index).

```ts
enum Week {
	Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6f2100f5-7ae9-490a-9f0a-28ed55b4d045)

However, the member numbers of enum do not necessarily start at zero.

In this way, the value can be manually specified, and the value is increased by 1 again from the part where the value is changed.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8a053cdf-91fa-4f08-b624-2bc78537fe96)

One of the fun features of enum is that it can identify the names of enum members by numbers in the reverse direction.

For example, in the example above, if we do not know which Weekenum member the number 2 matches, we can find a name that matches it.

```ts
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Week.Sun); // 0
console.log(Week['Sun']); // 0
console.log(Week[0]); // 'Sun'

let weekName: string = Week[0];
console.log(weekName); // Output for Friday with value of 5 -> Fri
```

In addition, enum can be initialized as a string value as well as a numeric number. 

However, it is important to note that reverse mapping is not supported when listing as a string, and there is a disadvantage that must be initialized individually. 

And the number type automatically increases, but of course, the character blood enum does not have such a function.

Instead, when debugging, the value of numeric eum is sometimes unclear, but character eum always has the advantage of being easy to read because it always has a clear value.

```ts
enum Color {
   Red = 'red',
   Green = 'green',
   Blue = 'blue',
}

console.log(Color.Red); // red
console.log(Color['Green']); // green
```

### Enum Helper Function
It is a helper function that traverses and checks for specific type values in the enum.

What should be noted here is the result value of `Object.keys()`, which comes out in this way `['0', '1', '2', 'High', 'Medium', and 'Low']`. As mentioned above, enum is accessible to both `Priority.High` or `Priority[0]`.

```ts
 enum Priority {
   High,
   Medium,
   Low,
}

// A function that checks which Enum has a specific value
export function getIsValidEnumValue(enumObject: any, value: number | string) {
   return Object.keys(enumObject)
      .filter((key) => isNaN(Number(key)))
      .some((key) => enumObject[key] === value);
}
/* 
order of function execution :
Object.keys(enumObject) -> Converted to [ '0', '1', '2', 'High', 'Medium', 'Low' ]

.filter((key) => isNaN(Number(key))) -> Remove the numeric character element here

.some((key) => enumObject[key] === value); -> Check the enum for value against the second parameter that received the argument value
*/

const result = getIsValidEnumValue(Priority, Priority.High);
console.log('result: ', result); // true

const result2 = getIsValidEnumValue(Priority, 1);
console.log('result: ', result2); // true
```

### Mapping Enum
Let's say there is an enum type called Priority as follows.

There are three values of this priority number: High, Medium, and Low, and we want to print the output of this number in Korean, not in English.

However, enum's own data value cannot be changed to Korean.

```ts
enum Priority {
   High,
   Medium,
   Low,
}
```

At this time, we can use the computed property grammar, which is an attribute variable function provided by JS as a standard.

```ts
enum Priority {
   High,
   Medium,
   Low,
}

// Mapping to Output Priority Enum Type in Korean
export const PRIORITY_NAME_MAP = {
   [Priority.High]: '높음',
   [Priority.Medium]: '중간',
   [Priority.Low]: '낮음',
};

class Todo {
   priority;

   constructor(priority: Priority) {
      this.priority = priority;
   }

   getPriority() {
      console.log(`${PRIORITY_NAME_MAP[this.priority]}`); // Give enum value with object properties mapped in Korean
   }
}

const t: Todo = new Todo(Priority.High);
t.getPriority(); // 높음
```

### Enum Type Guard
By using the mapped type, the utilization of the Enum type can be increased.

```ts
enum Fruit {
   Apple,
   Banana,
   Orange,
}
 
const FRUIT_PRICE: { [key in Fruit]: number } = {
   [Fruit.Apple]: 1000,
   [Fruit.Banana]: 1500,
   [Fruit.Orange]: 2000,
};
```

For example, as in the code above, there is an enum type called Fruit, and assuming that the constant `FRUIT_PRICE` manages all fruit prices, if the enum type changes, it warns with a red line as follows.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/664350df-887b-4197-902a-a833481dcd18)

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7bd3a6bd-4d76-4dc4-bad1-1decffa6eb7c)

The type of `FRUIT_PRICE` constant `: { [key in Fruit]: number }` is the mapped type. In this way, if the enum type needs to be added/modified, red lines are generated by the mapped type to reduce errors.

### Constant Enum
The use of enum has the disadvantage of unnecessarily growing bundle files because objects remain even after compile.

If the enum object is not accessed frequently, it is not necessary to leave it as an object after compile. The `const enum` is used at this time.
 
For example, in the case of Saint Enum, if it is compiled in JS, it becomes as follows.

```ts
enum Bool {
  True,
  False,
  FileNotFound
}
let value = Bool.FileNotFound;
```

```javascript
var Bool;
(function (Bool) {
  Bool[(Bool["True"] = 0)] = "True";
  Bool[(Bool["False"] = 1)] = "False";
  Bool[(Bool["FileNotFound"] = 2)] = "FileNotFound";
})(Bool || (Bool = {}));
let value = Bool.FileNotFound;
```

On the other hand, when `const Enum` is used, it is replaced by a constant at the time of compilation as follows.

```ts
const enum Bool {
  True,
  False,
  FileNotFound
}
let value = Bool.FileNotFound;
```

```javascript
let value = 2; /* FileNotFound */
```

As such, the `const enum` is said to be more preferred because all internal constant values is changed to all internal fields in the compile stage, so it is not affected by dependent module during the runtime and has a smaller code size.
 
In this way, it is thought that the `const enum` is unconditionally good, but it is not necessarily.

For example, the `const enum` is not capable of **reverse mapping** as follows. In fact, if we approach it like this way `Bool[3]`, we get an error.

```ts
const enum Bool {
  True,
  False,
  FileNotFound
}
let value = Bool.FileNotFound;
let value2 = Bool[3]; // ERROR! - A const enum member can only be accessed using a string literal.
```

In summary, it can be seen that raw enum is only used when reverse mapping is required, and in other cases, it is better to use it as a `const enum`. (In practice, `const enum` is preferred because there is no use of reverse mapping unless it is a good situation.)

