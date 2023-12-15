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
	- This is a response code that means it is in progress. It tells you that there is no problem with your progress so far, and that you can ignore it if the client continues to make a request or has already completed a request.
- **101 Switching Protocol**   
	- 101 is sent in response to the upgrade request header sent by the client.
	- This response code enters a response to the upgrade request header sent by the client and informs the server that the protocol will be changed. This code will be used during the Websocket protocol transition.
- **102 Processing(WebDAV)**
	- This response code indicates that the server has received a request and is processing it, but it is not yet able to tell you the correct response.

## 2XX : Successful Responses
HTTP status codes starting with "2" indicate successful responses. For example, the most common status code, 200 OK, signifies a successful request, while others like 201 Created or 204 No Content convey successful operations.

- **200 Ok**
	- The request has been successful. The information is returned in response to the request.
- **201 Created**
	- The request was successful and a new resource was created as a result. This response typically follows a POST request or some PUT requests.
- **202 Accepted**
	- The request has been received, but cannot be acted upon. This response does not explicitly state the result of processing the request asynchronous responses later to HTTP. This is made for processing or when the server is handling the request in another process or is in the batch process.
- **203 Non-Authoritative Information**
	- This response code means that the set of meta information returned does not match that of the origin server, but is gathered from local or third-party copies. Under these conditions, the 200 OK response, not this response, must be prioritized.
- **204 No Content**
	- There is no content to send for the request, but the header can be meaningful. The user-agent can update the header from which the resource is cached to a new one.
- **205 Reset Content**
	- This response code notifies the user agent to reset the document view that sent this request after the request has been completed.
- **206 Partial Content**
	- This response code is used because the client sent a range header to split down multiple streams. If the client attempts to take over, the web server will start sending the data in the range header with the response code '206 Partial Content'.
- **207 Mulit-Status**
	- A multi-state response delivers information that is appropriate in situations where multiple resources are state codes, which are used for Web Distributed Authoring and Vesioning (WebDAV).
- **208 Already Reported**
	- Property (a combination of property and status) is used to avoid repeated enumeration of multiple internal members bound to the same collection as a response property. This code is used for Web Distributed Authoring and Vesioning (WebDAV).
- 226 IM Used (HTTP Delta Encoding)
	- The server has fulfilled its resource obligations for GET requests, and the response indicates that one or more instance operations have been applied to the current instance.

## 3XX: Redirection Messages
HTTP status codes starting with "3" indicate redirection. These codes, such as 301 Moved Permanently or 302 Found, inform the client that further action needs to be taken to complete the request, often involving a different resource or URL.

---
[](https://www.whatap.io/ko/blog/40/)
[](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
[](https://datatracker.ietf.org/doc/html/rfc2616)