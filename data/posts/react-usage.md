> 💡 Context is an API that is built into React, starting from React version 16.

## React Context Usage

There are two ways to use Context.

- React Context
- useContext Hook

## React Context
There are four steps to using React Context

1️⃣ `createContext` method for using context   
 
2️⃣ Take the created context and wrap context provider around the component tree   

3️⃣ Put value on the context provider using `value` prop   

4️⃣ Read the value within the component what you want to use by using context consumer

### Check codes

1️⃣ `createContext` method for using context   

```jsx
import React from 'react';

const dataContext = React.createContext();
```

Above the App fucntion, we are creating context with `React.createContext()`. If we want to add initial value of the context, we can add the initial value into the rounded brackets like `React.createContext({ data: "", idx: 0 })`.

2️⃣ Take the created context and wrap context provider around the component tree   

```jsx
import React from 'react';

const dataContext = React.createContext();

function App() {
  return (
    <DataContext.Provider>
      <Home />
    </DataContext.Provider>
  )
}
```

DataContext is used in the App component. When we wrap components with context, we need to add a `provider`. There is no limit to the number of components in the `context.provider`.

3️⃣ Put value on the context provider using `value` prop   

```jsx
import React from 'react';

const dataContext = React.createContext();

function App() {
  const value = {data: "test", idx: 1}

  return (
    <DataContext.Provider value={value}>
      <Home />
    </DataContext.Provider>
  )
}
```

On `UserContext.Provider`, we put the value that we want to pass down our entire component tree.

4️⃣ Read the value within the component what you want to use by using context consumer

```jsx
function Home() {
  return (
    <DataContext.Consumer>
      {value => <h1>{value.idx}. {value.data}</h1>}
    </DataContext.Consumer>
  )
}
```

Wherever we want to use what was provided on our context, we need to add `consumer` to the DataContext. We can place "DataContext.Consumer" at the top of the <tag> we want to use.

## useContext Hook
> Consuming context became available in React 16.8 with the arrival of React hooks. We can now consume context with the useContext hook.



---
- `https://www.freecodecamp.org/news/react-context-for-beginners/`
- `https://ko.legacy.reactjs.org/docs/context.html`