## Intro..
The typical CSS layout is `flex`. However, there are times when we need to use another layout instead of `flex` in some cases.

It's GRID!

Flex and grid are similar but different.

There are some areas where Flex and Grid overlap, so if we know Flex, we can study more easily.

## About GRID
The biggest differences between flex and grid is

- Flex is a one-way layout system (1D)
- Grid is a two-way (horizontal-vertical) layout system (2D)

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/44707e81-5eb0-4802-80e3-8c350c41d97a)

Therefore, more complex layout representation is possible than flex.

For this reason, most projects use a proper mix of flex and grid.

> **💡 NOTE**   
> **a misunderstanding about Grid**   
> "Grid is not supported by ID, so it's useless in our country (S.Korea)"   
> IE 10 and 11 also support the older version of the spec, so even if it's a bit annoying, there's a way to apply. There's definitely a limit, but we can use it if we know what's different and respond.

Open the "Inspector" tab of the developer tool and click the button or check box below.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8df37f08-c660-4f37-b987-16b520ff0760)

Click the grid, we can check the grid on the browser.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0a1635e1-9f5a-4175-b4f1-ea5598213918)

## The Way to Create Grid
To create the layout of grid, the basic structure needs two.

- Container
- Items

```html
<div class="container">
	<div class="item">A</div>
	<div class="item">B</div>
	<div class="item">C</div>
	<div class="item">D</div>
	<div class="item">E</div>
	<div class="item">F</div>
</div>
```

The parent element `div.container` is called **Grid Container**, And child elements `div.items` are called **Grid Items**.

The container is the entire space that is affected by the Grid, and each item is arranged in some form according to the set properties.

Likewise flex, grid is started by setting the container to `display: grid;`.

```css
.container {
	display: grid;
}
```

## Terms Related To The Grid
When we look at the grid term, we can get confused about what it means. So, let's check it out at this timing.

There is a greate image to explain the grid.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2fa0ac33-6a1b-4b31-990d-62867649172e)

- Grid Container
	- Entrie grid area that is applied `display: grid;`
	- Items in the grid container are arranged by the rule of grid
	- The above code `<div class="container"></div>` is the grid container
- Grid Item
	- Children elements of grid container
	- These items are arranged by the grid rule
	- The above code `<div class="item"></div>` is the grid item 
- Grid Track
	- Grid's **Row** or **Column**
- Grid Cell
	- One section of Grid
	- A real html element like <div> is a grid item, and grid cell is the **virtual space (frame)**
- Grid Line
	- The line that divide the cell
- Grid Number
	- Grid line's number
- Grid Gap
	- Gap between grid's cell
- Grid Area
	- A square area surrounded by a grid line, which is a collection of grid cells.

Grid's properties are similar to flex, it's divided into two:

1. Properties that apply to containers
2. Properties that apply to item

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/87ccf6d5-c550-4e23-bb3e-8490e53216b3)

## Properties
#### display: grid;
It starts with applying display: grid; to Grid containers.

If the items are block elements, there is no particular change with just this one line.

```css
.container {
	display: grid;
	/* display: inline-grid; */
}
```

> 💡 **Note**   
> There is also inline-grid, and it's related to the relationship between block and inline-block.   
> Rather than having to do with the placement of the item, it's the value that determines how the container will blend in with the surrounding elements. 

> The inline-grid works like an inline-block.

#### gird-template-rows & grid-template-columns
Properties that specify the size of the Grid track in the container.

We can use different units or mix them.

```css
.container {
	grid-template-columns: 200px 200px 500px;
	/* grid-template-columns: 1fr 1fr 1fr; */
	/* grid-template-columns: repeat(3, 1fr); */
	/* grid-template-columns: 200px 1fr; */
	/* grid-template-columns: 100px 200px auto; */

	grid-template-rows: 200px 200px 500px;
	/* grid-template-rows: 1fr 1fr 1fr; */
	/* grid-template-rows: repeat(3, 1fr); */
	/* grid-template-rows: 200px 1fr; */
	/* grid-template-rows: 100px 200px auto; */
}
```

- grid-template-rows is the arrangement of row
- grid-template-columns is the arrangement of column

For example...

```css
grid-template-columns: 200px 200px 500px;
```

The above code means to make the gird 200px 200px, and 500px.

```css
grid-template-columns: 1fr 1fr 1fr;
```

`fr` is the fraction, which divides the size of the track by the number ratio.

In other words, the above 1fr 1fr 1fr means that we will make three columns with a uniform 1:1:1 ratio.

Like this. ↓

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/72978d3d-a650-470c-9d66-3b6270091ecf)

It can be used by mixing fixed and variable sizes.

For example, the first column on the left is fixed at 100px, and the other second and third columns are flexible at a ratio of 2:1.

```css
grid-template-columns: 100px 2fr 1fr;
```

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/275b99c4-de31-4916-b877-51f0a55005eb)

#### repeat()
```css
.container {
	grid-template-columns: repeat(5, 1fr);
	/* grid-template-columns: 1fr 1fr 1fr 1fr 1fr */
}
```

Repeat is a function that automatically processes repeated values.

repeat (number of repetitions, repetition value)

In other words, the repeat(5, 1fr) of the above code is equal to 1fr 1fr 1fr 1fr.

Repeat (3, 1fr 4fr 2fr); this kind of pattern is also possible.

#### minmax()
It's a function that specify the minimum and maximum values.

`minmax(100px, auto)` means that minimum value is 100px and maximum value is automactically adjust. 

In other words, no matter how small the content is, at least 100px is secured, and if the content exceeds 100px, it's increased on its own.

```css
.container {
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, minmax(100px, auto));
}
```

**<AUTO>**:   
![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/642b1a83-1183-4771-a3c0-fb5f72704846)

**<repeat(3, minmax(100px, auto))>**:
![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/84b94613-bb0a-426f-a505-1e5ec630631a)

---
[](https://studiomeal.com/archives/533)

[](https://www.w3schools.com/css/css_grid.asp)

[](https://velog.io/@leemember/display-grid-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)