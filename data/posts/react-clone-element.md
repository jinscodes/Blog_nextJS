## Intro

Few years ago, I've seen the `cloneElement` function in the code that I was given by co-worker when I enter the company at the first time.

The purpose of `cloneElement` is to create a new React element using another elements as a starting point. Usually, it's used for overriding props of the element.

To override the props, pass it to cloneElement with the props that we want to override. For example,

```jsx
import { cloneElement } from "react";

const clonedElement = cloneElement(<Rectangle title="" />, { height: "10px" });
```

### Usage

In the most case, we don't use cloneElement, but sometimes it's useful.

Here is the example code.

```jsx
const clonedElement = cloneElement(<Row title="Cabbage" />, {
  isHighlighted: true,
});
```

About _List_ component that renders its children as a list of selectable rows with a "Next" button that changes which row is selected. . The List component needs to render the selected Row differently.

So, it clones every `<Row>` child that it has received, and `isHighlighted` prop.

As a result, we can see the code looks like the below:

```jsx
export default function List({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="List">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isHighlighted: index === selectedIndex
        })
      )}
	)
}
```

## Alternatives

##### Passing data with a render prop

---

[](https://react.dev/reference/react/cloneElement)

[](https://react.dev/reference/react/cloneElement#alternatives)

[](https://velog.io/@qkrcksdnr98/React-cloneElement)
