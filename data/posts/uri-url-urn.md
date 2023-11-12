If you've ever used browser, you are familiar with URL. While using browser, you can heard about URI and URN. What's the difference between 

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/87127cd6-5cfd-4a99-81f3-e0d654895afb)

- URI(blue): Identifier of Resource
- URL(green): Locator
- URN(red): Name

## URI ( Uniform Resource Identifier )
> **URI** is a method of identifying the resources themselves as to where the resources on the Internet are.

- Uniform: Unified method of identifying the resources 
- Resource: Everything that can be identified as a resource or URI
	- Here, resources do not only mean files on a web browser, but everything we can distinguish, such as real-time traffic information, becomes a resource.
- Identifier: Information 

The existence of URI is a basic condition required by the Internet and is always attached to Internet protocols. The sub-concept of URI is URL, URN.

## URL ( Uniform Resource Locator )
> **URL** is a protocol for indicating the location of resources on the network. It is a reference to a web resource that specifies a location in a computer network and a search mechanism. 

- Scheme: 'http://' 'https://' 'ftp://'
- Domain: `www.example.com`
- Query Parameters: '?idx=0&search=example'

Often we only know a URL as a website address, but a URL is a notation that represents not only the website address, but also the resources on the computer network. And in order to access the address, you need to know the protocol that matches the URL (http, sftp, sm...) and access it with the same protocol.

## URN ( Uniform Resource Locator )
> URN is a protocol for indicating the location of resources on the network.

URN is a historical name for the URI using turn:scheme.

If the URL specifies the location where the resource is located, the URN gives the resource a name. URN was defined in the 1997 RFC 2141 document for use as an indicator for permanent, location-independent resources.

❗️ Because resources must be mapped to names, it is almost hard to find if given by name. So most people only use URLs (that is, they don't have to know URN)

## Distinguish URI / URL / URN
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4e8a390c-ab9b-485c-83c2-593643cd2bb0)

💡 At first glance, the location of the resource (URL) and the identifier (URI) of the resource on the Internet seem to mean the same thing. But keep in mind that the 'location of resources' eventually represents 'one file location'.

---
- `https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-URL-URI-%EC%B0%A8%EC%9D%B4`