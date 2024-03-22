JavaScript is a high-level, dynamically typed client-side scripting language. It adds functionality to static HTML pages. Like most other programming languages JavaScript allows supports the concept of deep copy and shallow copy.

## Shallow Copy
**What is shallow copy?**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dc1d7757-e23a-4bf0-8788-e351db34ec6c)

Like the above, in the case of direct substitution of an object, allocation by reference is made, so the two have the same data(address).

This is the *SHALLOW COPY*.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d875029f-e685-42e3-b687-c6ec01ea101d)

The above two objects have the same data(address), so they refer to the same address.

Therefore, even if the property of obj2 is modified and obj1 is outputted, it is the same as the obj2 value.

## Deep Copy
**What is deep copy?**

There are two way to do deep copy.

**1️⃣ Copy via ... (spread operator)**

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4c51102b-6236-41a5-a762-9bfe99707aae)

Through the spread operator, the property of obj1 was copied in {} and assigned to obj2.

Now obj1 and obj2 have a different address (but only up to 1 depth).

**2️⃣ Copy via Object.assign()**

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c6baae5-0471-476d-ae0b-0655b5ad4571)

Through the `Object.assign()` method, an empty {} object is assigned as the first argument, and obj1 is assigned as the second argument. And lastly, `Object.assign()` is allocated to obj2.

Now obj1 and obj2 have a different address (but only up to 1 depth).

---
[](https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/)

[](https://www.linkedin.com/pulse/understanding-difference-between-shallow-copy-deep-python-torabi-nnh5e/)

[](https://hanamon.kr/javascript-shallow-copy-deep-copy/)

[](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)