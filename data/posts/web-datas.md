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

---
[](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Base64-Blob-ArrayBuffer-File-%EB%8B%A4%EB%A3%A8%EA%B8%B0-%EC%A0%95%EB%A7%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85)

[](https://dev.to/ionic/converting-a-base64-string-to-a-blob-in-javascript-35kl)