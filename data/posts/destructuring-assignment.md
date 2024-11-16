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

```jsx

```

---

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[](https://www.linkedin.com/pulse/how-destructuring-assignment-javascript-works-alex-devero/)

[](https://velog.io/@oimne/Javascript-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9)
