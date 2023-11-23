## Intro...
When working on the company projects or creating blog, `flex-wrap` was often used for natural screen configurations. `justify-content: center` or `justify-content: space-between` was used to constantly adjust the spacing while using `flex-wrap`. However, there was a problem. The style was applied in an unwanted way. 

This post contains information on the problem, the cause of the problem, and the solution.

## Problem
![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/305b418f-11e9-474f-b2ce-229742a3ba17)
![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3e8e97c7-45b1-4a54-8a1c-0e7a3d662f91)

It’s very difficult to handle the placement or alignment of the contents each time you use the `flex-wrap`. 

`display: flex;` & `flex-wrap: wrap;` are used to automatically place the boxes to the next line, depending on the container’s size. To align the boxes, `justify-content: center` or `justify-content: space-between` is usually used. If you used `flex`, `wrap`, `justify-center`(or `justify-space-between`), however, there are unintended consequences like above images.

## Solution
There are two solutions to make the screen what you really intend.

1. Using grid & grid-template-columns
2. Using @media-query

I recommended the first solution because it’s more simple. (Actually, second way is to handle the responsive css)

```css
/* Wrong code */

.tag {
  display: flex;
  flex-wrap: wrap;
  justify-content: center || space-between;
  gap: 30px;
}
```

### 1. Using `grid` & `grid-template-columns`
```css
/* Adequate */

.tag {
  display: grid;
  gird-template-columns: repeat(auto-fit, 200px);
  justify-content: center
  gap: 30px;
}
```

As above, if the `display` is set to `grid` rather than `flex` and the attribute `grid-template-column` is used, the problem that occurred above can be solved like below:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9736790a-2ab2-43fb-86cb-4c68f122462b)

### 2. Using @media-query

Of course, you can solve the problem by applying a different css style according to the screen size. However, it may be practically unreasonable to apply the css style at every point in time when the positions of tags change. 

Therefore, I recommend the first method rather than this one.

```css
@media all and (max-width: 1920px) {
	.tag {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
	}
}

@media all and (max-width: 1500px) {
	.tag {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
	}
}

@media all and (max-width: 769px) {
  .tag {
    display: flex;
    flex-wrap: wrap;
    justify-content: baseline;
    gap: 50px;
  }
}
```

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5fdfe2c5-d6e7-4f27-a78b-c8f4194c5a22)

## About `grid` & `grid-template-columns`

When you use these two properties, let's learn how to solve the problem.

### grid
> CSS Grid is a layout system that allows you to create complex grid structures with rows and columns.

It provides a more flexible and powerful way to layout content compared to traditional CSS frameworks. With CSS Grid, you can define both rows and columns and place content anywhere within the grid.

You can also specify the size of the rows and columns and set the gap between the cells. CSS Grid can be used to create responsive layouts with media queries.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/25fa9bba-fa6b-432d-b871-fdf0aeae9178)

### Grid-template-columns
> `grid-template-columns` is a property used in CSS Grid to define the number and size of columns in a grid.

It allows for flexible and powerful layout options, and can be used to replace unintended styling issues that can arise when using `flex`, `flex-wrap`, and `justify-content`.

Using `repeat(auto-fill, minmax(240px, 1fr))` with `grid-template-columns` can achieve the same layout as `flex`, `wrap`, and `justify-between`.

For example, 

```css
grid-template-columns: 200px 200px 500px;
```

The above code means that we'll make column 200px, 200p, and 500px.

```css
grid-template-columns: 1fr 1fr 1fr;
```

`fr` means **fraction**. `fr` divides the size of the track according to the numerical ratio. That is, 1fr 1fr 1fr 1fr above means that we will make 3 columns with a 1:1:1 ratio uniformly.

**Example:**

```css
grid-template-columns: 1fr 1fr 1fr;
```

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/393f59c5-b841-4ab0-9e86-d9a83ecf912e)

```css
grid-template-columns: 1fr 3fr;
```

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/60be964f-271e-4318-9a4f-9bad0a26979a)

```css
/* ratio: 100% & 60% */
grid-template-columns: 100px 2fr 1fr;
```

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d7d3790c-9e6a-4b6e-8de9-1170f7b2cc80)

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/df9c500b-d5c0-4dc5-9015-188a42999662)

### repeat()
> Repeat is a function that can automatically process recurring values.

repeat(Repeat count, repeat value)

In other words, the `repeat(5, 1fr)` in the above code is equal to `1fr 1fr 1fr 1fr 1fr`. Patterns such as `repeat(3, 1fr 4fr 2fr)` are also possible.

---

- `https://heeyamsec.tistory.com/37`
- `https://yamoo9.gitbook.io/css-grid/css-grid-guide/minmax-function`
- `https://studiomeal.com/archives/533`