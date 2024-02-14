## Intro...
There is a property `text-overflow: ellipsis;` in CSS.

It makes the sentence add ellipsis(...) at the end of the word or sentence.

However, elipsis is sometimes not applied in some cases.

In this post, we will discuss experiences where elipsis was not applied.

If you want to know more about elipsis, click the link below 👇🏼

[](https://jay-h-blog.vercel.app/posts/CSS/text-overflow)

## Error While Using Library
In general, when configuring the web, using `text-overflow: ellipsis;` usually doesn't cause problems. (Of course, IE does cause problems.) However, in my case, it was not a problem caused by IE because it does not deal with IE.

In HTML+CSS+JS structure, an image was on a webpage and text was stacked on top of the image. It was necessary to take a screenshot with elipsis(...) at the end of the text.

To automate screenshots of web pages, I used a library called **HTML2Canvas**. But, Ellipsis did not apply to photographs taken through HTML2Canvas.

The below image is an example.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8fe1cd4b-46b7-45d9-88e2-dd6b2e971add)

If looking at the picture above, in the red box, there is no ellipsis at the end of the text even though `text-overflow: ellipsis; white-space: nowrap; overflow: hidden` is applied.