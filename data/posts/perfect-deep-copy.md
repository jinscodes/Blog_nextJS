The post about shallow and deep copy is ↓

[](http://localhost:3000/posts/JavaScript,ReactJs/shallow-deep-copy)



## Deep Copy
Two methods that can be used to make deep copies have been discussed in the previous post.

spread operator and Object.assign()

However, the above two methods do not completely make deep copies. Also, limitations clearly exist.

#### What are some ways to make sure and perfectly deep copy?
- Performs a recursively deep copy
- Using Lodash's cloneDeep function
- Using JSON.parse() and JSON.stringify() functions

### Recursive Function

---
[](https://velog.io/@katej927/JavaScript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)