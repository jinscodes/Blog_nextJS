Now, there are libraries, such as redux, recoid, jotai, zustand, react query and etc, that help to handle the state without `useState` or `useReducer`.

Simply, `useSyncExternalStore` traces the change that doesn't depend on the React through `useState` and `useEffect`, synchronizes and re-renders through setter of `useState`.

---

[](https://react.dev/reference/react/useSyncExternalStore)

[](https://junghyeonsu.com/posts/react-use-sync-external-store/)
