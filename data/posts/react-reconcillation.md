## Intro...
As I approached the DOM of the browser with React, I first learned the concept of reconciliation.

Based on the React official document related to the concept of reconiliation, `render()` makes React element tree. And then, whenever state and prop are changed, `render()` return the new(different) React element tree.

There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is rediculous, so instead of this, React implements a heuristic O(n) algorithm based on two assumptions:

1. **Two elements of different types will produce *different trees*.**
2. **The developer can hint at which child elements may be stable across different renders with a *key* prop.**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cade6415-606b-4069-b5e0-134855bd2b08)

## Diffing Algorithm
When comparing the two trees(diffing two trees), React firstly compares the two **root** elements. After comparing the root elements, next step depends on the root element type.

### Elements Of Different Types
If the type of the root elements is different, React abandons the old tree and builds a whole new tree.   
For example, `<a>` -> `<img>` | `<Article>` -> `<Comment>` | `<Button>` -> `<div>`

When the tree is teared down, previous DOM nodes are destroyed. And then, component instances receive componentWillUnmount(). 

When building a new tree, new DOM nodes are inserted into the DOM. Component instance receives UNSAFE_componentWillMount() and then componentDidMount(). 

**Any state associated with the old tree is lost.**

Every components under the root element are unmounted, and the state is gone too. For example,

```html
// original code
<div>
	<Counter />
</div>

// changed code
<span>
	<Counter />
</span>
```

This will destroy the old Counter and remount a new one.

> 🚨 **NOTE**:   
> This method is considered legacy and should be avoided to use it in new code

> - UNSAFE_componentWillMount()

### DOM Elements Of The Same Type
When comparing two React DOM elements of same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.

Here is the Example: 

```html
// original
<div className="before" title="stuff" />


// changed
<div className="after" title="stuff" />
```

By comparing these two elements, React knows to only modify the `className` on the underlying DOM node.

Visualize the it:

```html
// original
<div>
	<h3>H3<h3>
	<form></form>
	<span>before</span>
</div>

// changed
<div>
	<h3>H3<h3>
	<form></form>
	<span>before</span>
</div>
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c4aa5117-a19e-45d2-bf0b-72d2779e5108)

React builds the new DOM tree with changed node whenevere there is a change. 

🚨 Remind: Virtual DOM is just object to present the UI. It means that there's nothing on the screen. 

React builds a new virtual DOM tree and then uses a diffing mechanism to compare it to the previous snapshot to determine what modifications are required. **Reconciliation** is the name given to this procedure. 

React employs a renderer library like ReactDOM after the reconciliation process, which uses the updated app information to update the rendered app. This module guarantees that the changed node or nodes are the only ones sent to and painted by the actual DOM

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/42eeadc8-6989-480d-8e85-82266620fa20)

Only the node whose data changes gets repainted in the actual DOM, as can be seen in the image above.

When updating style, React also knows to update only the properties that changed.

```html
// original
<div style={{color: 'red', fontWeight: 'bold'}} />

// changed
<div style={{color: 'green', fontWeight: 'bold'}} />
```

When converting bewteen these two elements, React knows to only modify `color` style not the `fontWeight`.

After processing the DOM node, React recurses on the children.

### Component Elements Of The Same Type
When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls UNSAFE_componentWillReceiveProps(), UNSAFE_componentWillUpdate() and componentDidUpdate() on the underlying instance.

Next, the render() method is called and the diff algorithm recurses on the previous result and the new result.

> 🚨 **NOTE**
> These methods are considered legacy and you should avoid them in new code

> - UNSAFE_componentWillUpdate()

>	- UNSAFE_componentWillReceiveProps()

## Recursing On Children
By default, when recursing the children of the DOM node, React just iterates over both lists of children at the same time. After that, whenever there's a difference, React generates a mutation. 

For example, when adding an element at the end of the children, converting between these two trees works well

```html
// original
<ul>
	<li>first</li>
	<li>second</li>
</ul>

// changed
<ul>
	<li>first</li>
	<li>second</li>
	<li>third</li>
</ul>
```

React wil match the two `<li>first</li>`, match the two `<li>second</li>`, and then insert the `<li>third</li>`.

However, if adding an element at the beginning of the children, performance is not good. 

```html
// original
<ul>
	<li>Jay</li>
	<li>Rosie</li>
<ul>

// changed
<ul>
	<li>Duke</li>
	<li>Jay</li>
	<li>Rosie</li>
<ul>
```

In the case of the above code, React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem.

---
[](https://legacy.reactjs.org/docs/reconciliation.html)

[](https://programming119.tistory.com/240)

[](https://velog.io/@juno7803/React-Reconciliation-%EC%9E%AC%EC%A1%B0%EC%A0%95)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)