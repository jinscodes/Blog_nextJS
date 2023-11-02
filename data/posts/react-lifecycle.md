## React Component Lifecycle
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6f042452-c5a7-4d2e-a913-7db5182162df)

The above image shows the lifecycle of the React. This process starts with creation of `component` and ends with cleaning up `component`. The flow of the component's lifecycle is like this:

According to the React Hooks Lifecycle, it can be divided into three sections.   

**The first** is Redner phase.

## Render Phase

The Render Phase can be subdivided into three.
- Mounting
- Updating
- Cleaning

### Mounting 
> Mounting means the time when the component is created at the beginning of this process.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0da516bf-25c7-4bd2-9f66-b86b0d8a37f9)

#### The Order of Mounting Process
(1) Mounting the component >   
(2) rendering the result of `return` value >   
(3) drawing the rendered status >   
(4) Comparing the virtual DOM and DOM's elements >   
(5) Updating the DOM if differences between virtual DOM and DOM are detected (only part that is different from each other) || For initial rendering, there is no information of the current component or DOM. So, drawing the whole elements of the component to DOM >   
(6) running the `useEffect` and `useLayoutEffect`

#### Mounting Codes ( componentDidMount & componentWillMount )

```jsx
class Mounting extends React.Component {
 constructor(props) {
  super(props);
  this.state = { count: 0, isOnlien: null };
 }

 componentDidMount() {
  console.log("componentDidMount");
 }

 componentWillMount() {
	console.log("componentWillMount");
 }

 render() {
  return (
   <div>
    <h1>hello world!</h1>
   </div>
  );
 }
}
```

**constructor**
- This lifecycle method is the first one that is called and is usually where you will set the state of your component

**componentWillMount**
- `componentWillMount` is called before a component is rendered in the DOM.
- It is rarely used in modern React development and is considered somewhat legacy.
- It can be used for setup tasks or to make decisions about whether or not the component should render based on certain conditions.
- Changes made in this method will not be reflected in the initial render, but they can affect subsequent renders.

**render**
- This method is called after the constructor method has finished
- This method is in charge of displaying HTML markup to the user
- At this point in the component’s lifecycle, the component is mounted in the DOM

**componentDidMount**
- `componentDidMount` is called after a component has been rendered in the DOM
- It is a commonly used lifecycle method for performing tasks that require access to the DOM, like fetching data from an API, setting up event listeners, or interacting with external libraries.
- It is a good place to perform one-time setup or data fetching tasks.
- Changes made in this method can trigger re-renders or updates.


### Updating
> After the creation of the component and before extinction of the component, when the `props` or `state` is updated is referred to Updating.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f1600250-15eb-47e3-a6f3-7b60c003097c)

#### The Order of Updating Process
(1) States or props are changed by `useEffect` or user interaction >   
(2) Redrawing the DOM depending on the changed `props` or `states` >   
(3) Comparing the virtual DOM and DOM's elements >   
(4) If the differences between virtual DOM and parent elements are detected, only the part is updated. However, if the `props` or `states` has been changed but there is no change in the UI, the DOM will not be updated. >   
(5) Running the `useEffect` and `useLayoutEffect`


#### Updating Codes ( componentDidMount & componentWillMount )
```jsx
class Updating extends React.Component {
 constructor(props) {
  super(props);
  this.state = { count: 0, isOnlien: null };
 }

 shouldComponentUpdate(nextProps, nextStates) {
  if ( this.state.count !== 0 ) {
   console.log(this.state.count);
   return true;
  }
 }

 componentWillUpdate(nextProps, nextStates) {
  if ( this.state.count !== 0 ) {
   console.log(this.state.count);
  }
 }

 componentDidUpdate(nextProps, nextStates) {
  if ( this.state.count !== 0 ) {
   console.log(this.state.count);
  }
 }

 getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log(this.state.count);
  document.getElementById("div1").innerHTML = "Before the update, the count was " + prevState.count;
 }

 render() {
  return (
   <div>
    <h1>hello world!</h1>
   </div>
  );
 }
```

**shouldComponentUpdate**
- The `shouldComponentUpdate` method is called before a component is updated
- This method returns a boolean value that determines whether the component should update or not
- If this method returns true, the component will update, and if it returns false, the component will not update

**componentWillUpdate**
- `componentWillUpdate` is a lifecycle method that gets called just before a component's update cycle starts
- It allows you to perform any necessary actions before the component updates

❗️ This method is not recommended for updating the state, as it can cause an infinite loop of rendering. It is primarily used for tasks such as making API calls, updating the DOM, or preparing the component to receive new data. `ComponentWillUpdate` is often used in conjunction with `componentDidUpdate` to handle component updates.

**componentDidUpdate**
- The `componentDidUpdate` method is a lifecycle method that is called after a component has been updated and re-rendered
- It is useful for performing side effects or additional operations when the component's props or state have changed

**getSnapshotBeforeUpdate**
- The `getSnapshotBeforeUpdate` method is called just before the component's UI is updated
- It allows the component to capture some information about the current state of the UI
- This method returns a value that is passed as the third parameter to the `componentDidUpdate` method

## Cleaning up
> The unmounting phase refers to the lifecycle stage when a component is being removed from the DOM (Document Object Model) and is no longer rendered or accessible.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c17bd0b9-08b8-4b99-a238-dc170adf8f32)

#### The Order of Updating Process
(1) React performs a series of cleanup operations to ensure that the component 
(2) Its associated resources are properly disposed of

#### Updating Codes ( componentDidMount & componentWillMount )
```jsx
class Updating extends React.Component {
 constructor(props) {
  super(props);
  this.state = { count: 0, isError: false };
 }

 componentWillUnmount() {
  console.log(this.state.count);
 }

 componentDidCatch(error) {
  console.log(error);
  this.setState({
    hasError: true
  });
 }

 render() {
  return (
   <div>
    <h1>hello world!</h1>
   </div>
  );
 }
```

**componentWillUnmount**
- This method is called just before the component is removed from the DOM
- It allows you to perform any necessary cleanup
- After componentWillUnmount() is called, the component is removed from the DOM and all of its state and props are destroyed

❗️ Once a component is unmounted, it cannot be mounted again. If you need to render the component again, you will need to create a new instance of it.

**componentDidCatch**
- The errors are caught during rendering
- In this method `setState` can be called
- It used to catch an unhandled Javascript error in a child component and display a fallback UI instead of the component that crashed

❗️ this method only catches errors in child components and not in the component itself.

## Deprecated methods
Some lifecycle methods have been deprecated.

- componentWillMount()
- compoentWillReceiveProps()
- componentWillUpdate()

--- 
- `https://ko.legacy.reactjs.org/docs/hooks-effect.html`
- `https://www.freecodecamp.org/news/react-component-lifecycle-methods/`
- `https://github.com/Wavez/react-hooks-lifecycle`
- `https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c`