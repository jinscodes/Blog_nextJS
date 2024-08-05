#### ✅ 브라우저의 기본 구조

![browser_structure](https://github.com/user-attachments/assets/09bce1ce-2b78-4b83-9232-f22b832a66c7)

1️⃣ 사용자 인터페이스

주소 표시줄, 이전/다음 버튼, 북마크 등 요청한 페이지를 보여주는 창을 제외한 나머지 모든 부분

2️⃣ 브라우저 엔진

사용자 인터페이스와 렌더링 엔진 사이 동작을 제어

3️⃣ 렌더링 엔진

요청한 콘텐츠를 표시

예를 들어, HTML을 요청하면 HTML과 CSS를 파싱하여 화면에 표시해줌.

4️⃣ 통신

HTTP 요청과 같은 네트워크 호출에 사용

이것은 플랫폼 독립적인 인터페이스에 해당함. 각 플랫폼의 하부에서 실행 됨.

5️⃣ UI 백엔드

콤포 박스와 창 같은 기본적인 장치를 그림.

플랫폼에서 명시하지 않은 일반적인 인터페이스로서, OS 사용자 인터페이스 체게를 사용함.

6️⃣ 자바스크립트 해석기

자바스크립트 코드를 해석하고 실행

7️⃣ 자료 저장소

자료를 저장하는 계층

쿠키를 저장하는 것과 같이 모든 종류의 자원을 하드 디스크에 저장할 필요가 있음. HTML5 명세에는 브라우저가 지원하는 웹 데이터 베이스가 정의 되어 있음.

> 💡 크롬은 대부분의 브라우저와 달리 각 탭마다 별도의 렌더링 엔진 인스턴스를 유지함.

여기서 렌더링 엔진이 요청받은 내용을 브라우저 화면에 표시하는 일을 수행함.

---

#### ✅ 렌더링 엔진의 동작 과정

![rendering-engine-process](https://github.com/user-attachments/assets/414027df-c74f-4f31-b6b5-6838557ecc56)

1️⃣ HTML 문서를 파싱

2️⃣ 콘텐츠 트리 내부에서 태그를 DOM노드로 변환

3️⃣ 외부 CSS 파일, 함께 포함된 스타일 요소 파싱

4️⃣ 스타일 정보와 HTML 표시 규칙으로 렌더 트라라고 부르는 또 다른 트리 생성

---

#### ✅ 렌더링 렌더링 과정

사용자가 브라우저를 통해 웹사이트에 접속하면, 서버로 부터 HTML, CSS 등 웹 사이트에 필요한 리소를 다운로드 받습니다. 만약, 다운로드 받기 이전 과정에 대해 궁금하다면 👉🏻 [](https://jay-h-blog.vercel.app/about/search-process, "브라우저 주소창에 google.com을 치면 발생하는 일") 이 포스트를 확인해주세요.

**1️⃣ DOM 트리 생성**

이 과정은 HTML 코드가 DOM 트리로 변환되는 과정입니다.

![dom-tree-process](https://github.com/user-attachments/assets/092c8a9a-a48f-4be1-8b83-5118f971accd)

우선, 변환의 과정을 겪게 됩니다. 브라우저가 HTML의 원시 바이트를 읽어와서, HTML에 정의된 인코딩에 따라 개별 문자로 변환합니다. 그 후, 토큰화가 진행됩니다. 토큰화는 브라우저가 문자열을 W3C 표준에 지정된 고유 토큰으로 변환합니다. 토큰으로 변환 한 후, 방출된 토큰은 해당 속성 및 규칙을 정의하는 객체로 변환됩니다. 마지막으로, HTML 마크업에 정의된 여러 태그 간의 관계를 해석해서 트리 구조로 연결하여 DOM을 생성합니다.

브라우저는 HTML 마크업을 처리할 때마다 위 모든 단계를 수행합니다.

**2️⃣ CSSOM 트리 생성**

HTML 마크업 내에 직접 스타일을 선언하는 inline으로 스타일을 선언할 수도 있지만, head 태그에 외부 css파일을 참조하거나, head 태그 내부에 style 태그를 정의할 수도 있습니다. HTML과 마찬가지로 외부 css 파일에 정의된 스타일과 style 태그에 작성된 스타일을 브라우저가 이해하고 처리할 수 있는 형식으로 변환해야합니다.

DOM 트리를 생성하는 것과 마찬가지로, CSSOM 트리를 생성해야합니다.

![cssom-tree](https://github.com/user-attachments/assets/05797019-e640-425b-87d3-0bb4928f753f)

위 구조를 거쳐서 최종적으로 CSSOM이라는 트리 구조가 만들어집니다. 참고로 CSSOM은 CSS Object Model의 약자입니다.

DOM 트리 생성 후, CSSOM 트리 생성까지 완료되면 아래와 같은 구조가 완성 됩니다.

![dom-cssom](https://github.com/user-attachments/assets/cf2a07a1-ff5c-4cdf-9c5e-246099eb39bf)

**3️⃣ 렌더링(Rendering) 트리 생성**

DOM 트리와 CSSOM 트리가 완성되면, 이 둘을 결합한 렌더링 트리를 생성하게 됩니다. 렌더링 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함됩니다.

![rendering-tree](https://github.com/user-attachments/assets/74abb400-8c91-4e6f-9982-c10330cc87bf)

---

[](https://velog.io/@zaman17/%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91%EB%8C%80%EB%B9%84-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%88%9C%EC%84%9C%EC%99%80-%EC%9B%90%EB%A6%AC)

[](https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work)

[](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)
