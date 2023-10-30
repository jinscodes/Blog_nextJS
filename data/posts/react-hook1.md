## What's Hook?
Accroding to the React doc...

**Hook is...** Hook is a special function that lets you "hook into" React features. For example, `useState` is a Hook that lets you add React state to function components. We’ll learn other Hooks later.   

**When...** If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

## Rules of Hooks
1️⃣ **Top Level**   
Don't call Hooks inside loops, conditions, or nested functions. Instead, you can always use Hooks at the top level of the React function.

2️⃣ **Only React Functions**   
Don't call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components and call Hooks from custom Hooks.


## What's useState?
> No matter how much you change the value on the code, it doesn't change on the screen. The reason is that the status of the value has not been changed. 

There are three features
- `setState()` is handled asynchronously
- If `setState()` is called consecutively, it performs a Batch process
- The state is an object

`useState` is one of the Hooks made by React. `state` is a dynamic value in React. The first thing in square brackets means the current state of the value, and the second thing in square brackets means the function to update state(first thing in square brackets). Right Next to the equal means name of the Hook. Lastly, the value in round brackets means the initial value of the state.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/66131437-bd22-47d2-8c89-5f902bb64ab5)


## Let's take a look useState in earnest

```js
let count = 0;

const handleChange = () => {
 count = count + 1;
}
```

Above code, `count` is plused if the handleChange is worked. However, on the screen, `count` doesn't be changed.   
If then, how can I change the state displayed on the screen? To change the state, you must use useState like below:

❗️Cuation

If `setState` is declared several times..

It is same as declared only once. If you try to change the state without setting a separate previous value, only the same value will appear. For example, each declaration is set to the initial value (0) so the value increases by 1 even if declared multiple times

```jsx
// nope
const [count, setCount] = useState(0);

onClick={()=> {
 setCount(count + 1); // count = 0
 setCount(count + 1); // count = 0
 setCount(count + 1); // count = 0
 setCount(count + 1); // count = 0
 setCount(count + 1); // count = 0
}}
```

```jsx
// good
const [count, setCount] = useState(0);

onClick={() =>{
	setCount(prev => prev + 1); // count = 1
	setCount(prev => prev + 1); // count = 2
	setCount(prev => prev + 1); // count = 3
	setCount(prev => prev + 1); // count = 4
	setCount(prev => prev + 1); // count = 5
}}
```

If you used classes in React before, this code should look familiar:

```jsx
class Example extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   count = 0;
  }
 }

 render() {
  return (
   <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
  )
 }
}
```

## Multiple state
There are to way to use multiple state variables. 

1️⃣ **Declaration several states**
```jsx
function ExampleWithManyStates() {
 const [example1, setExample1] = useState(1);
 const [example2, setExample2] = useState(2);
 const [example3, setExample3] = useState(3);
}
```

In the above code, you can use setState individually like below: 

```jsx
() => {setExample1(10)};
() => {setExample2(20)};
() => {setExample3(30)};
```

2️⃣ **Declaration one state using Object**

If you need to declare too many states or want to handle the states with simple code, you can use Object.

```jsx
function ExampleWithManyStates() {
 const [example, setExample] = useState({
	example1: 1,
	example2: 2,
	example3: 3
 });
}
```

You can set the value of the state like below:

```jsx
// If you want to change all states
() => {
 setExample({
  example1: 10,
  exmple2: 20,
  example3: 30
 });
}

// If you want to change one or two states
() => {
 setExample(prev => {
  ...prev,
  example: 1,
 });
}
```

## What is useEffect
> useEffect informs what to do after components' rendering to the React.

React remembers the function we turned over (called `effect`), and then calls it out after performing a DOM update.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/50d5ebfc-efbd-4da4-addd-cac39850ee63)
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/73dfcd3a-8a7f-452a-974c-59ff51bab904)

## Let's take a look useEffect in React
```jsx
function Example() {
 const [count, setCount] = useState(0);

 useEffect(() => {
  console.log(`You clicked ${count} times`);
 }, [count]);
}
```

The above code means that `console.log` runs when a component is first rendered or whenever count is changed. Unlike `componentDidMout` or `componentDidUpdate`, `effect` that is used in useEffect doesn't block what the browser update the screen. For this, it can improve the application's reactivity.   

💡 Usually, `effect` doesn't be needed to run asynchronously. However, in some case, if the `effect` must be run asynchronously, there is `useLayoutEffect` using the same API with `useEffect`.

❗️Cuation
If using `useState` during getting or inserting the datas like `fetch` in `useEffect`, infinite loop occurs. This is becuase `useState` re-run the component, which means that `useEffect` also re-run. In the `useEffect`, getting the datas using `fetch` again, and interting the datas using `useState`, cuasing infinite loop.

```jsx
const [datas, setDatas] = useState();

useEffect(() => {
 fetch(`url`)
  .then(res => res.json())
	.then(data => setDatas(data));
});
```
![infiniteloop](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6636a4eb-7d09-4ab1-9c9e-95533b01d9a9)

To solve this problem, using empty square brackets or giving the condition in square brackets.

```jsx
// empty square brackets
const [datas, setDatas] = useState();

useEffect(() => {
 fetch(`url`)
  .then(res => res.json())
	.then(data => setDatas(data));
}, []);

// giving the condition
const [datas, setDatas] = useState();
const [checked, setChecked] = useState(false);
const handleChange = () => setChecked(prev => !prev);

useEffect(() => {
 fetch(`url`)
  .then(res => res.json())
	.then(data => setDatas(data));
}, [checked]);
```

### UnMount

You can use the `return` in `useEffect` to clean up the `useEffect` when the component is unmounted

```jsx
 useEffect(() => {
  function handleStatusChange(status) {
   setIsOnline(status.isOnline);
}

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
```

( ※ More details about `useEffect` are in the next post )

---
- `https://legacy.reactjs.org/docs/hooks-state.html`
- `https://dmitripavlutin.com/react-useeffect-explanation/`
- `https://ko.legacy.reactjs.org/docs/hooks-effect.html`