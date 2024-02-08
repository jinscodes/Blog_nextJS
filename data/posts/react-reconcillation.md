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
<div>
	<Counter />
</div>

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
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

By comparing these two elements, React knows to only modify the `className` on the underlying DOM node.

Visualize the it:

```html
<div>
	<h3>H3<h3>
	<form></form>
	<span>before</span>
</div>

	-->

<div>
	<h3>H3<h3>
	<form></form>
	<span>before</span>
</div>
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c4aa5117-a19e-45d2-bf0b-72d2779e5108)



When updating style, React also knows to update only the properties that changed.

```html
<div style={{color: 'red', fontWeight: 'bold'}} />

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




---
[](https://legacy.reactjs.org/docs/reconciliation.html)

[](https://programming119.tistory.com/240)

[](https://velog.io/@juno7803/React-Reconciliation-%EC%9E%AC%EC%A1%B0%EC%A0%95)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)