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

- Media type, text encoding
- Examples
	- text/html; charset=utf-8
	- application/json
	- image/png

### Content-Encoding
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6657aafa-5fb2-4ceb-b72d-893c54e244b2)

The Content-Encoding header in HTTP is used to specify the type of encoding used to compress the data being sent. 

This header informs the client about the compression method applied, such as gzip or deflate, enabling the client to properly decompress and interpret the data. It's essential for efficient data transmission, particularly for reducing the size of larger resources like images or scripts.

- Use to compress data representation
- Add post-compression encoding headers where data is delivered
- Data read side decompresses to information in the encoding header
- Examples
	- gzip
	- deflate
	- identity

### Content-Language
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/48e7e7f7-db5d-4479-b459-04cce49b6b32)

The `Content-Language` header in HTTP indicates the language(s) of the content being sent, such as English (`en`), Spanish (`es`), or Japanese (`ja`). 

This header helps the client understand the language context of the resource, which is particularly useful for content like text or websites that can be presented in multiple languages. It aids in content localization and providing a more tailored user experience based on language preferences.

- Representation of the natural language of the data representation
-Examples
	- ko
	- en
	- en-US

### Content-Length
![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/405615e3-2de7-41c4-a303-5aaa874bef78)
The `Content-Length` header in HTTP specifies the exact size of the response body in bytes, indicating how much data is being transferred.

This header allows the client to know the size of the data it's receiving, which is crucial for connection management and ensuring complete data transfer. It's particularly important for the efficient handling of both large downloads and streaming data.

- Byte unit
- If using Transfer-Encoding, Content-Length is un-available
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

## Negotiation and Priority
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a8421852-c8f6-4028-87fa-9c18594f428f)