## Intro...
In development, there are some moments when we need to use ellipsis(...) at the end of the word, sentence, or even paragraph. 

Actually, adding ellipsis(...) is not difficult, but confused. This is because multiple css attributes muse be used.

## Text-Overflow
There is a code. But, the below code's length is too long, so we need to make it add ellipsis.

`Lorem ipsum dolor sit amet` --> `Lorem ipsum dol...`

If a long sentence goes over a set area as above, how can we use the abbreviation table (...) to omit it?

The answer is **text-overflow**.

```css
text-overflow: [ clip | ellipsis | <string> ]{1,2}
```

This property is an overflow property that effectively communicates what state the hidden content is in.

> 🚨 This property alone does not allow content to overflow an area.

### How to make text-overflow an area
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/22df076b-6f3e-45ad-a9a6-498b2d9bf7ab)

In the above example, the first shows how only the width attribute is applied to the `div` area.

The second is when `white-space: no-wrap` is applied.

The last is when both `white-space: no-wrap` and `overflow: hidden` are applied.

> 💡 **NOTE**   
	1. The white-space: no-wrap property removes automatically descending to the next line when a sentence within an area is long.

>	2. The overflow: hidden property hides the overflowing elements of an area.

### Example
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6f3bb24c-c806-4edc-a62f-e2290b6142ad)

If looking at the last line of the example above, we can see that the `text-overflow: ellipsis;` is applied. 

```css
.ellipsis {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* ellipsis */
}
```

If applying it to a specific area as above, we can simply apply an ellipsis(...).

## More than 2 lines
Now we're going to learn how to apply the text-overflow at the end of more than two lines of sentences.

### -webkit-line-clamp Property

```css
-webkit-line-clamp: [none | <integer>]
```

This property serves to limit content to only a specified number of lines within an area.

> 🚨 As the name suggests, this property does not work with browsers (ex. IE) that do not support webkit-based properties.


### Example
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e82a2f9d-723d-4982-b04c-350f30b29668)

The example above uses the `-webkit-line-clamp` property to reduce the length of a sentence when it crosses a specified line.

```css
.ellipsis {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

If we want to shorten a sentence to one line or several lines, we can apply the properties of the desired area as above. 

If we want to apply an ellipsis for three lines, we can apply `-webkit-line-clamp: 3;`.

> 🚨 Must remove the `white-space: no-wrap` property.

Properties that apply the ellipsis to multiple lines of sentences.

- **`display: -webkit-box` properties allow the area to be managed in box form.**
- **`-webkit-line-clamp` property determines the maximum number of lines of content within an area.**
- **`-webkit-box-orient: vertical` property allows alignment within the zone box to be vertical.**

## Using JavaScript
All of the css ellipsis methods introduced above can be applied equally to responsive web, td, flex area of table, etc.

Also, we can handle javascript curtailment without applying it as css.

The method is to cut the string itself and put a ellipsis mark(...). So we need to find a way to fit our service and apply it flexibly.

### Personal Experience
*The reason why we need to know how to apply elipsis using JavaScript is that sometimes it doesn't apply to the web browser the way we want it to.*

In my case, I had a mission to capture the screen using the javascript libraray named html2canvas. In this case, ellipsis was not applied to the screenshot picture.

If elipsis doesn't apply like the above case, we can cut a word or sentence and force to put elipsis(...) using JS.

If you want to take a closer look at this error case 👇🏼

[]()

---
[](https://deeplify.dev/front-end/markup/text-ellipsis)