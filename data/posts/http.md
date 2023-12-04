## Intro...
It is no exaggeration to say that everything on the computer is made up of HTTP. To understand the programming deeply regardless of what language or tools we use, we must study about HTTP. 

So, What is HTTP?

## HTTP ( HyperText Transfer Protocol )
> HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web, enabling the exchange of text, images, files, and other resources between clients (such as web browsers) and servers.

Everything is throught HTTP. In other words, sending everything to the HTTP message.

- HTML, TEXT
- Image, Video, File, Vocie, and etc...
- JSON, XML (API)
- Almost all forms of data
- When exchanging data bewteen servers

Today, HTTP is used almost everywhere. This is the HTTP era.

### History
Before we start studying HTTP in earnest, let's take a brief look at the history of HTTP. In fact, when it comes to studying HTTP, you don't need to know the history, but let's think of it as like a GE.

1. HTTP/0.9 1991: Only `get` method, No HTTP header
2. HTTP/1.0 1996: Method, Header is added
3. **HTTP/1.1 1997: Most used, Important version for us**
	1. RFC2068 (1997) -> RFC2616 (1999) -> RFC7230~7235 (2014)
4. HTTP/2 2015: Improve performance
5. HTTP/3 Ongoing: Using UDP instead of TCP, Imporve performance

### Underlying Protocol
- **TCP**: HTTP/1.1, HTTP/2
- **UDP**: HTTP/3
- Now: HTTP/1.1, increasing the rate of HTTP/2 and HTTP/3

**<HTTP2 & HTTP3>**

![http23](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4a7c3c04-73fb-46a6-b3fd-4dbf753258d4)

**<HTTP1.1 & HTTP2>**

![http1 1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a9029702-cc94-40af-9b21-b07949112775)

## Features of HTTP
- Client/Server structure
- Stateful, Stateless
- Connectionless
- HTTP message
- Simple and Extendable