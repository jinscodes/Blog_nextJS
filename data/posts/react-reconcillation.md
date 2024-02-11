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

## Keys
To solve the inefficiency mentioned above, React supports key attribute.

If children have a key, React uses the key to match chlidren in the original tree with children in subsequent tree.

```html
// original
<ul>
	<li key="2015">Jay</li>
	<li key="2016">Rosie</li>
<ul>

// changed
<ul>
	<li key="2014">Duke</li>
	<li key="2015">Jay</li>
	<li key="2016">Rosie</li>
<ul>
```

Like the above code, the element that has the key "2014" is added, and the elements that have the key "2015" and "2016" are just needed to move.

In practice, it's not difficult to find the key. The element that is needed to be displayed may have an unique ID, so the key can just come from the data.

```html
<li key={item.id}>{item.name}</li>
```

### Exception
When that's not the case, we can add a new ID property to the model or hash some parts of the contetn to generate a key. The key only has to be unique among its siblings, not need to be globally unique. 

*As a last resort, index of the item in the array can be used for the key.*

If the items are not reordered, it works well. However, if the items are reordered, it works inefficiently.

If the array is rearranged during using the index as a key, errors relating to the state of components can happen. Component instance is updated and reused based on the key. If the key is an index, moving an item changes it. 

*🚨 As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.*

## Summary
React treats every elements, whether functional or class, as a separate component. A state may be present in a component. React refreshes its virtual DOM tree whenever making a change to the JSX file or whenever the state of any component changes. Although it would appear to be inefficient, updating the react virtual DOM doesn't need much time. Therefore, the cost is not substantial.

It analyses that React virtual DOM before and after the update to determine exactly what has changes.

**"Diffing"** is the process of contrasting the most recent virtual DOM tree with the oldest. React updates only those objects on the real DOM after it determines precisely what has changed. Updates to the real DOM are transmitted rather than a single update for every time a component's state changes. *React accomplishes this effectively by guranteeing that the real DOM receives batch changes to re-render the UI.* 

Re-rendering the user interface is the most expensive component of the process. 

💡 **Reconciliation refers to the full process of converting changes to the actual DOM.**

This dramatically boosts performance, which is the key factor in why developers from all over the world adore React and its virtual DOM.

Reconciliation, as mentioned above, is the process of synchronizing the VDOM with the actual DOM. React builds a tree starting at the root node for this to occur.

The true DOM, which has four nodes, is represented as a tree in the diagram below.

**Real DOM**

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b8091e03-6174-4e1b-90f7-7944e062d7c2)

*React compares the root components* in the react virtual DOM and actual DOM because the app's state changes using its diffing method. *It disassembles the affected nodes and remounts them* whenever it comes across root elements that have changed. 

The nodes that get remounted in this example are those that are highlighted in green in the tree representation below.

**Virtual DOM**

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/25a1ed19-f55a-4e7a-99ee-d689495e17df)

---
[](https://legacy.reactjs.org/docs/reconciliation.html)

[](https://programming119.tistory.com/240)

[](https://velog.io/@juno7803/React-Reconciliation-%EC%9E%AC%EC%A1%B0%EC%A0%95)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)