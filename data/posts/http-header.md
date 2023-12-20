## Intro...
There is a concept that cannot be subtracted when it comes to HTTP. It is the header. The header contains various information.

This article is a post about HTTP's header

## Past Version of HTTP Header (RFC2616)
![http_request_headers3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1713839f-a386-45d0-950e-9c86e7cb6382)

**Header classification**

- General Header
	- Information that applies to the entire message
	- Ex. Connection: close
- Request Header
	- Request information
	- Ex. User-Agent: Mozilla/5.0 (Macintosh; ...)
- Response Header
	- Response information
	- Ex. Server: Apache
- Entity Header
	- Entity body information
	- Ex. Content-Type: text/html, Content-Length: 3423

**Message body**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/30537e54-df7f-4bfc-beec-539749779718)

- Message body is for sending entity body
- Entity body is the actual data to pass through in the request or response
- Entity header provides information to interpret the data in the entity body
	- Data form (html, json), data length, Compression information, and etc...

💡 RFC2616 is now discarded, and versions RFC7230 to RFC7235 are now in use.

## HTTP Header
> HTTP headers are metadata elements transmitted between the client and the server in HTTP message. They convey information about the request, response, or the communication channel, facilitating proper data interpretation and handling by both parties.

- All the information you need to send HTTP
	- Ex. body content, size of the body, authorization, request client, server information, cache, and etc...
- There are so many forms of the standard header
- If needed, can add any header
	- Ex. helloworld: hihi

If you want to know more information about standard field, visit **below** 👇🏼: 
[Standard-field](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

### Header field
**header-field = field-name ":" OWS field-value OWS**
1. Case-insensitive
2. For example, 
	1. ![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/95b9b782-309b-44e0-b1ce-3b86d7c2db31)