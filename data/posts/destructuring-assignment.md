Destructuring assignment is one of the features introduced in ES6. Also, it's also one of the most popular features.

The destructuring assignment syntax is a JS expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## Types of Destructuring Assignment

### Destructuring Array

![des-array-ex](https://github.com/user-attachments/assets/7237694e-89dd-43be-9203-293604ee7271)

If the number of variables you want to assign is greater than the length of the array you want to disassemble, the error will not occur, because if there is no value to assign, it will be treated as undefined.

Using `=`, you can set a 'default value', which is the value to be allocated as a default when there is no value to allocate.

![des-array-default-ex](https://github.com/user-attachments/assets/90190409-445c-4478-b368-df37f163973b)

Complicated expressions or functions can be a default value.

### Destructuring Object

![des-object-default-ex](https://github.com/user-attachments/assets/16f3b0c6-e267-4b01-b67b-6c499c410ba9)

The values stored in properties `options.title`, `optins.width`, and `options.height` are assigned to the corresponding variables.

At this time, order is not matter.

```jsx
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { width: w, height: h, title } = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200
```

The colon is used like "property of destructuring obejct: target variable".

In the above example, property `width` is assigned as `w` and `height` is assigned as `h`.

Surly, we can set the default value by using `=`. Also, colon and equal operators can be used at the same time. As an example:

![des-object-default-ex2](https://github.com/user-attachments/assets/bc14a5bb-7f31-41ca-9472-12a5c7a5ca42)

### Nested destructuring

When an object or array includes an object or array with a different arrangement, a more complex pattern may be used to extract information about an overlapping array or object. This is called nested structuring.

In the example below, the `size` property value of object `options` is another object. The `items` property has an array as a value.

![nested-destructuring](https://github.com/user-attachments/assets/481d0bb9-3026-4357-b916-87efb3749784)

The pattern on the left side of the substitution operator has the same structure as object `options` for extracting information.

![nested-destructuring2](https://github.com/user-attachments/assets/4bc3e28c-21eb-4e92-9bc3-cfa8cb04f627)

Desired values were stored for variables `width`, `height`, `item1`, and `item2`, and default values were stored for `title`.

However, it should be noted that in the example above, there are no variables dedicated to `size` and `items`. Instead of the dedicated variables, we assigned the information within `size` and `items` to the variables.

## Utilization of Destructuring Assignment

### Skipping values in arrays

We can change the order of values being assigned by changing the order of variable names. With arrays, we can also skip values.

This allows you to assign only some values from an array and skip those you don’t care about. You can do this by leaving the place for variable name in a specific position empty.

![skipping-value](https://github.com/user-attachments/assets/5b1cda21-4fbb-405f-8bcd-0a898c22938a)

### Arrays, destructuring and rest operator

Now, we know how to use destructuring assignment to assign individual values and also how to skip some. Here is another thing we can do when we use destructuring with array.

It is **rest operator**.

If we use rest operator, we can assign individual items to some variables. And then, we can assign any remaining items to another variable.

![rest-operator](https://github.com/user-attachments/assets/15594ddb-956c-48e3-9a5a-8cb496ef4d79)

If we use rest operator even if there are no remaining values, the result will be an empty array.

For example:

![rest-operator2](https://github.com/user-attachments/assets/d3522f05-78c4-416b-bcd5-9774705256ad)

And lastly, there is one thing about using rest operator. When we want to use it, make sure to use it as the last. Any variables or empty spots for skipped values must come before it.

![rest-operator3](https://github.com/user-attachments/assets/810a7ff4-f177-488e-85df-c6f1a7757efb)

### Swapping values

There is another thing we can do with destructuring assignment. It's **swapping values**.

We can declare two values and assign them some values. And then, we can swap those values. Here is the example:

![swap-values](https://github.com/user-attachments/assets/7c325791-6483-4cc3-b54a-b72990e80e0c)

On the left side, we can put variable like `[a, b]` which we want to swap.  
On ther right side, we can put the same variables in the new order.

As a result, `a` prints `"I am B"` and `b` prints `"I am A"`.

We can swap values in an array itself so quickly by using destructuring. Like the below case, we can replace variable names with the specific indexes.

![swap-values2](https://github.com/user-attachments/assets/6fbacb74-0fc7-419a-8c1c-ff14415a82a8)

### Changing variable names

There is a way to change the variable name we want the value to be assigned to. What you have to do is to add colons(:) and new variable name right after the original variable name.

Then we can use that new name to access that value.

![changing-variables](https://github.com/user-attachments/assets/82a915e8-cb70-415a-bf38-b0dbe467e601)

### Computed property names

We can also define property which value we want extract using computed property name.

For instance, you can use value of a variable to specify property you are looking for. When you want to use computed property name you have to wrap it with square brackets.

![changing-variables2](https://github.com/user-attachments/assets/2d1f16bf-c5a7-4f5a-aba5-d86726f12e0f)

---

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[](https://www.linkedin.com/pulse/how-destructuring-assignment-javascript-works-alex-devero/)

[](https://velog.io/@oimne/Javascript-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9)
