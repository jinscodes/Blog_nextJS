## Intro...
I personally started a small project. It was a project where you could register the English words you want, memorize the English words you registered, and take a test.

Because I'm working front-end at work, I was able to set up early settings like React, scss, and typecrypt without difficulty. But the server was a bit unfamiliar to me.

However, since the connection between the client and the server is essential, the backend parts had to be solved by studying alone.

At first, I just configured the backend as a node and called db. However, the live node had a hard time configuring the backend more fully, and eventually decided to use express. 

This post is about initial settings for using express.

## Express
> Node.js Express is a lightweight and flexible web application framework for Node.js, facilitating the development of server-side applications through streamlined routing, middleware, and HTTP request/response handling.

### 1️⃣ Before the start...
1. **Check node -v**
	```bash
		$ node -v
	```

2. **Install TypeScript**
	```bash
		npm install -g typescript
	```

### 2️⃣ Creating Package.json
1. **Create folder wherever we want**
	```bash
		$ mkdir projectName_server
		$ cd projectName_server
	```

	or

	![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/16f94cf5-0a93-4888-92b1-90429baf9dac)

2. **Create package.json**
	```bash
		$ npm init
	```

	![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/451f0d11-3c75-4b75-95bc-bba72bee723a)

	- We don't need to set the **entry point**. But, if we want to set the specific **entry point**, put the **entry point**!

Result: 

![1-3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/48cd37b3-f48f-41b8-a7bb-82ede26dff5f)


### 3️⃣ Installing express.js
1. **Install express.js**
	```bash
		$ npm install express

		or 

		$ yarn add express
	```

2. **Checking the express.js in package.json**
	```json
		"dependencies": {
			"express": "4.18.2"
		}
	```

	![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f619b8e6-7fb5-4b4e-bd2c-01f776c62b14)

### 4️⃣ Installing typescript & type node
1. **Install typescript**
	```bash
		$ npm i -D typescript
	 ```

2. **Install ts-node & type ts-node**
	```bash
		$ npm i -D ts-node
		$ npm i -D @types/node
	```

3. **Install type express**
	```bash
		$ npm i -D @types/express
	```

4. **We can handle the above steps to one step**
	```bash
		$ npm i -D typescript ts-node @types/node @types/express
	```

Result:

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/31b535e4-ea90-4a2f-aa22-910770b31288)

### 5️⃣ TypeScript Config
1. **Create tsconfig.json**
	```bash
		$ npx tsc -- init
	```

	![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/73cced53-bc41-4591-8318-f2801b07ccff)

### 6️⃣ Installing nodemon
1. **Install nodemon**
	```bash
		$ npm i -D nodemon
	```

2. **Change the script in package.json**
	```json
		"scripts": {
		  "dev": "nodemon src/app.ts"
		}
	```

	![6-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e26d56bd-949b-461e-b405-3747b798375b)

3. **Create src folder & app.ts file**
	```bash
		# root dir ( projectName_server )
		$ mkdir src

		# src dir
		$ cd src
		$ touch app.ts
	```

	![6-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a995f23e-4504-44f8-87f9-1d0b50258de0)

	or

	![6-3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5cd3efa7-3ea8-4e5a-a664-47df5f8f7ec7)

### 7️⃣ Preparing for ther server start
1. **Write the code in app.ts**
	```ts
		// app.ts
		import express, { Application, Request, Response } from 'express';

		const app: Application = express();

		const port: number = 8080;

		app.get('/toto', (req: Request, res: Response) => {
				res.send('Hello toto');
		});

		app.listen(port, function () {
				console.log(`App is listening on port ${port} !`)
		});
	```

2. **Server start**
	```bash
		npm run dev
		yarn dev
	```

result: 

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2c2fc28c-6cc5-40b3-880c-aab6fb80fc3c)

> 💡 It's done!! We can start the server with express! Do Practice, Do Better