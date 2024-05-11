To learn more about the context of React, please refer to the link below.

[](https://jay-h-blog.vercel.app/posts/ReactJs/react-context)

## What Is useContext?
`useContext` hook is one of the tool of React to handle the flow of the data or state in application.

Through this `useContext`, developers can share the datas easily across multiple components without prop drilling.

#### why useContext?
- Sharing Data Across Components
- Avoiding Prop Drilling

### Sharing Data Across Components
One of the main benefits of contextual use is the ability to share data across multiple components, which is particularly useful when dealing with data that must be accessed by multiple components at different levels of the component tree.

### Avoiding Prop Drilling
Prop drilling is the process of transferring data from one component to another through Prop. If data has to be passed through multiple levels of components, it can be cumbersome and difficult to manage. Context eliminates the need for prop drilling by providing a centralized way to share data.

## Usage
In React, the data flow is one-way: from chilren to parent component. It's inefficient to deliver the global data step by step with props. To solve this problem, React provides Context API.

Context allows subcomponents that need the data to access the upper component that has the data without having to pass it through to Props one by one. In other words, it is really convenient to deliver global data such as user information, themes, and language.

Subcomponents that require data from higher components only need to receive the data using a useContext hook.
useContext helps you easily obtain data classified by context.

> 💡 **NOTE**   
> Why does we usually use props instead of useContext?

> Use context only when it is absolutely necessary. Using context can make it difficult to reuse componenets. It's to deliver global data to many components with various levels, which is the main purpose of the context. If the reason for using context is only for prop drilling, React officially suggests that compoent composition is better solution than using context.

### Example

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b770d000-e92c-450e-985d-4f53c0b0b286)

Get data from the parent component and hand it over to the child component. The child component continues to do prop drilling with the data.

We can useContext in these situations.

#### 1️⃣ Make context.ts
First, create ts to create context.   
(You are free to name it)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9825c27e-a4ba-4c6f-b8fc-eccafeba6ffc)

`CreateContext` can be used to create the context. `CreateContext` contains generic types and initial values.

The point here is that the initial value is going to be `undefined`, and the type should also be `undefined`.

This is because our data have a possibiity to be undefined.

#### 2️⃣ Set provider
Secondly, wrap the components with provider in parent component.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/41391bd4-9a61-4054-a1d7-a3efdda1f886)

Wrap DataContext with the provider where you want to drop the data.

Here, the poinst is that the value have to be needed. This value is the data you want to drop.

> 💡 **NOTE**   
> When creating the context, you can see why the undefined was designated as the initial value and type in this part.

> No value was assigned to the data until fetch done. That is, it is undefined. That is why undefined is assigned to the type of createContext.

#### Get value in children component
The first step is to import createContext to make react context.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/62ed0473-1ce1-4788-8705-9c7413604956)

Go to children component and import the above code.

If you want to use specific data in the context, get the data with brackets like below.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a3334712-073a-4276-9818-3254d8e09d6c)

## createContext's Initial Value
Above, `undefined` is the initial value of the `createContext()`.

Changing the inital value to 'hello'.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4e0a119a-29ba-4fc5-98fe-213b4fc202f9)

---
[](https://react.dev/reference/react/useContext)

[](https://www.youtube.com/watch?v=HYKDUF8X3qI)

[](https://medium.com/@msgold/using-usecontext-in-react-a-comprehensive-guide-8a9f5271f7a8)