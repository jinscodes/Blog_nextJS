I knew that there are four method of rendering while preparing for my blog project using NextJs. Nextjs is a framework that allows React to perform server side rendering.

But, Nextjs is not only using SSR but also CSR, SSG, and ISR.

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


---