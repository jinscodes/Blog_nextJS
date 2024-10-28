## Introduction

According to the document of webpack, it said that "a variety of interfaces are available to customzie the compilation process. Some features overlap bewteen interfaces, while others exist only through a single interface".

> Necessity is the mother of invention.

To understand the necessity of the webpack, we need to know the background when the JavaScript is in old timey ages when a website was just a small bundle of good old html, css and probably one or a few JavaScript files.

##### The problems

Dev community tried to improve the overall user and developer experience around using and building JavaScript/web applications. As a result, we can see a lot of new libraries and frameworks. A few design patterns are getting better and more powerful but simple way of writing complex JavaScript. It means that the websites were no more just a small package with an odd number of files in them. Also, they stated getting bulky with modules. In the end, all this led to a situation where there were four or five times more files in the entire application package.

Not only was the overall size of the application a challenge, but also a huge gap between the code that developers write and the code that the browsers could understand is created. So, developers need helpers called polyfills to make sure that the browsers were able to interpret the code.

To solve these issues, webpack is created. Webpack is a static module bundler.

> Webpack = Module bundling  
> Module bundler is a method of making multiple files into one JavaScript file.

##### Why webpack is the answer

The webpack goes through the package and creates dependency graph which consists of various modules. Then, depending on this graph, it creates new package which consists of the minimum number of files required, often just a single bundle.js file which can be plugged in to the html file easily and used for the application.

## Installation Phase

##### npm init

Make sure you have the latest nodeJS and the npm version installed locally on the computer. Firstly, do the `npm init`

```bash
$ npm init
```

This wil create packages and add a _package.json_ file. All dependencies are placed in this _package.json_ to build the application.

After this, create a simple React application. To create React application, two things are needed: React and ReactDOM.

```bash
$ npm i react react-dom --save
```

Next step is to add webpack and bundle the application. Also, we require hot reloading to use webpack dev server. And, if you use webpack v4 or later, you must install CLI.

```bash
$ npm i webpack webpack-dev-server webpack-cli --save--dev
```

Since we are working with React, we never forget that React uses ES6 classes and import statement. The browsers may not be able to understand something about React. So, to make sure the code is readable by all browsers, we need to use a tool like babel to transpile the code to normal readable code.

To transpile the code, in fact, we need to install the babel.

```bash
$ npm i babel-core babel-loader @babel/preset-react @babel/preset-env html-webpack-plugin --save-dev
```

In the case of babel, we have loaded the core babel library first, then the loader, and finally 2 plugins or presets to work specifically with React and all the new ES2015 and ES6 onwards code.

## The Config Code

After installing the webpack and babel, we can add _webpack.config.js_ in the root of the application structure. The code of _webpack.config.js_ is like below.

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //This property defines where the application starts
  entry: "./src/index.js",

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

`const path = require("path");` is about the requiring the default path module to access the file location and make changes to the file location.

`const HtmlWebpackPlugin = require("html-webpack-plugin");` is to generate an HTML file to be used for serving bundled JS files.

Through `module.exports = {...}`, we can export the object with some properties in them.

## The React Code

Because the entry point for the application is the _index.js_, the application will be started within _index.js_.

In _index.js_, it requires both React and ReactDOM. So, it looks like the below.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

ReactDOM.render(<App />, document.getElementById("app"));
```

It renders the component by importing the component named _<App />_.

Inside the _<App />_ component,

```jsx
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Webpack + React setup</h1>
      </div>
    );
  }
}

export default App;
```

Lastly, we need to add script values in the package.json to run this applicaion on the browser. There are two things to change.

```json
"start": "webpack-dev-server --mode development --open --hot",
"build": "webpack --mode production"
```

The settings done! Now, we can run `npm start`.

---

[](https://webpack.js.org/api/)

[](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)

[](https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80)
