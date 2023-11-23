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