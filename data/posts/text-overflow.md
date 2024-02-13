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

### How to make text overflow an area
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/22df076b-6f3e-45ad-a9a6-498b2d9bf7ab)