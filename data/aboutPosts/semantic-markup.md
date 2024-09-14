**1️⃣ Semantic Markup**

여기서 Sematic이란 의미론적인 뜻을 가지며 Markup은 HTML문서 태그로 문서를 작성하는 것을 말한다. 따라서, 시맨틱 마크업이란 의미가 잘 전달되도록 HTML 문서를 작성하는 것을 말한다.

시맨틱 마크업을 사용하는 이유는 크게 3가지가 있다. 첫번째는 SEO 최적화에 유기하기 때문이다. 검색엔진이 시맨틱 태그를 중요한 키워드로 간주하기 때문에 검색엔진 최적화에 유리하다. 또한, 웹 접근성에 도움이 된다. 시각장애인들도 웹을 편리하게 접할 수 있도록 도와준다. 마지막으로, 유지보수에 용이하다. 정리된 마크업은 코드 식별에 용이하기 때문에 유지보수에 유리하다.

![](https://github.com/user-attachments/assets/556a34f0-65e6-43da-81ae-f60b58d7e260)

이렇듯 시맨틱 마크업이 중요해지면서 `<div>`로 퉁쳤던 태그들에 이름을 부여하고 있다. HTML5 이후 태그가 세분화 되었는데 이는 곧 각 태그마다 용도와 목적이 정했다고 볼 수 있다.

**2️⃣ 시맨틱 태그의 종류**

시맨틱 태그에는 여러가지 종류가 있다.

**Layout: `<header>` `<footer>` `<main>` `<aside>`**

![layout-tag](https://github.com/user-attachments/assets/cac8e470-1a14-41d8-9482-0036a6aaf276)

레이아웃과 관련된 태그들이다. 위의 태그들은 직관적인 이름처럼 헤더, 푸터, 메인 콘텐츠와
사이드바에 이용할 수 있습니다.

**List: `<nav>` `<ul>` `<ol>` `<li>`**

![nav](https://github.com/user-attachments/assets/cf6cc19f-0225-4bc7-aedd-581012e37e9e)

`nav`는 GNB 등 내비게이션 메뉴를 묶을 때 주로 사용하는 태그이다. 보통 `ul` 태그와 함께 사용한다.

여기서, `ul`은 unordered list를 의미하고, `ol`는 ordered list를 의미한다. `li`는 `ul`과 `ol`의 하위 태그로 사용한다.

![ol-ul](https://github.com/user-attachments/assets/39b240cb-51c8-42de-8db5-864a61e4016c)

`ul` 목차의 앞에 붙는 불릿이나, `ol` 목차의 순서를 나타내는 모양은 커스텀 가능하다.

**Area: `<article>` `<section>`**

![article-section](https://github.com/user-attachments/assets/b3ebaabf-c720-4017-ac6c-28a051a1ab40)

article과 section은 혼동하기 쉽다. `article`은 독립적으로 보여줄 수 있는 문서나 글을 묶는 단위이다. 반면, `section`은 문서 내에서 관련된 주제로 묶는 영역의 단위이다. 예를 들어, 이 포스팅 자체는 `article`에 해당하고, Semantic Markup, 시맨틱 태그의 종류와 같은 각 주제는 section에 해당한다.

**Headings: `<h1>` ~ `<h6>`**

![Headings](https://github.com/user-attachments/assets/4cd5a69c-2a6f-4e26-bf62-40c1dcbe81d1)

`h1`부터 `h6`까지는 제목의 스케일을 표현하기 위한 태그이다. 중요도는 순차적으로 `h1`이 가장 중요하고 갈수록 낮아진다. 폰트 사이즈가 아닌 해딩 태그를 사용하는 이유는 보조 도구를 사용하는 시각 장애인 또는 컴퓨터(검색 엔진)는 각 글씨를 굵기의 정도로 구분하기 힘들기 때문이다.
