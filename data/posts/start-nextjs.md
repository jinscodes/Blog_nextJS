## Intro...
In Company, I've never used NextJS because the company used only ReactJS + TailwindCSS. So, I wanted to learn another frameworks and style tools. 

For using other framework and tool, I decided to use NestJS and SCSS for my blog project.

This post is about the initial setting of the NextJS. 

If you want to see more about my blog project, **VISIT TO BELOW LINK**

[Jay's blog](https://github.com/jinscodes/Blog_nextJS)

## About NextJS
To build a complete web application with React from scratch, there are many important details you need to consider:

- Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
- You need to do production optimizations such as code splitting.
- You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
- You might have to write some server-side code to connect your React app to your data store.

A framework can solve these problems. **Next.js** provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.

### Features
**Next.js** aims to have best-in-class developer experience and many built-in features, such as:

- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
- Automatic code splitting for faster page loads
- Client-side routing with optimized prefetching
- Built-in CSS and Sass support, and support for any CSS-in-JS library
- Development environment with Fast Refresh support
- API routes to build API endpoints with Serverless Functions
- Fully extendable

## Setup
To start NextJS, we need Node.js.

We can check the node and node version.

```bash
	$ node -v
```

![node version](https://github.com/jinscodes/Blog_nextJS/assets/87598134/78d6f96a-e24d-4566-8d5e-be6187e212f4)

If you don't have any node, you can install it from here: 

[here](https://nodejs.org/en/)

## Create a NextJS Project
To create NextJS project,

firstly, we need to go to the directory where we'd like to create the file.

```bash
	# Move to desktop folder
	$ cd desktop

	or 

	$ cd directoryYouWant
```

After this, run the following command:

```bash
	$ npx create-next-app@lastest

	or 

	$ yarn create next-app
```

For using typescript, just add `--typescript` end of the command

```bash
	$ npx create-next-app@latest --typescript

	or 

	$ yarn create next-app --typescript
```

💡 But, we don't need to create the project with `--typescript`.

💡 This is because even if we just create the project with `npx create-next-app@latest`, we can set serveral things including typescript.

![create-next](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8fbd36b4-bea6-47cd-8973-0cfde1d3a0d0)

### Setting
1. Typescript
	1. If we want to apply a typescript to our project, select *yes*
2. ESLint
	1. If we want to apply a ESLint, select *yes*
3. Tailwind CSS
	1. If we want to apply a TailwindCSS, select *yes*
	2. Tailwind CSS is the tool relating to the CSS.
	3. It can make the CSS creation convenient.
4. `src/` directory
	1. If we want to apply a `src/`, select *yes*
	2. `src` is needed for the project anyway.
5. App Router
	1. If we want to apply a App Router, select *yes*

## Run the server
Now, we have a NextJS project directory. 

Move to the directory we made and then start the server.

```bash
	# Move to the directory
	$ cd folder-name
```

```bash
	# Start the server
	$ npm run dev
```


💡 If you cannot turn the server on, you need node version up to 18.17.0

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/830fc01e-86c6-4f42-8092-d0e262618ac3)


![npmrundev](https://github.com/jinscodes/Blog_nextJS/assets/87598134/960c66cd-212a-481b-8c78-7bf5987b7395)

**WE TURN THE SERVER ON!!**

## Final Result
![initial](https://github.com/jinscodes/Blog_nextJS/assets/87598134/492794c8-2c5d-44c4-a5d0-af71fce22a40)

---
[](https://nextjs.org/docs/getting-started/installation)

[](https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup)

[](https://velog.io/@scroll0908/Node.js-%EC%84%A4%EC%B9%98Mac)