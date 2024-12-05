## localhost? 127.0.0.1?

When the web developers did the local debugging, they usually saw the **localhost**. For example, if F/E developers executed `npm run` and open the web page, there is `http://localhost:xxx/index.html` on the url.

Unconciously, they didn't use it without thinking about it. But, that didn't mean that it's not important.

### localhost

![localhost](https://github.com/user-attachments/assets/ebe83f0e-b4b5-4e8d-9b30-2b724cc83c56)

##### From Domain Name to Program

To understand local fully, we need to know the way to access the program through domain name.

Take Google as an example.

**1️⃣ If you enter `google.com`, DNS will first look up the `google.com` IP address**

> **Why IP address?**

> If someone sends me a package, the package form will include the address, name, and recipient of the apartment.

> The courier delivery process considers the address as the destination to route, and eventually reaches the recipient.

> Similarly, in networking, domain names act like apartment names and IP addresses act like physical addresses.

> **Role of DNS**

> Like a repository, it serves to map apartment addresses and apartment names.

> Some domains may not be registered and an IP address may not be found, and in other cases, there may be multiple IP addresses.

> Domain service providers typically provide DNS services to register the domain and its IP address with DNS.

> **Where does the IP address from?**

> For external services, a public IP address is required, which is typically provided by Internet service providers.

> If my house uses SKB to use the Internet, I am requesting to allocate IP address to SKB gateway server.

ㅤ
ㅤ

**2️⃣ Obtain an IP address, package it in a packet, and send it over the network**

At this time, it goes through the process of exchanging and complying with the rules (protocols) between users.

> **What is the port that developers are talking about?**

> A computer can run and distribute multiple programs. So, what kind of Packet should I get? I'm thinking.

> This is when the Port appears. Each program is associated with one or more Ports and prevents overlap.

> If you specify a port in the request, it will lead to the correct program.

> **Do we then designate a port when we access Google?**

> I don't specify it separately!

> This is because the default port, HTTP number 80 and HTTPS number 443, are used if not specified.

> It is essential to inform you of a port at the start of the program, but some automatically select a port that is not being used

---

[](https://devocean.sk.com/blog/techBoardDetail.do?ID=165818&boardType=techBlog)

[](https://www.naukri.com/code360/library/127-0-0-1-localhost)
