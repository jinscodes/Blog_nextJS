## Intro

Few years ago, I've seen the `cloneElement` in the code that I was given by co-worker when I enter the company at the first time.

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

This above code looks like this if it's original JSX:

```jsx
<List>
  <Row title="Cabbage" />
  <Row title="Garlic" />
  <Row title="Apple" />
</List>
```

By cloning its children, the `List` can pass extra information to every `Row` inside. The result is:

```jsx
<List>
  <Row title="Cabbage" isHighlighted={true} />
  <Row title="Garlic" isHighlighted={false} />
  <Row title="Apple" isHighlighted={false} />
</List>
```

## Alternatives

However now, `cloneElement` is uncommon and can lead to fragile code.

The reason is that cloning children makes it hard to tell how the data flows through the app. For this reason, alterantives are arise.

##### Passing data with a render prop

We can consider accepting a render prop instead of using `cloneElement`.

Like the below example, `List` receives `renderItem` as a prop.

`List` calls `renderItem` for every item and passes `isHighlighted` as an argument:

```jsx
export default function List({ items, rednerItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;
        return renderItem(item, isHighlighted);
      })}
    </div>
  );
}
```

Because `renderItem` prop is the things that specify how to render something, it's called **rendering prop**. So, we can pass a `renderItem` that renders `<Row>` through received `isHighlighted` value.

```jsx
<List
  items={products}
  renderItem={(product, isHighlighted) => (
    <Row key={product.id} title={product.title} isHighlighted={isHighlighted} />
  )}
/>
```

It's the same as the below code:

```jsx
<List>
  <Row title="Cabbage" isHighlighted={true} />
  <Row title="Garlic" isHighlighted={false} />
  <Row title="Apple" isHighlighted={false} />
</List>
```

Unlike the `cloneElement`, we can clearly trace the source of the isHighlighted value. That's the main reason we use "passing data with render prop" instead of `cloneElement`.

##### Passing data through context

In addition to render prop, there is also a method using context.

As an example, we can call `createContext` to define a HighlightContext:

```jsx
export const HighlightContext = createContext(false);
```

In `<List />` component, it can wrap every item it renders into a HighlightContext provider.

```jsx
export default function List({ items, renderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="List">
      {items.map((item, index) => {
        const isHighlighted = index === selectedIndex;

        return (
          <HighlightContext.Provider key={item.id} value={isHighlighted}>
            {renderItem(item)}
          </HighlightContext.Provider>
        );
      })}
    </div>
  );
}
```

If we use this method, we don't need to pass the data through props. Instead of passing the data with props, just read context.

In `<Row />` component, it reads context with a hook named useContext.

```jsx
export default function Row({ title }) {
  const isHighlighted = useContext(HighlightContext);
  // ...
}
```

So, we don't need to consider whether to deliver `isHighlighted` or not. It might look like the below:

```jsx
<List
  items={products}
  renderItem={(product) => <Row title={product.title} />}
/>
```

---

[](https://react.dev/reference/react/cloneElement)

[](https://react.dev/reference/react/cloneElement#alternatives)

[](https://velog.io/@qkrcksdnr98/React-cloneElement)
