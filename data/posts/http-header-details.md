## Intro...
In the previous post, we briefly learned about HTTP headers. 

If you want to check the previous post, 👇🏼

[1](https://jay-h-blog.vercel.app/posts/WebCS/http-header)

This post introduces details of HTTP headers.

## Header Representation
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1976df5c-13e1-4cef-aefe-4eaac365c349)

- **Content-Type**
- **Content-Encoding**
- **Content-Language**
- **Content-Length**

### Content-Type
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/886e8ea7-1ad6-4bc1-a717-5bbff4cb8a81)

The Content-Type header in HTTP is used to indicate the media type of the resource being sent to the recipient. 

It tells the client what the content type of the returned content is, such as text/html for HTML documents, application/json for JSON data, or image/jpeg for JPEG images. This header is crucial for the client to correctly process and display the received data.

- **Media type, text encoding**
- **Examples**
	- text/html; charset=utf-8
	- application/json
	- image/png

### Content-Encoding
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6657aafa-5fb2-4ceb-b72d-893c54e244b2)

The Content-Encoding header in HTTP is used to specify the type of encoding used to compress the data being sent. 

This header informs the client about the compression method applied, such as gzip or deflate, enabling the client to properly decompress and interpret the data. It's essential for efficient data transmission, particularly for reducing the size of larger resources like images or scripts.

- **Use to compress data representation**
- **Add post-compression encoding headers where data is delivered**
- **Data read side decompresses to information in the encoding header**
- **Examples**
	- gzip
	- deflate
	- identity

### Content-Language
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/48e7e7f7-db5d-4479-b459-04cce49b6b32)

The `Content-Language` header in HTTP indicates the language(s) of the content being sent, such as English (`en`), Spanish (`es`), or Japanese (`ja`). 

This header helps the client understand the language context of the resource, which is particularly useful for content like text or websites that can be presented in multiple languages. It aids in content localization and providing a more tailored user experience based on language preferences.

- **Representation of the natural language of the data representation**
- **Examples**
	- ko
	- en
	- en-US

### Content-Length
![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/405615e3-2de7-41c4-a303-5aaa874bef78)
The `Content-Length` header in HTTP specifies the exact size of the response body in bytes, indicating how much data is being transferred.

This header allows the client to know the size of the data it's receiving, which is crucial for connection management and ensuring complete data transfer. It's particularly important for the efficient handling of both large downloads and streaming data.

- **Byte unit**
- **If using Transfer-Encoding, Content-Length is un-available**
	- Content-Length should not be used because Transfer-Encoding contains various information
	- More details are later...

## Content Negotiations
Content negotiation in HTTP is a process where the client and server work together to determine the most suitable format of a resource based on the client's preferences and capabilities.

This is achieved through headers like Accept, Accept-Language, Accept-Encoding, which specify the client's preferred formats, languages, and encodings.

> 💡 In fact, Content Negotiations is client's preferred expression request.

- **Accept**: Deliver the media type preferred by the client
- **Accept-Charset**: Encoding the text preferred by the client
- **Accept-Encoding**: Compression encoding preferred by the client
- **Accept-Language**: Natural language preferred by the client

There is an example of the Content Negotiations. The below example is about Accept-Language.

Before adopting Accept-Language:

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/168cf565-1152-4f37-8ef7-3371c334de6a)

Without Accept-Language, the server will not know what the preferred language from the client.   
Of course, the server will respond in the default language.

After adopting Accept-Language:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d7b5637-fdeb-4256-9e95-2d8628bb5053)

By requesting in the Accept-Language, the server can know which language the client prefers, which means that the server can respond in the language the client prefers.

If so, what if the language sent in the Accept-Language is not on the server?

## Negotiation and Priority, Quality Values(q)

### Accept-Language
![3-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5104d079-20a8-4574-aa74-6c8d51b6b1bb)

As shown in the picture above, if the client requested ko through the header's accept-language, but there is no information about ko on the server, it will be ambiguous which response should go.

There are negotiations and priorities, aka Quality Values(q), as a means of solving these problems

![3-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/14753ddb-6d91-450e-a240-19af3f3a8418)

![3-3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0c5e4751-1979-46e6-a0d2-4ab9c0c8a4c5)

- **Using Quality Values (q)**
- **0~1, Higher priority for larger**
- **If you omit it, 1**
- **Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7**
	- ko-KR;q=1 (q is omitted)
	- ko;q=0.9
	- en-US;q=0.8
	- en:q=0.7

**Example of Quality Values:** 

![3-4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9fa87524-3539-40cd-89a2-dd3423a74721)

### Accept
![4-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d56fc9d-5e17-44f5-ae78-59f4452e0495)

If the client sends a request without specifying a quality value as shown in the picture above, confusion may occur when the server responds. Therefore, it is better to prioritize and send it as in Accept-Language above.

![4-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7a336704-efd8-4292-95c6-7a29ac37b462)

- **The specificity takes precedence**
	- Set the media type based on specific things
- **Accept: text/*;q=0.3, text/html;q=0.7, text/html;level=1, text/html;level=2;q=0.4, */*;q=0.5**
	- text/html;level=1;q=1
	- text/html;q=0.7
	- text/plain;q=0.3
	- text/jpeg;q=0.5
	- text/html;level=2;q=0.4
	- text/html;level=3;q=0.7

**Example of Quality Values:**

![4-3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/52002f9f-d6dc-4177-998d-d4e56d8da903)

---
[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)

[](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Accept)