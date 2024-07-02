`React` is the entry point to the React library. `React` can be accessed with `import React from 'react';` (or `var React = require('react')`).

#### About components

- React.Component
- React.PureComponent
- React.memo

## React.Component

`Component` is the base class for the React components defined as JavaScript classes.

Class is stil supported by React, but it's not recommended in React (instead of using class, recommending to use component and hook).

To define a React component as a class, extend the built-in Component class and define a render method:

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/016f1915-cabe-477e-a854-c392f1cc8831)

> 💡 **NOTE**

> Only `render` method is required. Others are optional.

## React.PureComponent

`PureComponent` is similar to Component but it skips re-renders for same props and state.

To skip re-rendering a class component for same props and state, extend PureComponent instead of Component:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/891d92d9-6233-4692-b83d-96d628b4dd2a)

PureComponent is a subclass of Component and supports all the Component APIs.

Extending PureComponent is equivalent to defining a custom `shouldComponentUpdate` method that shallowly compares props and state.

### Usage

**Skipping unnecessary re-renders for class components**

Whenever parents hava changes, a component is re-rendered in React. Normally, we can't control this re-rendering. However, we can handle this issue with using `PureComponent`.

React will not re-render when its parent re-renders if the parent's props, state, and context haven't changed.

Class components can opt into this behavior by extending PureComponent:

---

[](https://react.dev/reference/react/Component)

[](https://legacy.reactjs.org/docs/react-api.html#reactpurecomponent)

[](https://legacy.reactjs.org/docs/react-api.html#reactcomponent)
