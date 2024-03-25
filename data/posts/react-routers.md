If the react-router-dom library is used in react, the question arises about routing.

That is, the difference between the Link tag provided by the react-router-dom and the existing HTML tag, the a tag.

## What's the problem using a tag
Suppose a primitive react application using react-router-dom and redux. There are two components named Page1 and Page2. Of course, when pressing the Page1, it's routed to page1, and when pressing the Page2, it's routed to page2.

There two states namely page1State and page2State. 

On both pages we render state contents. And on each component’s componentDidMount method, we call actions to load state content.

Let's give an example to clarify page routing and state.

1️⃣ When you first click page1, page1State is loaded and you expect to see page below ↓

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b0fc3dc3-9ac3-4589-9b5f-ac51050b137a)

2️⃣ After when you click page2, page2State should be loaded and you expect to see page below ↓

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5f2272fe-2c1b-45cf-9922-d7650f7a7a7d)

❗️ However, it's not working as expected. Previous stage is reseted on every route and you see below images after clicking page2 ↓

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/10f0bd0f-0cdf-44e4-a460-9156f8eeb308)

---
[](https://medium.com/@yavuz.gokirmak/why-you-should-use-link-instead-of-a-in-react-577a215a5bb8)

[](https://velog.io/@yeonsubaek/React-Link-vs-a-tag-ft.-react-router-dom)

[](https://gomgomkim.tistory.com/9)