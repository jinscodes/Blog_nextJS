## CSS Tools
There're CSS tools that many people use with React project.

- PostCSS
- Styled Component
- TailwindCSS
- Sass

## PostCSS
> PostCSS is a versatile tool for transforming CSS with JavaScript plugins, offering a wide range of functionality such as 
autoprefixing, nesting, and linting to enhance and streamline the development process.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ee3aae26-4b00-47a3-b404-139cc0d439fb)

### Why?
The reason for using postCSS is that when the class names overlap, only one css is applied to the components in which the class names overlap according to the order in which they are rendered. 

PostCSS can be used without setting up or downloading packages if the project was created using npm create-react-app.

### How to Use PostCSS
1️⃣ When creating the css file, the form of PostCss file is `filename.module.css`

```jsx
↳ src
  ↳ styles
    ↳ filename.module.css
```

2️⃣ Importing the PostCSS file in jsx or tsx file

```jsx
import styled from 'src/styles/filename.module.css';
```

3️⃣ Using it with brackets

```jsx
<div className={styled.button}>button</button>
```

In the above case, `button` becomes the name of the class.

## Style Component CSS
> A library that allows you to use css grammar within js or jsx files. In other words, it's a component that includes style.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d4662ba4-204e-4bb9-8742-e2364c5ec83a)

### why?
Styled components in React provide a convenient way to encapsulate styles within individual components, promoting better modularity and maintainability by combining CSS with the component logic. 

This approach also enables the use of dynamic styles, theming, and easier management of component-specific styles in a React application.

### How to Use Styled Component
1️⃣ Since the styled component is not stored separately, you must install npm separately

```jsx
npm i styled-component
```

2️⃣ Importing the tool in jsx or tsx file

```jsx
import styeld from `styled-components`
```

3️⃣ Create a tag (component) with style

```jsx
// example 1
import styled from 'styled-component';
const Container = styled.div`
  display: flex;
`;

// example 2
import styled, { css } from 'styled-component';
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;
```

## TailwindCSS
> A method of bringing and using the css format that has already been made. Tailwind has a separate grammar and needs to be studied. Instead, when you get used to it, it increases efficiency because you can apply it without having to make a style.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/becb6949-461f-4865-b141-01d03d1f3ebb)

### Why?
Tailwind CSS streamlines web development with a utility-first approach, enabling rapid prototyping and consistent design through pre-defined classes. 

Its flexibility and low learning curve make it accessible to developers, while responsive design features and small file sizes contribute to efficient and responsive applications.

### How to Use TailwindCSS
1️⃣ Install Tailwind

```jsx
npm install -D tailwindcss
npx tailwindcss init
```

2️⃣ Handle the path in `tailwind.config.js`

When we execute `npx tailwindcss init`, we can get `tailwind.config.js` file. In the `tailwindcss.config.js`, we must edit `content` part.

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3️⃣ Import necessary codes in style.css file

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To use tailwindCSS, we must add the above three codes into the top css file (maybe style.css or index.css).

## Comparision
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b5d6ef36-5de4-4514-94d3-9913ca462649)

---
- `https://postcss.org/`
- `https://styled-components.com/`
- `https://tailwindcss.com/`