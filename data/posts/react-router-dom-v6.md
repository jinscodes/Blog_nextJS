## Intro...
As React-router-dom was updated to V6, there was a change in routing.

The change is larger than other updates, so I'm writing a post to organize it separately.

## <Routes> VS <Switch>
In v5, we could use `<Switch>` to wrap our routes but in v6 `<Switch>` is not exported from react-router-dom. 

Now we’ll have to use `<Routes>` to do the same thing instead of `<Switch>`.

`<Routes>` is similar to `<Switch>`, but it is much more powerful because it makes the code simpler and more predictable and can be nested in one place instead of distributing it across multiple components.

> 💡 **NOTE**   
> `<Routes>` is a required parent component that should be used for individual `<Route>` components, rather than replacing `<Switch>`. However, `<Routes>` at the same time is an advanced way to compare URLs and `<Route>`.

V5: 
 
![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fbd312d7-e6b5-43ba-81b9-fb2844a022bc)

V6:
 
![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7558310a-e58d-4d69-8b0b-00256a186d04)

## <Route element> VS <Route children>
The component that should be rendered on matching a route can not be written as children of the “Route component”, but it takes a prop called “element” where we have to pass a JSX component to be rendered. 

Another important reason for using the “element” prop in v6 is that <Route children> is reserved for nesting routes.

V5:

![2-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/953c89fb-00be-4ef6-8ff1-789d0c81ab21)

V6:

![2-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d2caa33d-eb80-425a-885f-819d042220b9)


## No Need To Install “react-router-config” Separately
React-router-config allowed the path to be defined as a JavaScript object instead of a React element, and all features have now moved to the core React Router v6.

V5: 

![3-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a64d29a3-a060-410a-9012-4474eaba816f)

V6:

![3-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ed57cd65-1d3b-4394-9c01-6d46bcd2b32d)


## Use “useNavigate” instead of “useHistory”
React Router v6 introduces a new navigation API that is synonymous with <Link> and provides better compatibility with suspense-enabled apps.

V5:

![4-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/54a496e2-2a78-4baa-a23f-0cea52582e3d)

v6 requires rewriting this app to use the navigation API. In most cases this means changing useHistory to useNavigate.

V6:

![4-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/268fc051-a7e8-4550-916f-db1a61287f7c)

## Replace “Redirect” with “Navigate”

## You don’t need the “exact” Prop anymore


---
[](https://imnirmaljoshi.medium.com/upgrade-from-react-router-v5-to-react-router-v6-166b8aa1f12e)

[](https://reactrouter.com/en/main)