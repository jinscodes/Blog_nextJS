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

사용자가 브라우저를 통해 웹사이트에 접속하면, 서버로 부터 HTML, CSS 등 웹 사이트에 필요한 리소를 다운로드 받습니다. 만약, 다운로드 받기 이전 과정에 대해 궁금하다면 👉🏻 [](https://jay-h-blog.vercel.app/about/search-process, "브라우저 주소창에 google.com을 치면 발생하는 일") 이 포스트를 확인해주세요. 주요한 렌더링 경로를 총 다섯가지 단계로 설명합니다.

**1️⃣ DOM 트리 생성**

이 과정은 HTML 코드가 DOM 트리로 변환되는 과정입니다.

![dom-tree-process](https://github.com/user-attachments/assets/092c8a9a-a48f-4be1-8b83-5118f971accd)

우선, 변환의 과정을 겪게 됩니다. 브라우저가 HTML의 원시 바이트를 읽어와서, HTML에 정의된 인코딩에 따라 개별 문자로 변환합니다. 그 후, 토큰화가 진행됩니다. 토큰화는 브라우저가 문자열을 W3C 표준에 지정된 고유 토큰으로 변환합니다. 토큰으로 변환 한 후, 방출된 토큰은 해당 속성 및 규칙을 정의하는 객체로 변환됩니다. 마지막으로, HTML 마크업에 정의된 여러 태그 간의 관계를 해석해서 트리 구조로 연결하여 DOM을 생성합니다. DOM 노드의 개수가 많아질수록, DOM 트리를 만드는데 시간이 오래 걸립니다.

브라우저는 HTML 마크업을 처리할 때마다 위 모든 단계를 수행합니다.

> **1️⃣-2️⃣ 프리로드 스캐너(Preload scanner)**

> 브라우저가 DOM 트리를 만드는 프로세스는 메인 쓰레드를 차지합니다. 즉, 프리로드 스캐너는 사용 가능한 컨텐츠를 분석하고 CSS나 Javscript, 웹 폰트와 같은 우선순위가 높은 자원을 먼저 요청합니다. 이 프리로드 스캐너 덕분에 브라우저의 구문 분석기가 외부에서 자원에 대한 참조를 찾고 요청하기까지 기다리지 않아도 됩니다. 왜냐하면 프리로드 스캐너가 미리 자원을 요청하기 때문입니다. 그래서 구문 분석기가 요청되는 자원에 도달할 쯤이면 이미 자원을 전송받고 있거나 전송받은 후일 것입니다. 또한, 프리로드 스캐너가 제공하는 최적화는 블록킹을 최소화 시켜줍니다.

**2️⃣ CSSOM 트리 생성**

HTML 마크업 내에 직접 스타일을 선언하는 inline으로 스타일을 선언할 수도 있지만, head 태그에 외부 css파일을 참조하거나, head 태그 내부에 style 태그를 정의할 수도 있습니다. HTML과 마찬가지로 외부 css 파일에 정의된 스타일과 style 태그에 작성된 스타일을 브라우저가 이해하고 처리할 수 있는 형식으로 변환해야합니다.

DOM 트리를 생성하는 것과 마찬가지로, CSSOM 트리를 생성해야합니다. 다만, 둘은 각각의 독립적인 자료구조 입니다.

![cssom-tree](https://github.com/user-attachments/assets/05797019-e640-425b-87d3-0bb4928f753f)

위 구조를 거쳐서 최종적으로 CSSOM이라는 트리 구조가 만들어집니다. 참고로 CSSOM은 CSS Object Model의 약자입니다.

DOM 트리 생성 후, CSSOM 트리 생성까지 완료되면 아래와 같은 구조가 완성 됩니다. 브라우저는 CSS 규칙을 이해할 수 있고 작업을 진행할 수 있도록 스타일 맵으로 변환합니다. 브라우저는 CSS에 있는 각각의 규칙을 읽고, 트리 노드를 만듭니다. CSS 선택기에 기반해서 부모 노드, 자식 노드, 형제 관계의 노드를 만듭니다.

![dom-cssom](https://github.com/user-attachments/assets/cf2a07a1-ff5c-4cdf-9c5e-246099eb39bf)

> **2️⃣-1️⃣ 다른 작업들**

> **Javascript 컴파일**  
> CSS가 분석되고 CSSOM 트리가 생성되는 동안, 프리 스캐너가 작동됩니다. 이 프리 스캐너 덕분에 Javascript 파일 같은 다른 자원도 함께 다운로드 됩니다. Javascript는 해석, 컴파일, 구문 분석 및 실행됩니다. 스크립트는 추상 구문 트리로 구문 분석됩니다. 일부 브라우저 엔진은 추상 구문 트리를 인터프리터에게 넘깁니다. 그 결과 메인 쓰레드에서 실행되는 바이트코드가 생성됩니다. 이것이 Javascript 컴파일 과정입니다.

> **접근성 트리 구축**  
> 브라우저는 접근성 트리를 만듭니다. 보조 장치는 이 트리를 이용해 내용을 분석하고 해석합니다. 접근성 객체 모델(AOM)은 DOM의 의미 버전입니다. 브라우저는 DOM이 업데이트 될 때 접근성 트리도 업데이트 합니다. 접근성 트리는 보조 기술 자체적으로 수정될 수는 없습니다.

**3️⃣ 렌더링(Rendering) 트리 생성**

렌더링 과정에는 스타일, 레이아웃, 페인트 그리고 때때로 합성이 포함됩니다. CSSOM과 DOM 트리는 구문 분석되는 과정에서 생성되고 렌더 트리로 합성됩니다. 렌더 트리는 보이는 요소의 레이아웃을 계산을 합니다. 그러고 나서 요소가 화면에 페인트됩니다. 어떤 경우에는 컨텐츠가 자신만의 레이어를 가지도록 조작되고, 나중에 합성됩니다. 화면의 일부분을 CPU 대신 GPU가 그리면서 메인 쓰레드의 부담이 줄고 성능이 향상됩니다. 렌더링 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함됩니다.

렌더링 트리 생성 단계는 DOM과 CSSOM을 합쳐 렌더 트리를 만드는 것입니다. 계산된 스타일 트리(다른 말로 렌더 트리)는 DOM 트리의 루트부터 시작하여 눈에 보이는 노드를 순회하며 만들어집니다.

![rendering-tree](https://github.com/user-attachments/assets/74abb400-8c91-4e6f-9982-c10330cc87bf)

**4️⃣ 레이아웃 단계**

렌더 트리가 한 번 만들어지고 나면, 레이아웃이 시작됩니다. 처음 노드의 사이즈와 위치가 결정되는 것을 레이아웃 이라고 부릅니다. 이후에 노드의 크기와 위치를 다시 계산하는 것은 리플로우 라고 부릅니다.

레이아웃 단계에서는 렌더 트리를 기반으로 각 노드의 도형 값을 계산하기 위해 레이아웃을 실행하는 것입니다. 레이아웃은 렌더 트리에 있는 모든 노드의 너비, 높이, 위치를 결정하는 프로세스입니다. 즉, 레이아웃 단계에서는 뷰포트 내에서 각 요소의 정확한 위치와 크기를 정확하게 캡처하는 Box 모델이 출력됩니다 (웹 페이지에서 대부분은 박스 형태입니다.). 이 과정에서 모든 상대적인 측정값은 화면에서 절대적인 픽셀 값으로 변환 됩니다.

![layout](https://github.com/user-attachments/assets/77bf5a83-f609-4182-921d-de003e0d1387)

**5️⃣ 페인팅 단계**

마지막으로 렌더링 트리의 각 노드를 화면의 실제 픽셀로 변환합니다. 레이아웃 단계에서 모든 계산이 완료가 되면, 화면에 요소들을 그리게 됩니다. 이 단계를 _페인팅_ 또는 *래스터화*라고 합니다.

**리플로우 (Reflow)**  
사용자가 웹 페이지에 처음 접속을 하면, 렌더링 과정을 거쳐서 화면에 모든 요소가 그려지게 됩니다. 이후에 사용자는 다양한 액션을 수행하게 되고, 여기서 발생되는 이벤트로 인해서 새로운 HTML 요소가 추가되거나, 기존 요소의 스타일이 바뀌거나 하는 변경이 일어나게 됩니다.이런 변경을 통해 영향을 받게되는 모든 노드에 대해서 렌더링 트리 생성과 레이아웃 과정을 다시 수행하게 됩니다. 이러한 과정을 리플로우라고 합니다.

**리페인트 (Repaint)**  
리플로우는 단지 변경사항을 반영하기 위해서 렌더링 트리를 생성하고 레이아웃 과정을 다시 수행하는 것이고, 실제 이 결과를 화면에 그려지게 하기 위해서는 다시 페인팅 단계를 수행해야합니다. 이 과정을 리페인트라고 합니다.

> 💡 기존 요소에 변경사항이 생겼다고 무조건 리플로우-리페인트가 일어나는 것은 아닙니다. 레이아웃이 변경되지 않는 단순한 색 변경과 같은 변경사항은 리플로우 없이 바로 리페인트가 이뤄지게 됩니다. 다만, 리플로우가 일어나면 반드시 리페인트가 일어납니다.

리플로우가 일어나는 대표적인 속성들입니다

position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow

리페인트만 일어나는 대표적인 속성들입니다

background, color, text-decoration, border-style, border-radius

---

[](https://developer.mozilla.org/ko/docs/Web/Performance/Critical_rendering_path)

[](https://velog.io/@zaman17/%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91%EB%8C%80%EB%B9%84-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%88%9C%EC%84%9C%EC%99%80-%EC%9B%90%EB%A6%AC)

[](https://developer.mozilla.org/ko/docs/Web/Performance/How_browsers_work)

[](https://medium.com/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95-5c01c4158ce)
