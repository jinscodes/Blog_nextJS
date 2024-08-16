**1️⃣ REST란?**

REST(Representational State Transfer)의 약자로 자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미합니다. 구체적으로, REST는 자원 기반 구조(ROA, Resource Oriented Architecture)가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미합니다. 또한, REST는 HTTP URI를 통해 자원을 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미합니다. 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍쳐 스타일입니다. REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나입니다.

웹사이트의 이미지, 텍스트, DB 내용 등 모든 자원에 대한 고유한 ID인 HTTP URI가 부여됩니다.

> 💡 여기서 CRUD란 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말입니다. REST에서의 CRUD Operation 동작은 아래와 같습니다.

상태 또는 정보 전달과 관련하여 데이터가 요청 되어지는 시점에서 자원의 상태 또는 정보를 전달합니다. 이때, 자원의 형태는 주로 JSON이나 XML형태의 데이터를 주고 받는 것이 일반적입니다. 월드 와이드 웹(www)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식입니다.

**2️⃣ REST의 구성요소**

REST는 크게 3가지로 구성되어있습니다: 자원, 자원에 대한 행위, 자원에 대한 행위의 내용. 자원은 HTTP의 URI에 해당합니다. 자원에 대한 행위는 HTTP Method에 해당합니다. 자원에 대한 행위의 내용은 HTTP Message Pay Load에 해당합니다.

자원(Resource): URI

- 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재합니다.
- HTTP URI로 자원을 구별합니다.
- Client는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청합니다.

행위(Verb): HTTP Method

- HTTP 프로토콜의 Method를 사용합니다
- HTTP 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공합니다

표현(Representation of Resource)

- Client가 자원의 상태(정보)에 대한 조작을 요청하면 Server는 이에 적절한 응답을 보냅니다.
- REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러 형태로 표현될 수 있습니다.
- 보통, JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적입니다.
