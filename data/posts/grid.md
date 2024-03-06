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

### Grid form definition

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

#### auto-fill and auto-fit
Auto-fill and auto-fit fill the cell as much as possible as the set width allows without predetermined number of columns.

About auto-fill..

```css
.container {
	grid-template-columns: repeat(auto-fill, minmax(20%, auto));
}
```

Because `auto-fill` is set to 20 percent, One row contains five cells.

![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5a5123dc-7e0c-409f-92b6-e4c788376829)

If the number of cells is less than five, the space is left like this ↓

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/11bb13f9-d97c-4d10-aca1-aeaa85ca84a3)

If using `auto-fit` instead of `auto-fill`, it fills the remaining space.

This is the difference between ↓ `auto-fill` and `auto-fit`.

![12](https://github.com/jinscodes/Blog_nextJS/assets/87598134/16a68615-968e-4a2c-bd12-83dd9456f319)

### Create an interval
#### row-gap & column gap & gap
Sets the interval between grid cells.

```css
/* row's gap is 10px and column's gap is 20px */
.container {
	row-gap: 10px;
	column-gap: 20px;
}
```

```css
/* row-gap:10px; and column-gap: 20px; */
.container {
	gap: 10px, 20px;
}
```

```css
/* row-gap: 20px; and column-gap: 20px */
.container {
	gap: 20;
}
```

**Example:**
gap: 0 & gap: 10px & gap: 2rem

![13](https://github.com/jinscodes/Blog_nextJS/assets/87598134/27df4db4-4005-465f-9c2d-ef966b8ef268)

In the beginning, it was grid-gap, grid-row-gap, and grid-column-gap, but to expand the browser compatibility, we also use both the previous and current versions of the name as below.

```css
.container {
	grid-gap: 20px;
	gap: 20px;
}
```

> 🚨 **NOTE**
> In IE, there is no alternative property of gap, so if you want to unify the structure with IE, it is easier to design the structure without using gap from the beginning.

### Automatically define grid form
#### grid-auto-columns & grid-auto-rows
Properties that specify the size of a track that is outside the control of grid-template-columns (or grid-template-rows).

What does "out of control" mean? Do you remember this code earlier?

```css
.container {
	grid-template-rows: repeat(3, minmax(100px, auto));
}
```

This code means that it make sure that each cell has a height of at least 100px, and that the content automatically increases when it exceeds 100px.

However, what if the number of rows is not known in advance? 

The answer is `grid-auto-rows`.

```css
.container {
	grid-auto-rows: minmax(100px, auto);
}
```

![14](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7ab650c1-93bf-48a6-9762-278bebaaaf96)

It will be processed automatically without having to repeat it by setting a number of times.

In other words, all the rows here are out of control of the grid-template-rows because they don't pre-set as grid-template-rows, and the grid-auto-rows take care of it.

### Specify the area for each cell
#### grid-column-start & grid-column-end & grid-column & grid-row-start & grid-row-end & grid-row
These properties are the properties that apply to Grid items, specifying the area of each cell.

![15](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d4d60257-0a19-448f-b026-1bb106bad2d1)

There are Grid line numbers from 1 to 4, which are used to determine the range of columns and rows.

If looking at the column, grid-column-end is the starting number, grid-column-end is the ending number. Grid-column is an abbreviation for writing the start and end properties at once.

The red area above is shown in the code below.

```css
.item:nth-child(1) {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 2;
}
```

```css
.item:nth-child(1) {
	grid-column: 1 / 3;
	grid-row: 1 / 2;
}
```

These two codes specify the same area ↓

![16](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3f0672e1-a92e-4215-8589-50aa6e0612da)

In addition to specifying the start/end number, we can also specify how many cells we want to occupy.

```css
.item:nth-child(1) {
	/* 2 sections on the first line */
	grid-column: 1 / span 2;
	/* 3 sections on the first line */
	grid-row: 1 / span 3;
}
```

![17](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f44886cf-6b1d-4527-9001-d72608d959fc)

Grid-auto-column is a rule that determines the placement of columns that are not controlled by grid-template-column, and we can use this grid-column to create 'uncontrolled' columns.

```css
.container {
	grid-template-columns: 50px;
	grid-auto-columns: 1fr 2fr;
}
.item:nth-child(1) { grid-column: 2; }
.item:nth-child(2) { grid-column: 3; }
.item:nth-child(3) { grid-column: 4; }
.item:nth-child(4) { grid-column: 5; }
.item:nth-child(5) { grid-column: 6; }
.item:nth-child(6) { grid-column: 7; }
```

This way, only the first column(G) is controlled by the grid-template-column to 50px, and the remaining columns repeat a ratio of 1:2 according to the grid-auto-column rule.

Like this ↓

![18](https://github.com/jinscodes/Blog_nextJS/assets/87598134/149dc4d6-1d73-40c2-a3f4-741c56911ffc)

### Define Grid By Area Name
#### grid-template-areas
It is a method of naming each Grid Area and placing it using that name.

It's really an intuitive way to do it.

![19](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a2d1b188-44b2-4fc0-834f-d65931ed692f)

```css
.container {
	grid-template-areas:
		"header header header"
		"   a    main    b   "
		"   .     .      .   "
		"footer footer footer";
}
```

In the above form, we can write the name in the location as many as the number of cells it occupies.   
Put a space in each cell and distinguish it.   
We can use a period or "none" for blanks, and we can use multiple periods.

We can name the item element with the grid-area attribute!   
Like ↓

```css
.header { grid-area: header; }
.sidebar-a { grid-area: a; }
.main-content { grid-area: main; }
.sidebar-b { grid-area: b; }
.footer { grid-area: footer; }
/* Please note that the name value does not contain quotes */
```

### Automatic Placement
#### grid-auto-flow
Properties that determine the flow in which an item is placed automatically.

```css
.container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25%, auto));
	grid-template-rows: repeat(5, minmax(50px,auto));
	grid-auto-flow: dense;
}

item:nth-child(2) { grid-column: auto / span 3; }
item:nth-child(5) { grid-column: auto / span 3; }
item:nth-child(7) { grid-column: auto / span 2; }
```

B, E, and G set each cell to occupy three or two cells, but because of that, there was no room for cells, so there were empty cells.

The default setting for Grid placement is that items are placed in order based on row, and if there is no room to enter, the space is left blank and placed down.

Dense is basically an algorithm that fills empty cells, and the criteria vary depending on the row and column.

**<row>**
![20-row](https://github.com/jinscodes/Blog_nextJS/assets/87598134/827dcc5d-2ca4-49a1-8e00-1472e02f8cb1)

**<dense & row dense>**
![20-row-dense](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a6349b3d-0636-484a-9ee7-5a706afb889d)

**<column & column dense>**
![20-col-dense](https://github.com/jinscodes/Blog_nextJS/assets/87598134/906b6b4e-05b2-4ce7-a70f-512914710310)

## Alignment
Let's learn about the alignment of the contents in each cell or in the container

### Alignment In The Cell

#### align-items: Vertical 
Sorts items vertically (column axis) and applies to containers.

```css
.container {
	align-items: stretch;
	/* align-items: start; */
	/* align-items: center; */
	/* align-items: end; */
}
```

**<stretch>**
![21-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d5376278-f6ca-470c-bfbe-56c06e72c7e4)

**<start>**
![21-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/412e9c05-ca27-4578-881a-942c133cf867)

**<center>**
![21-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/db01bf30-c37e-48e5-9bb2-38bd3bac64d0)

**<end>**
![21-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c70bb992-c708-45ae-ba4b-7d97d122347e)

#### justify-items: Horizontal
Arrange items in a row-axis direction; apply to containers.

```cs
.container {
	justify-items: stretch;
	/* justify-items: start; */
	/* justify-items: center; */
	/* justify-items: end; */
}
```

**<stretch>**
![22-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8b97c99c-bf55-4f7c-8e1e-e45451ae3dd0)

**<start>**
![22-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6baa8a9a-39d4-4e52-8d9a-cf24ca588bd3)

**<center>**
![22-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/750cb186-eeb6-4d2b-a928-2a103babd627)

**<end>**
![22-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a2a4b5e4-49ac-469b-9aa5-0ae50ae1af39)

#### place-items
It is a shortcut property that allows you to use both alignment-items and justify-items.

Write in the order of alignment-items, justify-items, and write only one value to apply to both properties.

```css
.container {
	place-items: center start;
}
```

### Item Group Vertical Alignment
#### align-content
Sort the Grid items as a whole when the combined height of the Grid items is less than the height of the Grid container.

```css
.container {
	align-content: stretch;
	/* align-content: start; */
	/* align-content: center; */
	/* align-content: end; */
	/* align-content: space-between; */
	/* align-content: space-around; */
	/* align-content: space-evenly; */
}
```

**<stretch>**
![23-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2599ac7c-7625-49ac-ab1e-f4b4248f48d1)

**<start>**
![23-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3681af7a-1f74-431e-9ac4-ccbb644e7389)

**<center>**
![23-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/303ac1c5-59cd-4dfa-8d35-8c7d8c5fc25b)

**<end>**
![23-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ce6ae510-1c5c-426c-bf7e-aacf466216d8)

**<space-between>**
![23-between](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7cdee1d2-1e03-4a19-ae2a-0fa77ab7bec1)

**<space-around>**
![23-around](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8a482cc5-9db6-4bda-9c23-e521ab9c4e63)

**<space-evenly>**
![23-evenly](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8d3d7ede-6001-46a6-a314-792826facb2c)

### Item Group Horizontal Alignment
#### justify-content
Sort the Grid items as a whole when the combined width of the Grid items is less than the width of the Grid container.

```css
.container {
	justify-content: stretch;
	/* justify-content: start; */
	/* justify-content: center; */
	/* justify-content: end; */
	/* justify-content: space-between; */
	/* justify-content: space-around; */
	/* justify-content: space-evenly; */
}
```

**<stretch>**
![24-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1fe18d1b-ef98-4125-a9d8-2aa749a0542a)

**<start>**
![24-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/01671e07-2f49-42f5-be11-e6f4ae15dff0)

**<center>**
![24-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/35ada97d-8392-4224-a090-3040e3d70358)

**<end>**
![24-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/91c8b687-f469-475a-a262-047d398b4d60)

**<space-between>**
![24-between](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3362566f-f898-4047-9f34-fabe2dbf004d)

**<space-around>**
![24-around](https://github.com/jinscodes/Blog_nextJS/assets/87598134/50b93ca0-f9d2-404c-b457-c8e63c9332fd)

**<space-evenly>**
![24-evenly](https://github.com/jinscodes/Blog_nextJS/assets/87598134/96b5f438-6668-4c48-a450-9ca1d06be51e)

#### place-content
It is a shortened property that allows you to use both alignment-content and justify-content.

Write in the order of alignment-content, justify-content, and write only one value to apply to both properties.

```css
.container {
	place-content: space-between center;
}
```

### Each Item Vertical Alignment
#### align-self
Sorts the corresponding item in the column-axis direction. Applies to the item.

```css
.item {
	align-self: stretch;
	/* align-self: start; */
	/* align-self: center; */
	/* align-self: end; */
}
```

**<stretch>**
![25-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0359071c-1fb5-4327-9ddf-6e7a2d5f1dd6)

**<start>**
![25-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/68fcca04-206c-4e2a-a94b-1c09a5df1752)

**<center>**
![25-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e8fa8c9e-9eb8-4571-a902-d5ff2383081e)

**<end>**
![25-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e00608f5-b047-4b69-82b5-193cb92f4943)

### Each Item Horizontal Alignment
#### justify-self
Aligns the item in the horizontal direction (row axis) Applies to the item.

```css
.item {
	justify-self: stretch;
	/* justify-self: start; */
	/* justify-self: center; */
	/* justify-self: end; */
}
```

**<stretch>**
![26-stretch](https://github.com/jinscodes/Blog_nextJS/assets/87598134/daf8c7ba-7914-4c0e-b18b-49feb3da45c8)

**<start>**
![26-start](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a8b4f51f-2f4d-4607-94db-af629fa114e8)

**<center>**
![26-center](https://github.com/jinscodes/Blog_nextJS/assets/87598134/87aec63d-daab-4c93-b203-61329a408ad4)

**<end>**
![26-end](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a614b699-9233-4c6e-a403-f468f23c087d)

#### place-self
It is a shortened property that allows you to use both alignment-self and just-self.

Write in the order of alignment-self, just-self, and write only one value to apply to both properties.

```css
.item {
	place-self: start center;
}
```

### Order Of Items
#### order
It is a property that determines the visual order of each item.

The number value is entered, and the smaller the number, the first it is placed.

It is only a "visual" order and does not change the structure of HTML itself, so be careful about its use in terms of accessibility. 

When reading a screen with a screen reader used by blind people, remember that there is no point in changing the order using the order.

```css
.item:nth-child(1) { order: 3; } /* A */
.item:nth-child(2) { order: 1; } /* B */
.item:nth-child(3) { order: 2; } /* C */
```

#### z-index
We can align the Z-axis with the z-index. The larger the number, the higher it goes.
(We can think of it the same as the z-index in the position.)

```css
.item:nth-child(5) {
	z-index: 1;
	transform: scale(2);
}

/* It's 0 if you don't set z-index, so even if you set 1, the rest of the items come up higher */
```

![28](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c7c06ed2-57e1-4621-bee3-15a8aba84cd9)


---
[](https://studiomeal.com/archives/533)

[](https://www.w3schools.com/css/css_grid.asp)

[](https://velog.io/@leemember/display-grid-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)