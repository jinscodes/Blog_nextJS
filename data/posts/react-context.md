## Why Context?
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d42439e-9a4f-46b9-a87a-eeebe236c5f5)

- What if sharing the state value between two components
- What if parent component convey the `props` to children components ( Prop Drilling )
- Languages, Theme, Login and etc...

The above propblems can appear during using React because React consists of Components and Props. **CONTEXT** is designed to solve these kinds of problems. 

## Context
> Context is a method designed to share data that can be viewed as global within the React component tree.

```jsx
const App = () => {
  return (
    <Toolbar theme="dark" />;
	)
}

const Toolbar = (props) => {
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
	)
}

const ThemeButton = (props) => {
  return (
    <Button theme={props.theme} />
	)
}
```

The above code is to pass the `props` several times to decorate the button component. The more subcomponents there are, the more `props` must be handed over to subcomponents. However, if using `context`, there is no need to send the `props` to intermediate elements.

This below code is the example of using `context`:

```jsx
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
	);
}

// Don't need to send the data to intermediate components
const Toolbar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
	);
}

const ThemeButton = () => {
  const themeType = useContext();

  return (
    <Button theme={themeType} />
	);
}
```

## Considering Things Before Using Context

❗️ If using `context`, the components are hard to reuse it. So, it's not good to abuse `context` indiscriminately.

The primary use of context is to deliver data to many components nested at different levels. Component synthesis may be a simpler solution than context to replace props crossing across multiple levels.

### Component Composition

> Component composition may be a simpler solution than context to replace props crossing across multiple levels.

```jsx
<Page user={user} avatarSize={avatarSize} />
// under the Page component
  <PageLayout user={user} avatarSize={avatarSize} />
  // under the PageLayout
	  <NavigatorBar user={user} avatarSize={avatarSize} />
    // under the NavigatorBar
    <Link href={user.link}>
      <Avatar user={user} avatarSize={avatarSize} />
    <Link>
```

Like above code, only place where the `user` and `avatarSize` is used is `<Avatar>` component inside the `Link`, but to use the `user` and `avatarSize` in `<Avatar>` component, `props` must be added in every intermediate level.

At this point, we have two choices.   

1️⃣ Using **Context**   
2️⃣ Using **Component Composition**

In the case of the above code, the second option(Using Component Composition) is better than the first option(Using Context). If you hand over the Avatar component itself, you can resolve this without using context. Then the components in the middle don't have to know anything about `user` or `avatarSize`.

```jsx
const Page = (props) => {
  const user = props.user;
  const userLink = (
    <Link href={user.link}>  
      <Avatar user={user} avatarSize={avatarSize} />
    </Link>
	);
  return <PageLayout userLink={userLink}>
}

// Now
<Page user={user} avatarSize={avatarSize} />
// under 
  <PageLayout userLink={...} />
  // under
    <NavigatorBar  userLink={...} />
    // under
      {props.userLink}
```

If you change this way, only top `<Page>` component needs to know that `<Link>` and `<Avatar>` components use `user` and `avatarSize` props.

There are pros and cons of using **Component Composition**

**pros**
- The number of steps that need to be handed over is reduced
- Top components have greater control
- More often you can write neat codes

**cons**
- Moving complex logic to the top makes these top components more difficult
- Subcomponents need to be more flexible than necessary

---
- `https://ko.legacy.reactjs.org/docs/context.html`
- `https://ko.legacy.reactjs.org/docs/composition-vs-inheritance.html`