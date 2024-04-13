During web development, there are times when binary data needs to be dealt with.

In the browser, it is mainly related to file creation, upload, download, or image processing, and in the server side node.js, there may be a situation in which raw data from file to buffer is handled.

Binary data is rarely directly handled during programming. This is due to the fact that advanced language is used to program, so if a human-readable natural language is coded, the program internally converts it into binary data to read and process it. 

However, it becomes difficult when dealing with multimedia data such as files, images, and videos, not integers, real numbers, or letters.

How to deal with the multimedia data?

## Binary
As you already know, computer save every datas with 0 and 1.

Binary refers to the base system for representing numbers using only 0 and 1 and is the most fundamental system in dealing with computer programming.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ac7e2634-872b-4016-93d2-0fe0090e4f2b)

## Base64
The computer stores all data as 0 and 1. The browser also consists of 0 and 1, and the folders and files are also made of binary data.

To get data from computer, we can use **variable**.

We allocate the data which consists of 0 and 1 to the variable and use it.

How do complex multimedia files such as images and videos, rather than numbers or strings, be stored in memory in variables?

Saving an image url in a variable stores a stepping stone called a link, not the image data itself.

The concept of Base64 appears at this time. Base64 refers to encoding binary data (binary) consisting of 0 and 1 and converting it into a text format.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ec8395da-7d8e-4fb5-afcc-34d2d61b784a)

For example, like the below image, we can see the long code("data:image/png;base64") in html instead of img's src or image url. This is the base64. 

Data consisting of 0 and 1 converts to the format that is based on base64 text, so that we can handle the image itself.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/117d2cd8-e13a-449e-9e18-71b1f54f71ac)

There is an example. Bring images to the source code and deal with them.

In general, we bring the image from the local folder or fetching it into relative path through the file system provided by the code.

However, files are no different from eventually fetching the stepping stones stored in the OS like url.

However, if we convert it to base64, we can directly store the image data in the source code. Just as we store strings or numbers in a variable, we can store images in a variable. Since base64 does not convert image data values, it is possible because the image itself does not change.

> **That is, since the image data information is already included in the base64 text itself, as a result, the image can be used directly without requesting from the server through the link url.** 

Usually, the case of dealing with the base64 image format directly in the html as above is as follows.

- Insert a small image directly into the html without importing url or files
- Create a simple page and use the image temporarily
- Write and send the contents of the mail containing the image in html

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2a886907-18e8-4d28-9b01-da8183945968)

In this way, converting to base64 directly deals with binary, but there is a disadvantage in that the amount of data increases by 33% compared to binary data through 64-digit encoding that converts binary data into text. 

However, even as the length of the data increases, the main reason for using Base64 is that Binary data can be handled in a text-based standard.

It is also much easier to transfer/storage than it remains in pure binary form (binary data is more likely to be corrupted).

When encoding, since only A-Z, a-z, 0–9,/+ are used for the character format, it may be transmitted stably between systems that may damage data due to different character formats.

To summarize above,

**Pros**
- No need for a separate image file, because base64 data itself is an image.
- When rendering a browser, it loads like loading a document, so it is loaded constantly. There is also a point in which images can be loaded with the above characteristics even if the network is not good.

**Cons**
- The string is very, very long, which makes it less readable.
- If Base64 encoding is used, the capacity is 33% larger than that of the original, which can reduce the loading speed if abused.

### How to convert image url to base64
Let's converting!

#### 1️⃣ Using the encoding site
The simplest way is using onlie site. It converts image to base64 withiout any special work.

[](https://elmah.io/tools/base64-image-encoder/)

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/77adfd0a-6c25-41fc-a7a7-fee3f70db141)

#### Programming
There is another way to convert image to base64 with JavaScript.

Firstly, read the image using fetch api and convert it to blob format. After that, read and convert blob data in base64 format through FileReader object.

> 💡 **NOTE**   
> FileReader is an object used for the purpose of reading data from data-type objects such as Blob or File. The read data mainly uses events to deliver the data at the necessary time.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/78952522-d274-48ea-a4cb-12a9c6865aea)

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6e04e92f-af55-45b7-924f-3fbe56764e65)

## Blob (Binary Large Object)
BLOB stands for Binary Large Object, which means that multi-media file binaries such as images, audio, and video are mainly stored in the form of objects. 

Since most multimedia files are often large in capacity, they can be viewed as data types designed to effectively store them in a database. (Just as there is a string type and number type, understand that there is a blob type.)

For example, when you want to store an image file as data in a database, you convert it into a blob format and save it. 

Even in a browser environment, JavaScript can be used to access and use these blob data. It is mainly used in JavaScript to deal with multimedia data such as text, images, sound, and video.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e765f831-8167-4f5e-95fd-66116f43b464)

What's the different between blob and base64?

- Base64 was said to be a format stored in the form of text(string) to deal with binary data
- Blob stores objects to handle binary data

Previously, to express the image binary file in the browser in base64 format, it was possible to convert it using the FileReader object and put it into the src property of the <img> tag. 

However, the string is very long, so it is not only bad for readability, but it also has the disadvantage of taking a lot of time to load the document itself (33% larger).

However, the blob data can be used in the browser simply as follows by converting it into an object url properly. And since blob is an object, it has various code utilization, so it can be converted to base64 or a buffer.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/29750419-0cd6-4914-b178-c6ceb9e067d0)

## Deal With blob Image
The following is a code that receives images as fetch api and converts them into blob format.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/84113838-c929-43bc-9b66-11b974bb11af)

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6bf12d48-3abf-4992-ad2f-9dd4287abb02)

### Blob -> ObjectUrl 
Blob objects created through the above code are not immediately available, but must be converted separately into url types that can be used for src attributes of <a> and <img> tags.

![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/642352f0-9402-4bec-b77b-fafb28b4c686)

Unique URL can be created with a Blob object by using `URL.createObjectURL` method. At this time, the generated URL takes the form of `blob:/`. And, the converted URL can be used in all HTML tags and CSS properties with source(src) as an attribute.

Since the type(image/png) is separately specified in the Blob object, the content-type in the network request is naturally matched with the specified type in the process of downloading/uploading the Blob object.

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f754df7d-0029-4c9b-b0c0-33d98a1ebac5)

At this time, the converted URL is stored in the browser memory of the current tab, and the stored URL is in the form of referring to the mapped Blob object.

Because of this principle, unlike base64, the original Blob object can be accessed with only a short character string and files such as images can be imported accordingly. 

**So, the converted URL is always valid only in the current document. (Because it is currently loaded in browser memory. If you want to refresh the current document or use it on another page, you can't use the converted URL properly.)**   
 
However, memory issues related to this are precarious.

If a Blob object is converted into a URL and stored in memory with a mapping, the browser determines that the URL is valid until the URL is explicitly released, so garbage collection is not carried out on the JavaScript engine.

Therefore, after using the blob URL, it is recommended to explicitly release it when it is determined that it is no longer used.

![12](https://github.com/jinscodes/Blog_nextJS/assets/87598134/bbabd9fc-1ca8-484f-be29-9bd058a71488)

The conversion was carried out through the `URL.createObjectURL` method, and the `URL.revokeObjectURL` method is used for the revoke.

This is a method of erasing internally mapped references, which may erase Blob objects residing in memory.

For example, if you use blob only for image download rather than output to the screen, you can prevent memory leakage by revoking the dynamically created blob object because it is only needed at the moment of download click and not after that.

### Blob -> Base64
As mentioned earlier, it is possible to convert it into a Blob object in the form of base64, and the converted string can be used directly as src. These URLs are usually called data url, but the converted base64 URL can be used anywhere, unlike the format converted through the URL.createObjectURL method above. (Because the string itself is image data.)

The method of encoding and using Blob objects as base64 was discussed in the introduction part of base64 above.

![13](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a95606c9-96ec-4127-b617-4c7aa39946d5)

> 💡 **NOTE**   
> Both methods of converting Blob objects into URLs are highly utilized. However, when encoding with base64, the string can be very long and it is slower than the `URL.craeteObjectUR` method, while the converted data url has the advantage of being valid not only in documents on the current tab but also anywhere.

## ArrayBuffuer
The ArrayBuffer object was introduced to address chunks of multimedia data such as images and videos in standard JavaScript(browser).

In general, when transmitting video content, such as real-time broadcasting, real-time data called videos must be continuously delivered so that users can see this. 

In other words, there is a situation in which large data must be divided and transmitted in some way.

![14](https://github.com/jinscodes/Blog_nextJS/assets/87598134/513c9bb4-2845-4944-af19-6db5ec75cfe1)

A buffer in JavaScript is an object that stores **"binary data"** in a **"memory space of a specific size"**.

Therefore, as the use of JavaScript diversifies, it is necessary to deal with binary data such as audio and video, so it is necessary to have the flexibility to properly allocate and use the necessary memory space to create ArrayBuffer.



ArrayBuffer is used in JavaScript as a means of dealing directly with raw data(binary data), which allows developers to manually manage memory.

If base64 and blob are processed data types that are easy for humans to read and handle, they are closer to the original than ArrayBuffer. It is a reference type, and serves to inform that it will allocate and use continuous memory space of a fixed length.

*In particular, when dealing with performance-sensitive issues, or when dealing with large amounts of file data such as Blob, ArrayBuffer can be used to work flexibly and efficiently.*

![15](https://github.com/jinscodes/Blog_nextJS/assets/87598134/14bb3d72-1f7a-499f-95a5-648c23f3b293)

The created buffer object occupies a consecutive 16 byte memory space, and all initial values are filled with zero.

> **💡 NOTE**   
> Although it has an "array" in the name, ArrayBuffer is not the array of JavaScript. ArrayBuffer is jsut like an abstract memory layer that occupies a continuous space in memory.

> ArrayBuffer has the differences compared to JavaScript array.   
	- It has a fixed length, and cannot be stretched or redeuced.   
	- It takes up space in memory that is exactly the sizse specified.   
	- In order to access each byte, it cannot be accessed through an index like buffer[index] like normal array Instead, you must create and access a separate object called a view.

In general, in the case of Array, you can simply access and manipulate the data in the array, but access and manipulation to ArrayBuffer must always be performed by creating a separate object called a "view".

The view object does not store any data on its own, but simply uses it as a means to look inside the ArrayBuffer(They are commonly referred to as TypedArray).

The following are the types of view objects that deal with each byte in the ArrayBuffer individually.

- Unit8Array
	-	The number 8 means bits and is accessible by each byte because 8 bits = 1 byte.
	- As it is 1 byte size, it can handle numbers from 0 to 255. (Unit8 means Unsigned 8bit Int)
- Unit16Array
	- It's an accessible view object in an integer from of 2 bytes(16 bits). 
	- Thus, the range that can be handled corresponds to 0 - 65535.
- Unit32Array
	- It's an accessible view object in an integer form in units of 4 bytes(32bits).
	- Therefore, the range that can be handled corresponds to 0 - 4294967295.
- Float64Array
	- It's an accessible view object in a floating-point manner in units of 8 bytes(64bits).
	- The range can be handled is from 5.0x10^-324 to 1.8x10^308

![16](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f25571de-75fb-41a2-b492-6c188e49db3e)

![17](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cf91ee3f-9383-4ebf-a07b-634bfcebf296)

> 💡 **NOTE**   
> The object implemented by ArrayBuffer represents the part of the data, and the view object provides the context to convert it into a real data formatting array.

### Base64 -> ArrayBuffer -> Blob
ArrayBuffer is used as an intermediate process to convert base64 data into blob.

![18](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ba8b6cf4-dffd-4580-8578-780f5c4f4d6e)

### Blob → ArrayBuffer
It can convert to FileReader

![19](https://github.com/jinscodes/Blog_nextJS/assets/87598134/48cca047-3f98-4b8c-b9b6-9a00f60f973b)

In the case of a large-capacity blob, asynchronous processing can be performed using Promise.

![20](https://github.com/jinscodes/Blog_nextJS/assets/87598134/63cd2a6d-43a4-4a38-a476-8f27364cce6b)

There is also a method of converting blob into ObjectURL and requesting fetch and converting it into array buffer at once.

![21](https://github.com/jinscodes/Blog_nextJS/assets/87598134/507c606e-a1a0-4b7a-8f73-d894a47edd09)

## Buffer
Node.js brought in Buffer type to deal with chunks of data.

Buffer is the type to represent fixed size of chunk datas, many Node.js's API supports Buffer type.

Importing a local file into the fs module is also actually importing it into a buffer.

On the client, binary data is dealt with using Array Buffer. On the server(Node.js), binary data is dealt with using Buffer object.

> 💡 **NOTE**   
> If Node.js handles multimedia files, it is handled using a buffer unconditionally.

![22](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d4b2022c-60cc-40e2-8c67-653c6ac1d480)

## Get Image From Server And Handle It
If getting images from local, there is no complicated step to deal with it. However, to get images from the server and handle it, blob and arraybuffer is needed.

![23](https://github.com/jinscodes/Blog_nextJS/assets/87598134/75136c5a-7b94-44e4-94c1-b193e440b7c6)

1. Fetch image
2. Convert result to blob
3. Convert blob to arraybuffer through async
4. Convert arraybuffer to buffer
	1. (It's impossible to convert blob to buffer directly, so it's needed to follow above steps)

In fact, the fetch module provides a helper method that can be converted directly into a buffer, so you can use it simply as below. (Still, it works as above internally.)

![24](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e415e655-4dda-4c2e-8c25-e5218877d1bb)

## File & FileReader
Although files are a very familiar type to us, the File object in JavaScript is an extended object of the Blob object and is primarily responsible for functions related to the file system.

The file system is an area of the OS/server, and it can be viewed as a standard to support it because functions such as sending and receiving files on a browser are required.

There are two methods for handling files using JavaScript in a browser: using a File object or an input tag of html.

![26](https://github.com/jinscodes/Blog_nextJS/assets/87598134/16110623-33a5-44a3-a40a-4d0f21c0bfc0)

![25](https://github.com/jinscodes/Blog_nextJS/assets/87598134/bc7fa40c-0f3d-4bc1-adc7-44cece4e45c6)

## FileReader Object
FileReader is an object that is used to read the data from the object like Blob or File.

The read data mainly uses events to deliver the data at the required timing.

The main methods available in the created FileReader object are as follows.

![27](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4f22c530-8e2c-490e-b402-6b7d2db6da6b)

- readAsArrayBuffer(blob)
	- Read data in ArrauBuffer format.
	- In the case of readAsArrayBuffer, it is useful when low-level binary work is required for binary file targets. 
	- In the case of most high-level tasks, since the File object inherits Blob, it is possible to immediately call methods such as slice without a separate read process.
- readAsText(blob, [encoding]) 
	- Read data in text form according to encoding method (default encoding method - utf-8).
	- In the case of readAsText, it is useful if you need a character string in the form of text.
- readAsDataURL(blob)
	- Read data in base64 format data url.
	- In the case of readAsDataURL, it is useful if resources must be addressed to src properties, such as img tags. 
	- Alternatively, as covered in the previous chapter, there is a way to use URL.createObjectURL.
- abort()
	- Stop the operation immediately

The list of events that occur in the process of reading data using the FileReader object is as follows.

![28](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f21c7c58-99de-4f51-a1f2-434e0087e08b)

- loadshort: When loading starts

---
[](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Base64-Blob-ArrayBuffer-File-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EC%A0%95%EB%A7%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85)

[](https://dev.to/ionic/converting-a-base64-string-to-a-blob-in-javascript-35kl)

[](https://curryyou.tistory.com/441)