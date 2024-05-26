In the previous project, I didn't use state management library. I'd experienced problems related to state management. So, I felt that I need to know about state management libraries.

In this post, I'll introduce zustand.

## What is zustand?

Before zustand, there is Redux. Redux changed the game in the global management system. In any framework, it was adopted and used as the tool of ideal state management.

Zustand is a new kid on the block. It's another powerful tool to handle the global statement.

#### So, what is zustand?

Zustand is a state management library. It is compact, fast, and scalable. It is a fairly simple system with little boilerplate code. You can use it with less code than Redux and similar libraries for managing React states.

It doesn’t rely on a provider. As a result, you don’t have to code as much React logic, which may lessen the things we tend to forget. It works based on simplified flux principles and primarily makes use of hooks.

- It is faster than context. It gives you the option to choose a specific state.
- It does state merging by default. Consider updating a single property of an object state, {x:1, y:2}. You can directly set {y:3}. Zustand will merge the data for you. You don’t have to distribute the old state and update properties like {…state, y:3}.
- It is extendable by default. Thus, you can use a variety of middleware types.
- It is less opinionated. You don’t have to stick to one way of doing things. Even though there is a recommended approach, you are not required to adopt it.

---

[](https://refine.dev/blog/zustand-react-state/#introduction)

[](https://github.com/pmndrs/zustand)

[](https://medium.com/globant/react-state-management-b0c81e0cbbf3#:~:text=Zustand%20is%20a%20state%20management,libraries%20for%20managing%20React%20states.)
