**1️⃣ 브라우저 캐시 체크**

브라우저가 DNS를 체크하기 전, 브라우저에 저장된 캐시를 먼저 거치게 됩니다. 캐시(Cache)란 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 저장소를 가리킨다. 이 캐시를 이요하면 다른 처리 없이 빠른 속도로 정보를 읽을 수 있습니다.

캐쉬는 크게 3가지가 있습니다. 첫번째는 브라우저 캐시입니다. 브라우저 캐시는 브라우저나 HTTP 요청을 하는 클라이언트 애플리케이션에 의해 내부 디스크에 이루어지는 캐시입니다. 브라우저 캐시는 HTTP 캐시라고 불리기도 합니다. 예를 들어, google.com에 방문한 기록이 브라우저 캐시에 남아있다면, 구글에 빠르게 접근할 수 있는 내용들이 들어가있습니다.

두번째는 OS캐시입니다. 브라우저 캐시에서 관련 기록을 찾을 수 없다면, OS캐시에 살펴보게 됩니다. OS캐시는 운영체제 안에 있는 캐시로 *systemcall*을 통해 그 내용에 접근할 수 있습니다.

세번째는 라우터 캐시입니다. OS캐시에도 저장된 정보를 확인하지 못하면, 라우터 캐시를 확인하게 됩니다. 라우터란, 쉽게 생각해서 공유기를 생각하면 됩니다. 라우터에도 DNS 내용을 저장하기 때문입니다.

마지막은 ISP캐시입니다. ISP캐시는 Internet Service Provider의 약자로 한국에서 인터넷을 제공하는 회사를 생각하면 됩니다.

**2️⃣ DNS로 IP 주소 획득**

모든 캐시를 확인했는데 IP주소를 찾을 수 없다면, ISP의 DNS 서버에 DNS 쿼리를 보내야 합니다. 다시말해, ISP의 DNS 서버가 호스팅하고 있는 서버의 IP주소를 찾기 위해 DNS 쿼리를 날립니다. 즉, DNS 쿼리를 보내는 목적은 DNS 서버들을 검색해서 해당 사이트의 IP 주소를 찾기 위함입니다. IP주소를 찾을때까지 DNS 서버에서 DNS 서버를 오가며 에러가 나기 전까지 계속해서 반복적으로 검색합니다. 이를 recursive search라고 합니다.

DNS recursor는 네임서버들에게 물어 올바른 IP주소를 찾는데 책임이 있다. 네임서버는 도메인 이름 구조에 기반해서 주소를 검색하게 됩니다. IP주소 검색은 아래 이미지의 과정을 거치게 됩니다.

![dns](https://github.com/user-attachments/assets/64e20910-5eaa-4016-b765-ffa614095e88)

1. DNS recursor가 root name server에 연락
2. .com 도메인 name server로 리다이렉트
3. `google.com` name server로 리다이렉트
4. 최종적으로 DNS기록에서 `www.google.com`에 매칭되는 IP주소 찾기
5. 찾은 주소를 DNS recursor로 보내기

이 모든 요청들과 DNS recursor, IP주소는 작은 데이터 팻킷을 통해 보내집니다. 원하는 DNS기록을 가진 DNS서버에 도달할 때까지 클라이언트 ↔︎ 서버를 오가는 과정을 거칩니다.

DNS에 대해 좀 더 자세히 알고싶다면 👉🏻 [](https://jay-h-blog.vercel.app/posts/WebCS/internet-network-dns, "DNS")

**3️⃣ 브라우저가 TCP/IP 프로토콜을 사용해 서버에 연결**

위 과정을 통해 IP주소를 알게 되었으면, TCP/IP를 사용해 서버에 연결하기 위한 신호를 보냅니다. 이 과정에서 TCP는 데이터를 잃지 않고 잘 보내기 위해 사용되며 IP는 주소에 알맞게 보내기 위한 역할을 수행합니다.

![frame&packet](https://github.com/user-attachments/assets/b3e34e58-49c9-4528-b171-0f2048b557d0)

TCP 연결을 하기 위해 3 way handshaking을 사용합니다. 3 way handshaking은 클라이언트와 서버의 연결성을 안정적으로 확보하기 위한 방법입니다.

![3wayhandshaking](https://github.com/user-attachments/assets/828a0556-005a-46fa-ad6c-c92e3b586caf)

Packet, IP, TCP등에 대해 좀더 자세히 알고싶다면 👉🏻 [](https://jay-h-blog.vercel.app/posts/WebCS/internet-network-ip, "IP") [](https://jay-h-blog.vercel.app/posts/WebCS/internet-network-tcp, "TCP") [](https://jay-h-blog.vercel.app/posts/WebCS/internet-network-port, "PORT")

**4️⃣ Firewall & Https/SSL**

TCP를 연결하는 중, Firewall과 SSL이라고 하는 접근 제한 방법이 있습니다. Firewall은 방화벽으로 불리며, 사용자가 사전에 정의한 정책을 기반으로 시스템에 대한 악의적인 접근을 차단하고 제어하기 위해 사용됩니다. SSL 또는 HTTPS는 취약점 보완으로 보안이 향샹된 웹 통신을 하기 위함입니다.

이 과정을 통해 우리가 구글에 접근하는 것이 올바른 방식을 통해 접근하는지 검증합니다.

**5️⃣ Load balancer**

요즘은 Load balancer를 거치게 됩니다. Load balancer를 사용하는 이유는 구글이 컴퓨터 한대로 서비스를 제공하지 않기 때문에 트래픽을 잘 측정하고 여러대의 서버 중 트래픽을 받을 수 있는 서버에 전달하기 위함입니다. 이를 통해, 트래픽이 망가지거나 지연되지 않게 조절해줍니다.

**6️⃣ 웹서버**

TCP 연결이 완료된 후, 클라이언트는 GET 요청을 통해 서버에 웹페이지를 요구하게 됩니다. GET 요청 시에, 데이터를 보내게 되는데 그 데이터는 `www.google.com` 을 보내달라는 신호와 함께 전달 됩니다. 이 요청에는 브라우저 버전과 종류, 쿠키, 사용자의 정보 등의 내용이 함께 보내지게 되며, 구글은 사용자에게 필요한 내용을 요청한 방식에 맞춰 응답하게 됩니다.

---

[](https://brunch.co.kr/@seungjoonlernnx/100)

[](https://velog.io/@eassy/www.google.com%EC%9D%84-%EC%A3%BC%EC%86%8C%EC%B0%BD%EC%97%90%EC%84%9C-%EC%9E%85%EB%A0%A5%ED%95%98%EB%A9%B4-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-%EC%9D%BC)
