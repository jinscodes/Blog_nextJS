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

---
[](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Base64-Blob-ArrayBuffer-File-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EC%A0%95%EB%A7%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85)

[](https://dev.to/ionic/converting-a-base64-string-to-a-blob-in-javascript-35kl)