I knew that there are four method of rendering while preparing for my blog project using NextJs. Nextjs is a framework that allows React to perform server side rendering.

But, Nextjs is not only using SSR but also CSR, SSG, and ISR.

> 💡 CSR 🆚 SSG, ISR, SSR: Classification according to the subject being rendered

> 💡 SSG 🆚 ISR 🆚 SSR: Classification according to when to render

## CSR ( Client Side Rendering )
> It refers to a rendering method in which the subject who renders is a client(browser).

### How CSR works: principle
1. Client sends a request to the server
	1. At this time, the browser will turn the loading bar while waiting for the request

2. The server that received the request hands over the HTML file
	1. HTML files received from the server are empty
	2. Containing only basic <head> or <description>
	3. <Body> is empty
	4. ⇒ The first screen that the client sees after receiving the file is an empty screen

3. Download the source files
	1. Firstly, downloading the React source file
	2. And then, downloading the developer's source codes like components
	3. ⇒ Once all source codes are downloaded, the client is ready to be shown

4. Load the React source codes and run React

5. Link the components of index to `<div class="root">` on the HTML page
	1. Converting components to DOM elements
	2. Painting the converted DOM elements to the browser

### Advantages of CSR
- **Once loaded the page, UX can be provided quickly**
	- Once loaded, when the rendering is needed, such as pressing the button, it requests datas in part, receives a partial response, and updates the page in part rather than rendering whole page.
- **Low server load**
	- Less burden on servers, partly because data is requested and responded to

### Disadvantages of CSR
- **The page loading time(TTV) is long = It takes a long time to FCP**
	- TTV stands for "Time To View", which means the time it takes for users to view pages for the first time
	- FCP stands for "First Contentful Paint", which means the time to display the meaningful paint to the browser
- **Javascript activation is necessary**
	- If Javascript is unactivated, users cannot even see the first page
	- Web page doesn't work properly
	- It's hard to optimize SEO
- **Weakness of security**
	- Because it downloads all the code to the client and runs it on the client
- **Not cached on the CDN**
	- CDN is "Content Delivery Network"
	- It is difficult to cache HTML to CDN because HTML files are empty by default and clients need to download the source files from React or JS

### CSR Operation
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/95069698-5abb-460b-a4cf-6e45a528a273)

1️⃣ Send a request to the server at the time of the react execution and receive a response while the loading bar rotates to receive an empty HTML file   

2️⃣ Because there is only <div class="root"> in the HTML file received for the first time, an empty screen is shown

3️⃣ After receiving React sources and JS sources, screen released

## SSG: Static Site Generation
> A word that refers to the way in which the subject of rendering is a server and is rendered when building a file

### ### How SSG works: principle
1. Build a file before running and distributin

2. During building, codes are rendered and converted
	1. Execute codes first on the server
	2. Convert React-written codes to HTML
		1. Reading the DB from the server or reading the cloud DB to make the page is executed during the file build.
		2. On the server, it runs the needed codes and makes the tags to show on the browser, which means that HTML is already created when building the actual HTML file
		3. ⇒ In other words, creating a static, non-dynamic site

3. When the build is done, completed page is saved on the server

4. If the client requests the page, loading bar is shown

5. The server responds the file that is already made on the server

6. The client just show the page on the browser

7. Once the page responds, even if the user re-enters the page, the client(user) can import the cached HTML file from CDN without requesting the same request from the server

### Advantages of SSG
- **The Page loading time is short**
	- Because it brings HTML file that is already created on the server and doesn't download other JS files, TTV is quick
- **No needed JavaScript**
	- This is becuase there is the completed page on the server
- **It's good for optimizing SEO**
	- The completed page is optimized for web exposure as it goes up on the server
- **Security outstanding**
- **Cached to CDN**

### Disadvantages of SSG
- **Data is static**
	- It simply prints pages that have already been created on screen, so you can't dynamically receive and insert data
- **Difficulty in providing user-specific information**
	- Unable to dynamically import data, making it difficult to provide user-specific information

---