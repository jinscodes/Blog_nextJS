## What is Conponent?

The simplest way to define the component is to code JavaScript function

```jsx
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}
```

This function receives the data named props, and then return React element. These components are literally referred to as "function components" because they have the form of JavaScript functions.

```jsx
class Welcome extends React.Component {
 render() {
  return <h1>Hello, {this.props.name}</h1>;
 }
}
```

This component is same as the above functional component. These compoonents are literally referred to as "class components".

## How to render the component in React

Previously, only DOM tags are used to represent React elements. like:

```jsx
const element = <div />
```

React elements can also be represented as custom components.

```jsx
const element = <Welcome name="Jay" />;
```

When React finds elements that is written as a DOM tag component or custom component, it send JSX attributes and child to the components as a single object.   

This Object is referred to `props`.

The below code is an example of rendering "Hello Jay".

```jsx
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementedById('root')); // create root
const element = <Welcome name="Jay" />; // create component
root.render(element); // render element
```

## Component Composition
> In general, component composition refers to increasing reuse by separating and recombining components into small units. 

React has powerful composition model, and it's better to use composition for reusing instead of inheritance. Some components may not be able to predict which child elements will come in. It is particularly common in components such as Sidebar or Dialog or button. In this case, you'd better to use special children prop to print child elements.

There is an example

```js
function FancyBorder(props) {
 return (
  <div className={'FancyBorder FnacyBorder-' + props.color}>
   {props.children}
  </div>
 );
}
```

In this way, you can overlay the JSX on other components to deliver any child.

```jsx
function WelcomeDialog() {
 return (
  <FancyBorder color="blue">
   <h1 className="Dialog-title"> 
    Welcome
   </h1>
	 <p className="Dialog-message">
    Thank you for visiting our spacecraft!
   </p>
  </FancyBorder>
 );
}
```

Things in the `<FancyBorder>` of WelcomeDialog are passed to the children prop of the FancyBorder component. FancyBorder renders `{props.children}` in `<div>`, so the passed elements are finally output.

You can use `props` instead of `children`

```jsx
function SplitPane(props) {
 return (
  <div className="SplitPane-left">
   {props.left}
  </div>
  <div className="SplitPane-right">
   {props.right}
  </div>
 );
}

function App() {
 return (
  <SplitPane
   left={
    <Contacts />
   }
   right={
    <Contacts />
   }
  />
 )
}
```

## What is Prop?
> several key props (properties) that are essential for developing dynamic and interactive applications

Props is...

- Props(properties) is attributes that a parent component uses to pass values to child component   

* It has a one-way data flow because the parent component passes values to the child comonent

- Parent components can be modified, but child components can only be read.

There is an example

```jsx
function Parent() {
 return (
  <>
   <Children title="title" name="Jay" />
  </>
 )
}

function Children(props) {
 return (
  <div>
   <h1>{props.title}</h1>
   <h1>{props.name}</h1>
  </div>
 )
}
```

Props can be omitted by specifying each props name like this:

```jsx
function Children({title, name}) {
 return (
  <div>
   <h1>{title}</h1>
   <h1>{name}</h1>
  </div>
 )
}
```

> 💡 When handing Props, Props can be only variable values or functions.   

> ❗️ Functions that change the state cannot be delivered. In other words, if you want to deliver a function that changes the state, you must either put it in a function and deliver the function or deliver an arrow function in the form of () ⇒ {return}.

**<example - impossibility>**
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/204395e2-3024-408e-adee-d02993e13837)

**<example - Possibility>**
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f2c3bb1d-38c2-4c9f-9323-91738ac03388)

## Props' Data Type
Props' data type can use all JavaScript data types.

**String type of property**   
If property's data type is `string`, use double quotes ("") to represent the property value.
```jsx
<MyComponent stringProp="Hello">
```

**Other type of property**   
Other property's data type uses brace({}).
```jsx
<MyComponent boolProp={true}>
<MyComponent arrProp={['a', 'b', 'c']}>
<MyComponent objProp={{name: 'Hello', title: "Hello React"}}>
<MyComponent funcProp={() => {console.log('Hello React')}}>
```

---
- `https://ko.legacy.reactjs.org/docs/components-and-props.html`
- `https://ko.legacy.reactjs.org/docs/composition-vs-inheritance.html`
- `https://life-with-coding.tistory.com/509`
- `https://velog.io/@wgnator/Components-Composition`