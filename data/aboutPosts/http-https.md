**1️⃣ HTTP란 무엇인가?**

HTTP는 Hyper Text Transition Protocol의 약자로, 네트워크를 통해 데이터를 전송하는 데 사용되는 프로토콜이다. 다른 말로, HTTP는 정보를 표현하기 위한 규정된 순서와 구문이다. 웹 사이트 콘텐츠 및 API 호출을 포함하여 인터넷을 통해 전송되는 대부분의 정보는 HTTP 프로토콜을 사용한다.

HTTP 메세지에는 요청(Request)와 응답(Response)라는 주요한 두가지 유형이 존재한다.

##### HTTP 요청

간단하게 말하자면, HTTP Request는 한 컴퓨터가 무언가를 전달하기 위해 다른 컴퓨터로 보내는 정보 패킷이다. 핵짐적으로 HTTP요청은 클라이언트가 서버로 보내는 이진 데이터 패킷이다. HTTP 요청은 사용자가 웹과 상호 작용할 때 사용자의 브라우저에서 생성된다.

HTTP Request는 아래와 같은 부분을 포함하고 있다.

1. 요청(Reqeust) 라인
2. 헤더(0개 이상)
3. 본문(optional)

##### 요청 라인

![요청라인](https://github.com/user-attachments/assets/abb6f17a-9256-4831-aab3-fe309ff262b6)

요청 라인에는 요청 URI와 HTTP 프로토콜, 메서드 유형(GET, PUT, DELETE, ...etc)이 포함되어 있다. 요청 라인은 요청 섹션의 첫 번째 줄에서 확인할 수 있다. 요청 라인의 구성 순서는 1)요청의 메서드 유형, 2)URI, 3)HTTP 프로토콜로 이루어져 있다.

---

[](https://www.cloudflare.com/ko-kr/learning/ssl/why-is-http-not-secure/)

[](https://testmanager.tistory.com/346)
