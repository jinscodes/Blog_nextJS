**1️⃣ SPA란?**

예전에는 하나의 HTML에 전달되는 정보의 양이 적었기 때문에, 작은 상호작용에도 새로운 페이지를 서버에 요청해서 렌더링 해주는 방식을 사용했다. 하지만, 한 페이지에서 보여주는 정보의 양이 과거에 비해 굉장히 많아져서, 매번 서버에서 새로운 페이지를 요청 및 응답받고 렌더링 해주는 것이 비효율적이게 되었다. 이러한 문제를 해결하기 위해, Single Page Application이라는 일명 SPA라는 것이 등장하게 되었다.

SPA는 이름에서 알 수 있듯 단일 페이지 어플리케이션을 의미한다. 어떠한 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 변경해 표시하는 기술이다. 브라우저는 최초에 한번 서버에 요청하여 페이지 전체를 로드하고, 이후부터는 특정 변경사항이 일어나는 부분만 데이터를 바인딩하여 화면에 표시한다. 이러한 동작 방식은 사용자에게 빠른 인터렉션을 제공할 수 있다.

**2️⃣ SPA 단점 및 장점**

SPA도 무적은 아니다. 자바스크립트로 DOM 조작이 빈번하게 일어나기 때문에 브라우저의 성능을 저하한다는 문제가 있다. 이러한 문제를 해결하기 위한 방법으로 Virtual DOM이라는 개념이 생겼다. SPA 프레임워크인 React, Angular, Vue는 대표적으로 Virtual DOM을 이용해 SPA를 구현하는 기술들이다.

##### Virtual DOM

Virtual DOM 트리로 HTML 정보를 저장하고 있다가, 이 트리에 변경이 발생하면 모든 변화를 모아 단 한 번 브라우저를 호출해 화면을 갱신하는 방법을 사용한다. 이러한 방법을 통해 브라우저와의 불필요한 상호작용을 줄이면서 사용자에게 빠른 인터렉션을 제공할 수 있게 된다.

![virtualDOM](https://github.com/user-attachments/assets/96b5b2d1-6652-448b-a679-0e3f0dcb2188)

정리하자면, 화면에 필요한 부분의 데이터만 받아서 렌더링하므로 처리 과정이 효율적이며 속도가 빠르다. 다만, 처음 화면을 로딩할 때, 모든 화면의 정보를 모두 다운로드 하기 때문에 로딩 속도가 다소 느리다. 또한, SEO에 불리하고, 자바스크립트의 빈번한 DOM 조작으로 브라우저의 성능이 저하된다.

**3️⃣ CSR란?**

CSR은 Client Side Rendering의 약자로 클라이언트 측에서 페이지를 렌더링하는 방식을 말한다. CSR은 서버로 부터 받아온 데이터를 클라이언트에서 JavaScript를 통해 동적으로 조작하여 렌더링한다. 즉, 서버에서 받은 데이터를 기반으로 클라이언트인 브라우저가 화면을 그리는 주체가 된다.

사용자가 홈페이지를 접속할 때, 클라이언트(브라우저)는 이를 확인하고 서버에 요청을 보낸다. 서버는 빈 HTML을 클라이언트에 전달한다. 빈 HTML 파일에는 JS 링크가 포함되어 있다. 이 HTML을 전달받은 클라이언트는 해당 화면을 그리고 스크립트를 다운로드 하여 최종 화면을 사용자에게 보여준다. 사용자가 페이지 내에서 상호작용을 하는 경우 클라이언트 내에서 페이지를 요청하고 수행한다.

**4️⃣ CSR 장점 및 단점**

CSR은 네이티브 앱과 비슷한 빠른 인터렉션을 구현할 수 있다. 이러한 인터렉션들을 브라우저에게 담당시키기 때문에 서버 트래픽이 감소되고 사용자에게 더욱 더 빠른 인터렉션을 제공한다. 또한, CSR은 사용자와의 인터렉션 과정에서 새로고침이 발생하지 않기 때문에 네이티브 앱과 비슷한 경험을 줄 수 있다.

다만, CSR을 사용하게 되면 첫 페이지를 로딩하는데 걸리는 속도가 SSR에 비해 다소 느리다는 단점이 있다. 페이지를 처음 서버로 부터 받아올 때, 전체 페이지에 대한 모든 문서 파일을 응답받기 때문에 당연히 속도가 상대적으로 느리다. 뿐만 아니라, CSR을 하면 SEO에 불리하다. 포털사이트 검색엔진 크롤러가 웹사이트에 대한 데이터를 제대로 수집하지 못하는 경우가 발생하기 때문이다. 그 이유는 서버에 빈 HTML 파일만 올라가 있기 때문에 크롤러가 해당 사이트를 제대로 수집하지 못하는 경우가 발생하기 때문이다. 이를 해결하기 위해서는 별도의 보완작업이 필요하다.

**5️⃣ SSG란?**

SSG는 Static Site Generation의 약자로 정적 사이트 생성을 의미한다. SSG는 빌드 시 리액트앱을 HTML로 미리 렌더링한다. 즉, SSG는 SSR처럼 전체 프로세스가 각 사용자 요청에 의해 수행되는 것이 아닌 빌드 시간에 수행된다. 그렇기 때문에 SSG가 SSR보다 더 빠르다.

SSG는 특정 사용 사례를 제공하기 위해 존재한다. 그리고, HTML로 리액트에 내장된 동적 페이지를 제공한다.

**6️⃣ SSG 장점 및 단점**

SSG는 SEO 최적화에 장점을 가진다. 검색 엔진 최적화는 크롤러가 페이지를 쉽게 인덱싱 할 수 있게 하는 것인데 SSG는 이것에 큰 장점을 가진다. 또한, 위에서 말한 것처럼 속도가 SSR에 비해 빠르다. 브라우저가 사전에 많은 처리를 하지 않아도 되기 때문에 HTML 페이지를 제공하는 것이 사용자에게 더 빠른 속도를 제공한다. 마지막으로, HTML페이지를 구축해 놓으면, CDN 캐싱에 용이하다. 페이지가 글로벌하게 사용자에게 저장되므로 훨씬 빠르게 엑세스 할 수 있다. 모든 요청에 대해 서버가 페이지를 렌더링하고 응답하는 것을 기다릴 필요 없이 CDN에서 페이지를 수신하기만 하면 되기 때문에 계산 리소스와 비용을 절약할 수 있다.

하지만, 장점만 있는 것은 아니다. 사용자별 데이터를 보여주기에 어려움이 있다. 서버에서 페이지를 렌더링한 후 사용자에게 보여주기 때문에, 사용자에 따라 다른 정보를 제공하는 것이 불가능하다. 또한, 데이터가 정적이다. 앞선 문제와 비슷한 맥락으로, 빌드할 때 렌더링이 함께 되기 때문에 데이터가 정적이다.

즉, 데이터가 가변적으로 변하는 웹사이트나 사용자들이 각자 다른 정보를 봐야하는 웹사이트에는 적합하지 않다.

**7️⃣ ISR이란?**

![ISR](https://github.com/user-attachments/assets/33883dc0-dbb1-4b53-bc9c-d53db9c6f9be)

이미 빌드된 웹에 정적 페이지를 새롭게 추가하거나, 업데이트 할 수 있게 해주는 것이 ISR이다. SSG는 빌드시에만 정적 페이지를 생성한다는 특징이 있지만, ISR은 빌드시에만 생성하는 것이 아니라 특정 시간마다 정적 페이지를 재생성할 수 있다.

**8️⃣ ISR 장점 및 단점**

ISR은 SSG의 장점을 유지한다. 이에 더해, 주기적인 업데이트를 통해 페이지를 특정 시간마다 갱신한다. 이로 인해, 사용자는 정적 페이지임에도 불구하고 조금 더 최신의 데이터를 꾸준히 업데이트 받아 볼 수 있다.

하지만, 특정 시간마다 꾸준히 페이지를 갱신하다고 해도, 실시간으로 반영되는 데이터가 아니기 때문에 사용자에게 실시간 데이터를 보여줄 수 없다. 또한, 사용자별 데이터를 보여주기도 힘들다.

---

[](https://www.startupcode.kr/company/blog/archives/11)

[](https://adjh54.tistory.com/53)

[](https://www.startupcode.kr/company/blog/archives/12)

[](https://velog.io/@lky5697/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs)

[](https://velog.io/@seeyong_0/Next.js-SSG-%ED%8A%B9%EC%A7%95-%EC%9E%A5%EB%8B%A8%EC%A0%90)
