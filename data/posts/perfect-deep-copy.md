The post about shallow and deep copy is ↓

[](http://localhost:3000/posts/JavaScript,ReactJs/shallow-deep-copy)



## Deep Copy
Two methods that can be used to make deep copies have been discussed in the previous post.

spread operator and Object.assign()

However, the above two methods do not completely make deep copies. Also, limitations clearly exist.

#### What are some ways to make sure and perfectly deep copy?
- Performs a recursively deep copy
- Using Lodash's cloneDeep function
- Using `JSON.parse()` and `JSON.stringify()` functions

### Recursive Function
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dc090fdc-1ea9-4ee5-84fc-23f9bed7ee10)

Repeated copy of content if inside is an object.

The disadvantage is that it is complicated if deep radiation is done through the recursive function.

### JSON.parse && JSON.stringify
`JSON.stringify()` converts an object to a json string, which breaks all references to the original object.

After converting the object to a json string, use `JSON.parse()` to make it the original object (java script object) again.

This method is the simplest and easiest, but it is slow compared to other methods, and if the object is function, it is treated as undefined.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c6221b33-190f-465c-ab65-fbf351897cf4)

### Lodash Library
Libraries make deep copy easier and safer. 

The downside is that it needs to be installed and that it will be efficient for general development, but it cannot be used for coding tests.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/13dace24-705f-4950-bf83-8babe4153608)

---
[](https://velog.io/@katej927/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

[](https://bbangson.tistory.com/78)

[](http://localhost:3000/posts/JavaScript,ReactJs/shallow-deep-copy)
