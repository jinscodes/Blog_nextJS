> 💡 Context is an API that is built into React, starting from React version 16.

## React Context Usage

There are two ways to use Context.

- React Context
- useContext Hook

## React Concept: Umbrella

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2a561d78-635c-4976-9445-743089332101)

> **Umbrella** is a concept of to handle the range of the **context** when the specific data is needed under the specific areas.

Factors that affect all contexts, such as dark mode or language, can affect all lower contexts by placing the umbrella at the top (blue umbrella). 

Or, if there is data commonly applied to a specific context or less (pink & yellow umbrella), it can be made to affect all contexts below that specific context by putting an umbrella on that particular context.

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

1️⃣ Create hook file

2️⃣ In the hook file, `createContext` method for using context   
 
3️⃣ Take the created context and wrap context provider around the component tree   

4️⃣ Put value on the context provider using `value` prop   

5️⃣ Read the value within the component what you want to use by using `useContext()`

### Check codes

1️⃣ Create hook file

```html
↳ src
  ↳ hooks
    ↳ dataContext.ts
```

In many case, in order to use hook, we'd better to make a folder named **hooks**. In the hooks folder, create `dataContext.ts` file.

2️⃣ In the hook file, `createContext` method for using context  

```jsx
import React from 'react';

const dataContext = React.createContext();
```

Above the App fucntion, we are creating context with `React.createContext()`. If we want to add initial value of the context, we can add the initial value into the rounded brackets like `React.createContext({ data: "", idx: 0 })`.

3️⃣ Take the created context and wrap context provider around the component tree   

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

4️⃣ Put value on the context provider using `value` prop   

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

On `DataContext.Provider`, we put the value that we want to pass down our entire component tree.

5️⃣ Read the value within the component what you want to use by using `useContext()`

```jsx
import React from 'react';

function dataContext() {
  const value = React.useContext(dataContext);  
    
  return <h1>{value}</h1>;
}
```

Unlike React context, useContext hook uses `useContext()`. We just allocate the value of `useContext()` to the variable, and then we can use it.

> 💡 The benefit of the useContext hook is that it makes our components more concise and allows us to create our own custom hooks.

> 💡 You can either use the consumer component directly or the useContext hook, depending on which pattern you prefer.

## Replacement of React Context

- Redux
- Zustang State
- Recoil

---
- `https://www.freecodecamp.org/news/react-context-for-beginners/`
- `https://ko.legacy.reactjs.org/docs/context.html`