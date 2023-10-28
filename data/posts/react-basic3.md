## what's useState?
> No matter how much you change the value on the code, it doesn't change on the screen. The reason is that the status of the value has not been changed. 

```js
let count = 0;

const handleChange = () => {
 count = count + 1;
}
```

Above code, `count` is plused if the handleChange is worked. However, on the screen, `count` doesn't be changed.   
If then, how can I change the state displayed on the screen? To change the state, you must use useState.

```jsx
const [count, setCount] = useState(0)

const handleChange = () => {
 setCount(prev => prev + 1);
}
```