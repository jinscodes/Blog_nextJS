## Intro....
It is very often necessary to add items to the array.

For JavaScript and React, use `push()` and `concat()`.

So what is the difference between `push()` and `concat()`?

## How To Add Items To Array
When we add an item to an array in JavaScript, we usually use the `push()` function to add it to the end of the array.

However, using the `push()` function in React causes problems.

**Problem**   
React is characterized by the retention of invariance. Therefore, the value inside the state should never be modified directly.

However, since the `push()` function is to change the arrangement itself, it causes an error in the react.

A function called `concat()` is used to replace `push()` in the react. Because `concat()` is a function that creates a new array, it creates a new array containing new items rather than directly entering the array.

**push()**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cca0240b-a2c5-47f9-ac77-f75a4141d4f7)

**concat()**

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/df4ab5d6-35f8-442c-805d-2edd8098da0c)

For the above reasons, there is a difference between the two functions.

Let's look at an example of adding an array entry in a react.

**Example of using concat() in react**

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/966defed-28bc-4a2a-b790-c1db546ecb11)

---
[](https://penda.tistory.com/51)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)