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


---
- `https://legacy.reactjs.org/docs/hooks-state.html`