## Intro
When I used React and TypeScript at first, I got a lot of errors relating to the types. There is a error `Type Error: Cannot read property 'map' of undefined` that is one of the typical type errors.

There are some reasons why the above error occurs. In this post, let's find out why this error occurs and see how to fix it!

![err](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c215006-ae6e-465a-af6d-3f3f59c9a11f)

## Problem
In most cases we will see the first error. However, in some cases, you may see a second error.

`TypeError: array.map Cannot read property 'map' of undefined`

or 

`hooks.tsx:550 React Router caught the following error during render TypeError: Cannot read properties of undefined (reading 'map')`

> React execute all the effect after rendering is committed to the screen. In fact, React do the rendering although data doesn’t not get in yet. Surely, data are not declared, which means that it is undefined.

**Error code example1:** 
```tsx
const App = () => {
  const [todos, setTodos] = useState<string[]>();
	  
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("https://path");
    };
    const data = await response.json();
    setTodos(data);
  }, [])

  console.log(todos);

  return (
    <div>
      {todos.map((todo:string) => ( 
        // First value of todos is undefined.
        // Because <div> is rendered before finishing the useEffect(actually getting data and putting data into Todos)
        <div key={todo}>
          <h2>Item: {todo}</h2>
        </div>
      ))}	
    </div>
  );
}

export default App;
```


****Error code example2**
```js
// strArr = ["1", "2", "3", "4"]

const App = (strArr: string[]) => {

  return (
	  <>
	    {strArr.map(el => ( 
	      // el is undefined before get strArr, causing error
	      // after get strArr, "1", "2", "3", "4" (but it's not displayed)
	      // undefined(error) => "1" => "2" => "3" => "4"
        <div key={el}>{el}</div>
	    ))}
    </>
	)
}
```

## Solution
To solve this error, there are two ways.

1. Using &&

2. Declare initial value

### 1. Using `&&`
> `&&` is able to be used like `if`. In other words, `Array && Array.map((e)⇒{})` means that if `Array` is true, it execute `Array.map`.

```tsx
const App = () => {
  const [todos, setTodos] = useState<string[]>();
	  
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("https://path");
    };
    const data = await response.json();
    setTodos(data);
  }, [])

  console.log(todos);

  return (
    <div>
      {todos && todos.map((todo:string) => ( 
        // If todos is undefine, map is not executed and no errors.
        <div key={todo}>
          <h2>Item: {todo}</h2>
        </div>
      ))}	
    </div>
  );
}

export default App;
```

Another example:

```tsx
const Tags({ Array: personality }) {
  return (
    <>
      {() => {
        personality && personality.map((m) => {
          <div className="tag">{m}</div>
        })
      }}
    </>
  )
}
```

If using `&&`, we can handle the error `TypeError: array.map Cannot read property 'map' of undefined`.

This is because `map` is not operated although tags in return are displayed.

In details of the first example, `todos` is undefined until the data is set. While the data is set in `useEffect`, top tag <div> is displayed. However, because `todos` is undefined, `todos.map` doesn't runs. After the data is set and the component is re-rendered, `todos` has datas, so `<div>`, `<h2>`, and `{todo}` is shown on the screen.

### 2. Declare initial value
> This error is issued because React can’t get data during the first rendering causing data is undefined. So, setting the initial value to the `useState` is able to be another solution.

```tsx
const [todos, setTodos] = useState<string[]>([]);
```

Like the above code, if we declare the initial value to the string array, we can solve the error.

As the above mention, the reason why the error occurs is `todos` doesn't have any datas when the component is rendered at the first time. However, if there is the initial value, `todos` has its own value and `map` can be run regardless of getting the data through `useEffect` or something else.

---
[](https://kinsta.com/knowledgebase/typeerror-cannot-read-property-map-of-undefined/)

[](https://devbirdfeet.tistory.com/47)