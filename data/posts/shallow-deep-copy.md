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
**What is deeo copy?**

**1️⃣ Copy via ... (spread operator)**

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4c51102b-6236-41a5-a762-9bfe99707aae)

---
[](https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/)

[](https://www.linkedin.com/pulse/understanding-difference-between-shallow-copy-deep-python-torabi-nnh5e/)

[](https://hanamon.kr/javascript-shallow-copy-deep-copy/)