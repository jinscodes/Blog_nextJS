HEADER

```
<h1>: # This is a H1
<h2>: ## This is a H2
<h3>: ### This is a H3
<h4>: #### This is a H4
<h5>: ##### This is a H5
<h6>: ###### This is a H6
```

BLOCKQUOTE

```
<blockquote>: > This is a BLOCKQUOTE
							>		> This is a second blockquote
							>		>		> This is a third blockquote

blockquote 안에서는 다른 마크다운 요소를 포함할 수 있다.
```

OL & UL

```
<ol>: 1. This is a OL
			2. This is a second ol

<ul>: - This is a UL
			- This is a second ul
```

CODE

```
<code>: `This is a CODE`
```

CODE BLOCK

````
<pre> > <code>:
									```java
										public class Markdown {
											public static void main(string[] arr) {
												system.out.println("Hello World");
											}
										}
									```
									```jsx
										const Markdown = ( {params} ) => {
											console.log*("Hello World");

											return (
												<>
													{params}
												</>
											)
										}
									```
````

HR

```
<hr />: ---
```

LINK

```
	[link keyword][id]

	[id]: URL "Optional Title Here"

	// code
	Link: [Google][googlelink]

	[googlelink](https://google.com "Go google")
```

IMAGE

```
	![Alt text](/path/to/img.png)
	![React Office desk](/path/to/img.png)
```

줄바꿈

```
	3칸 이상 띄어쓰기( )를 하면 줄이 바뀐다.

	ex. 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기

```

볼드

```
	** 굵게 쓰기 **
	__ 굵게 쓰기 __
```

이탈릭

```
	* 기울여쓰기 *
	_ 기울여쓰기 _
```

앞뒤 * 기울기
앞뒤 _ 기울기
앞뒤 ** 굵게
앞뒤 __ 굵게
앞뒤 ~~ 취소선

9. 여러번 띄어쓰기
전각 공백 (　) < 한국 키보드에서 입력 불가하므로 괄호안 복사하여 사용

&nbsp; =   Non-breaking space의 약자
:=     160;