## Intro...
As a FE developer, whenever communicating with the server, I got status codes.

Usually, I got 200 or 201 status code, but if there was an error in my side, I would get 404 status code. 

Like this, whenever a server and a client are interlocked with each other, they use a status code to make sure they receive requests and responses from each other properly.

While working on it a while ago, I came across a status code called 304. It was an unfamiliar code. With this as an opportunity, I thought I should write a summary of the status code.

This post is a summary of status codes.

## Status Code
HTTP status codes are three-digit numbers that indicate the outcome of the response to an HTTP request sent by a client to a server. Each status code carries a specific meaning, revealing what happened in the communication between the client and the server. Status codes are included in the HTTP header and play a crucial role in the communication between web browsers, web servers, and other web applications.

The status codes consist of three digits, and they can be categorized into the following main groups:

1. **1xx (Informational):** The request was received, continuing process, or the client needs to be informed about the progress.

2. **2xx (Success):** The request was successfully processed.

   - **200 OK:** The request was successfully completed.
   - **201 Created:** The request was successfully completed, and a new resource was created.

3. **3xx (Redirection):** Further action needs to be taken to complete the request.

   - **301 Moved Permanently:** The resource has been permanently moved to a new location.
   - **302 Found (or Moved Temporarily):** The resource has been temporarily moved to another location.

4. **4xx (Client Error):** The client's request contains errors.

   - **400 Bad Request:** The request is malformed or invalid.
   - **404 Not Found:** The requested resource could not be found.

5. **5xx (Server Error):** The server failed to fulfill a valid request.

   - **500 Internal Server Error:** An error occurred on the server while processing the request.
   - **503 Service Unavailable:** The server is currently unavailable and cannot handle the request.

These status codes are useful for troubleshooting and debugging in HTTP communication. Developers use them to understand the communication status between the client and server and take appropriate actions based on these codes.

## 1XX: Information Responses
If the status code starts with '1', the server has received a request, and the client connected to the server means to continue. This code is not supported by HTTP 1.0.

- **100 Continue**   
	- **This is a response code that means it is in progress. It tells you that there is no problem with your progress so far, and that you can ignore it if the client continues to make a request or has already completed a request.**
- **101 Switching Protocol**   
	- **101 is sent in response to the upgrade request header sent by the client.**
	- **This response code enters a response to the upgrade request header sent by the client and informs the server that the protocol will be changed. This code will be used during the Websocket protocol transition.**
- **102 Processing(WebDAV)**
	- **This response code indicates that the server has received a request and is processing it, but it is not yet able to tell you the correct response.**

## 2XX : Successful Responses
HTTP status codes starting with "2" indicate successful responses. For example, the most common status code, 200 OK, signifies a successful request, while others like 201 Created or 204 No Content convey successful operations.

- **200 Ok**
	- **The request has been successful. The information is returned in response to the request.**
- **201 Created**
	- **The request was successful and a new resource was created as a result. This response typically follows a POST request or some PUT requests.**
- **202 Accepted**
	- **The request has been received, but cannot be acted upon. This response does not explicitly state the result of processing the request asynchronous responses later to HTTP. This is made for processing or when the server is handling the request in another process or is in the batch process.**
- **203 Non-Authoritative Information**
	- **This response code means that the set of meta information returned does not match that of the origin server, but is gathered from local or third-party copies. Under these conditions, the 200 OK response, not this response, must be prioritized.**
- **204 No Content**
	- **There is no content to send for the request, but the header can be meaningful. The user-agent can update the header from which the resource is cached to a new one.**
- **205 Reset Content**
	- **This response code notifies the user agent to reset the document view that sent this request after the request has been completed.**
- **206 Partial Content**
	- **This response code is used because the client sent a range header to split down multiple streams. If the client attempts to take over, the web server will start sending the data in the range header with the response code '206 Partial Content'.**
- **207 Mulit-Status**
	- **A multi-state response delivers information that is appropriate in situations where multiple resources are state codes, which are used for Web Distributed Authoring and Vesioning (WebDAV).**
- **208 Already Reported**
	- **Property (a combination of property and status) is used to avoid repeated enumeration of multiple internal members bound to the same collection as a response property. This code is used for Web Distributed Authoring and Vesioning (WebDAV).**
- 226 IM Used (HTTP Delta Encoding)
	- **The server has fulfilled its resource obligations for GET requests, and the response indicates that one or more instance operations have been applied to the current instance.**

## 3XX: Redirection Messages
HTTP status codes starting with "3" indicate redirection. These codes, such as 301 Moved Permanently or 302 Found, inform the client that further action needs to be taken to complete the request, often involving a different resource or URL.

- **300 Multiple Choice**
	- **You can respond to one or more requests. The user agent or user must choose one of them. There is no standardized way to choose one of the responses.**
- **301 Moved Permanently**
	- **This response code means that the URI of the requested resource has changed. A new URI may be given in the response.**
- **302 Found**
	- **This response code means that the URI of the requested resource has been temporarily changed. The newly changed URI may be created later. Therefore, the client must also make future requests with the same URI.**
- **303 See Other**
	- **The response that the server sends directly to the client when the resources requested by the client need to be obtained through GET requests from other URIs.**
- **304 Not Modified**
	- **It is used for cache purposes. It informs the client that the response has not been modified, so the client can continue to use a cached version of the response.**
- **305 Use Proxy**
	- **Defined in an earlier version of the HTTP technical specification, it tells you that the requested response must be accessed through a proxy. This is disappearing due to security concerns about the in-band settings of proxies.**
- **306 Unused**
	- **This response code is no longer in use and is currently reserved for future use. It was used in versions prior to the HTTP 1.1 technical specification.**
- **307 Temporary Redirect**
	- **The server sends this response directly to the client when the resource requested by the client is in a different URI and needs to be requested using the same method as the previous request. This is the same as the 302 Found HTTP response code, except that the user agent must not change the HTTP method used. If POST was used in the first request, the second request must also use POST.**
- **308 Permanent Redirect**
	- **This means that the resource is now located in a permanently different URI specified in Location: in the HTTP response header. This is the same as the 301 Moving Permanently HTTP response code, except that the user agent must not change the HTTP method. If POST was used in the first request, the second request must also use POST.**

## 4XX: Client Error Response
HTTP status codes starting with "4" indicate client errors. These codes, such as 400 Bad Request or 404 Not Found, signify that the client's request contains errors or cannot be fulfilled by the server due to the client's actions.

- **400 Bad Request**
	- **This response means that due to incorrect grammar, the server requested and cannot be understood.**
- **401 Unauthorized**
	- **Although the HTTP standard clarifies "unauthorized," this response means "unauthenticated." Clients must authenticate themselves in order to receive the requested response.**
- **402 Payment Required**
	- **This response code has been reserved in case it will be used later. The first goal was to use it in a digital payment system, but it is not being used now.**
- **403 Forbidden**
	- **Clients do not have access to content. For example, they are unauthorized, so the server sends an appropriate response for rejection. The difference from 401 is that the server knows who the client is.**
- **404 Not Found**
	- **The server cannot find the requested resource. It means an unknown URL in the browser. This could mean that the endpoint in the API is appropriate, but the resource itself does not exist. Servers can also send this response instead of 403 to hide the resource from unauthenticated clients. This response code may be most famous because it occurs repeatedly on the web.**
- **405 Method Not Allowed**
	- **The requested method is known by the server, but it has been removed and cannot be used. For example, you can prohibit deleting a resource from any API. The essential methods GET and HEAD cannot be removed, and this error code cannot be returned.**
- **406 Not Acceptable**
	- **This response is sent by the web server after the server negotiates server-led content and does not find any content based on the specifications set by the user agent.**
- **407 Proxy Authentication Required**
	- **This is similar to 401, but requires authentication completed by proxy.**
- **408 Request Timeout**
	- **This response is sent by some servers to a connection that has been out of date with the request, sometimes even if there was no previous request from the client. This means that the server wants to disconnect from a unused connection. This response is frequently seen in certain browsers, such as Chrome, Firefox 27+, or IE 9 that use the HTTP preconnect mechanism to speed up web surfing. Some servers also disconnect without sending this message.**
- **409 Conflict**
	- **This response is sent when the request conflicts with the current state of the server.**
- **410 Gone**
	- **This response is sent when the requested content is permanently deleted from the server, and there is no address that can be delivered. Expect clients to clear links to their cache and resources. HTTP technical specifications expect this status code to be used for 'temporary, promotional services'. The API should not force known resources to be deleted with this status code.**
- **411 Length Required**
	- **The server rejects the request because the server receives a request with an undefined Content-Length header field.**
- **412 Precondition Failed**
	- **The prerequisites in the client's header are not appropriate for the server's prerequisites.**
- **413 Payload Too Large**
	- **The request entity is greater than the limit defined by the server. The server will disconnect or return to the Retry-After header field.**
- **414 URI Too Long**
	- **The URI requested by the client is longer than the length the server decided not to process.**
- **415 Unsupported Media Type**
	- **The requested media format is not supported by the server. The server will reject that request.**
- **416 Requested Range Not Satisfiable**
	- **The Range header field cannot satisfy the requested range, the range may be out of size of the target URI data.**
- **417 Expectation Failed**
	- **This response code indicates that the expectation requested by the Expect request header field is not appropriate for the server.**
- **418 I'm a teapot ☕️**
	- **The server refuses to boil coffee in a teapot.**
- **421 Misdirected Request**
	- **A request directed to the server cannot generate a response, which is sent when the server is unable to generate a response by configuring a scheme and permissions associated with the request URI.**
- **422 Unprocessable Entity (WebDAV)**
	- **The request is well made, but it cannot be followed due to a grammar error.**
- **423 Locked (WebDAV)**
	- **The resource is locked out of access.**
- **424 Failed Dependency (WebDAV)**
	- **The current request also failed because the previous request failed.**
- **426 Upgrade Required**
	- **The server declined to process the request using the current protocol, but it may do so if the client upgrades to another protocol. The server sends the upgrade header to the 426 response to inform it of the protocol it needs.**
- **428 Precondition Required**
	- **The origin server must have a conditional request, which is intended to prevent "lost updates," a conflict that occurs when a third party modifies the state of the server while the client gets resources, modifies them, and returns them to the server as a PUT.**
- **429 Too Many Requests**
	- **The user has sent too many requests at the specified time ("rate limiting").**
- **431 Request Header Fields Too Large**
	- **The server will not process the request because the requested header field is too large. The request must be re-sent after being downsized.**
- **451 Unavailable For Legal Reasons**
	- **What you have requested is illegal resources such as web pages censored by the government.**

## 5XX : Server Error Responses
HTTP status codes starting with "5" indicate server errors. These codes, such as 500 Internal Server Error or 503 Service Unavailable, signify that the server encountered an error or is temporarily unable to handle the request, impacting the successful fulfillment of the client's request.

- **500 Internal Server Error**
	- **This means that the website server has a problem, but the server cannot be more specific about the exact problem.**
- **501 Not Implemented**
	- **Indicates that the server does not support the features needed to fulfill the request.**
- **502 Bad Gateway**
	- **Indicates that the server received an invalid response from the gateway, which occurs when a server on the Internet receives an invalid response from another server.**
- **503 Service Unavailable**
	- **The server is not ready to process the request. Common causes are servers that are down or overloaded for maintenance. Note that a user-friendly page describing the problem should be sent along with this response. This response should be used for temporary conditions, and the Retry-After: HTTP header should include the estimated time before service recovery if possible. The webmaster should also be careful about caching-related headers that are sent with this response, as it should not cache these transient conditional responses.**
- **504 Gateway Timeout**
	- **This means that while trying to load a webpage or populate another request in your browser, one server did not receive a timely response from another server that was being accessed. This error response is given if the server is acting as a gateway and cannot receive a timely response. This error is usually a network error between servers on the Internet, or a problem with a real server. This may not be a problem with your computer, device, or Internet connection.**
- **505 HTTP Version Not Supported**
	- **The client requested an HTTP version that was not supported by the server. Most web browsers assume that the web server supports the 1.x version of the HTTP protocol. In fact, very old versions of 1.0 and below are rarely used these days, especially because they are less secure and performing than the latest versions of the protocol. Therefore, if your web browser displays this error, you should check the HTTP version supported by the web server software.**
- **506 Variant Also Negotiates**
	- **Occurs when the server has an internal configuration error; transparent content negotiations for requests lead to circular references.**
- **507 Insufficient Storage**
	- **The selected variable resources occur when the transparent server has internal configuration elements; they are not appropriate end points during the negotiation process because they are configured to participate in content negotiations.**
- **508 Loop Detected (WebDAV)**
	- **Occurs when the server detects an infinite loop while processing the request.**
- **510 Not Extended**
	- **Additional extensions to the request are required for the server to fulfill the request.**
- **511 Network Authentication Required**
	- **The 511 status code indicates that the client needs to authenticate to obtain network access.**



---
[](https://www.whatap.io/ko/blog/40/)
[](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
[](https://datatracker.ietf.org/doc/html/rfc2616)