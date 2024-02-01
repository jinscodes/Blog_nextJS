## Intro...
As you develop, you will inevitably see a lot of things related to DOM. You can write the code even if you don't know what DOM is, but you can't fully understand how and how it works.

Therefore, it is very important to know about DOM.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6d873505-a95f-4cce-9c49-e4da76ee19e8)

This post is about dom.

## Types Of Browser DOM
After loading the HTML document, the browser generates a model for the document in memory.

At this time, the model consists of a tree of objects, which is called a DOM tree.

#### Document Node
It exists at the top of the tree and must be through the document node to access elements and text nodes, respectively.

That is, it is an entry point for accessing the DOM tree.

#### Element Node
An element node represents an HTML element.

To access attributes and text nodes, we must first find and access element nodes. All element nodes consist of objects that inherit HTMLElement objects to express the characteristics of each element.

```javascript
document.getElementById(id) // Select one element node with id attribute value
```

#### Attribute Node
The attribute node represents an attribute of an HTML element.

The attribute node is represented as part of the element, not as a child of the specified element.
Therefore, by finding and accessing the corresponding element node, you can refer to and modify the attribute.

```javascript
document.querySelector('h1').id = 'heading'; // Change the value of the id attribute
```

#### Text Node
The text node represents the text of the HTML element.

Text nodes are children of element nodes and cannot have their own child nodes.

That is, the text node is the final lower end of the DOM tree.

The text of the element is stored on a text node. A procedure is required to access the text node.

> 💡 <>~</> A pair of brackets is one node object.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e0f1494b-044f-42c0-ab1b-463bbe561154)


---
[](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-DOM-%EB%AC%B8%EB%B2%95-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC)