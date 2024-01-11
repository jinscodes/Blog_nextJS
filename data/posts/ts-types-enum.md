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