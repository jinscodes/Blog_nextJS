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

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ece26b5e-0802-412c-abe3-213754b42c2c)

Get data from the parent component and hand it over to the child component. The child component continues to do prop drilling with the data.

We can useContext in these situations.

#### 1️⃣ Make context.ts
First, create ts to create context.   
(You are free to name it)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9f92a26c-24ec-48e7-9c4e-adf44ebc1a74)

`CreateContext` can be used to create the context. `CreateContext` contains generic types and initial values.

The point here is that the initial value is going to be `undefined`, and the type should also be `undefined`.

This is because our data have a possibiity to be undefined.

#### 2️⃣ Set provider
Secondly, wrap the components with provider in parent component.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5fa8eb2c-6b62-48f4-ba9a-4aabb046fd6a)

Wrap DataContext with the provider where you want to drop the data.

Here, the poinst is that the value have to be needed. This value is the data you want to drop.

> 💡 **NOTE**   
> When creating the context, you can see why the undefined was designated as the initial value and type in this part.

> No value was assigned to the data until fetch done. That is, it is undefined. That is why undefined is assigned to the type of createContext.

#### Get value in children component
The first step is to import createContext to make react context.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a6c1bd48-d795-4a44-921d-9029c4eef3c2)

Go to children component and import the above code.

If you want to use specific data in the context, get the data with brackets like below.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/905400f1-8041-4eaa-b4b3-bf67ddb0f699)

## createContext's Initial Value
Above, `undefined` is the initial value of the `createContext()`.

Changing the inital value to 'hello'.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c418055-471d-4c49-a4a1-b2a01aec75bc)

Let's go into the parent component, remove the provider, and useContext to get the value of DataContext.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0ea07348-9171-450f-921f-c5afbf758c26)

Print it throught console.log and we can see "hello" is printed.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/90d445ac-236f-4451-b4bb-04384cc18d1b)

What happen?

If you have received the information from the useContext and the upper level did not wrap it in the context with a provider, that is, there is no value, so in this case, it will receive the initial value.

However, the above code uses the `value` to hand over the value, so we don't need the initial value, so we give it a value as undefined.

---
[](https://react.dev/reference/react/useContext)

[](https://www.youtube.com/watch?v=HYKDUF8X3qI)

[](https://medium.com/@msgold/using-usecontext-in-react-a-comprehensive-guide-8a9f5271f7a8)