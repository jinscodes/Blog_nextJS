`React` is the entry point to the React library. `React` can be accessed with `import React from 'react';` (or `var React = require('react')`).

#### About components

- React.Component
- React.PureComponent
- React.memo

## React.Component

`Component` is the base class for the React components defined as JavaScript classes.

Class is stil supported by React, but it's not recommended in React (instead of using class, recommending to use component and hook).

To define a React component as a class, extend the built-in Component class and define a render method:

```jsx
import { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

> 💡 **NOTE**

> Only `render` method is required. Others are optional.

## React.PureComponent

`PureComponent` is similar to Component but it skips re-renders for same props and state.

To skip re-rendering a class component for same props and state, extend PureComponent instead of Component:

```jsx
import { PureComponent } from "react";

class Greeting extends PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

PureComponent is a subclass of Component and supports all the Component APIs.

Extending PureComponent is equivalent to defining a custom `shouldComponentUpdate` method that shallowly compares props and state.

### Usage

**Skipping unnecessary re-renders for class components**

---

[](https://react.dev/reference/react/Component)

[](https://legacy.reactjs.org/docs/react-api.html#reactpurecomponent)

[](https://legacy.reactjs.org/docs/react-api.html#reactcomponent)
