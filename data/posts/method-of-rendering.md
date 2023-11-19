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
- Once loaded the page, UX can be provided quickly

	- Once loaded, when the rendering is needed, such as pressing the button, it requests datas in part, receives a partial response, and updates the page in part rather than rendering whole page.

- Low server load
	- Less burden on servers, partly because data is requested and responded to

### Disadvantages of CSR

- The page loading time(TTV) is long = It takes a long time to FCP


- The page loading time(TTV) is long = It takes a long time to FCP
	- TTV stands for "Time To View", which means the time it takes for users to view pages for the first time
	- FCP stands for "First Contentful Paint", which means the time to display the meaningful paint to the browser

- Javascript activation is necessary
	- If Javascript is unactivated, users cannot even see the first page
	- Web page doesn't work properly
	- It's hard to optimize SEO

- Weakness of security
	- Because it downloads all the code to the client and runs it on the client

- Not cached on the CDN
	- CDN is "Content Delivery Network"
	- It is difficult to cache HTML to CDN because HTML files are empty by default and clients need to download the source files from React or JS

### CSR Operation
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/95069698-5abb-460b-a4cf-6e45a528a273)

1️⃣ Send a request to the server at the time of the react execution and receive a response while the loading bar rotates to receive an empty HTML file   

2️⃣ Because there is only <div class="root"> in the HTML file received for the first time, an empty screen is shown

3️⃣ After receiving React sources and JS sources, screen released


---