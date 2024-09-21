**1️⃣ MVC 패턴**

MVC패턴은 Model View Controller의 약자이다. 하나의 애플리케이션, 프로젝트를 구성할 때 그 구성요소를 세가지의 역할로 구분한 패턴이다.

사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가지고 오고 그 데이터를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달한다.

![mvc](https://github.com/user-attachments/assets/f19392b5-d3b8-43db-af7b-893f7bfc8f1f) <MVC를 표현한 로직>

![ModelViewControllerDiagram](https://github.com/user-attachments/assets/e6b27c82-e31d-4836-9ca3-c33ffe4cbbf4) <MVC 패턴 구조>

##### Model

애플리케이션의 정보, 데이터를 나타낸다. DB, 처음 정의하는 상수, 초기화 값, 변수 등을 뜻하며 이러한 데이터 가공을 책임지는 컴포넌트를 말한다. 이런 모델은 다음과 같은 규칙들을 가지고 있다.

1. 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야한다.
2. 뷰나 컨트롤러에 대해서 어떤 정보도 알지 말아야한다.
3. 변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 한다.

다시 말하자면, 1) 모델은 사용자가 편집해야하는 데이터를 모두 보관하고 있어야 하며, 2) 호출받은 데이터의 처리만 수행하는 것 이외에는 뷰나 컨트롤러의 내부속성값을 참조하지 않아야 한다. 그리고 3) 변경이나 가공이 수행된 데이터를 컨트롤러 혹은 다른 누군가에게 던져주어야 한다.

---

[](https://m.blog.naver.com/jhc9639/220967034588)

[](https://velog.io/@whitecloud94/MVC-%ED%8C%A8%ED%84%B4-Model-View-Controller)
