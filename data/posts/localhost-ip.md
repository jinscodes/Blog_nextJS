## localhost? 127.0.0.1?

When the web developers did the local debugging, they usually saw the **localhost**. For example, if F/E developers executed `npm run` and open the web page, there is `http://localhost:xxx/index.html` on the url.

Unconciously, they didn't use it without thinking about it. But, that didn't mean that it's not important.

### What is 127.0.0.1 Localhost?

127.0.0.1 is known as localhost or loopback address. At this point, localhost and loopback IP address is a universal home address for all computers. It means that when the computer tries to connect 127.0.0.1, it's connected to itself.

127.0.0.1 is special IP address. This is because unlike we've known that each computer has a unique IP, 127.0.0.1 always points the computer we use.

For exmaple, if we run the sever, my computer tries to connect to the server by visiting **127.0.0.1** on Jay's computer. And then, I run the server and connect to the server on Roise's computer, it also points to **127.0.0.1**.

In other words, the 127.0.0.1 IP allows the machine to communicate with itself. Therefore, localhost establishes a connection to itself used by the same end-user.

> 💡 **NOTE**  
> The most common localhost IP is 127.0.0.1 IP.  
> The IPv4 network standard has provided the range from 127.0.0.1 to 127.255.255.255 for localhost.  
> Unlike IPv4, IPv6 network standard has only one address: 1.

ㅤ
ㅤ

#### How Does a 127.0.0.1 Loopback Work?

On our computer, when we request the localhost in any web browser, it's not forwarded as a typical TCP/IP request. The host computer's operating system manages the request. The connection is made on a local network and connects the hosting computer.

This is the reason it's also called a Loopback address. The request is looped back and connected to the machine making the request.

The below Diagram shows the working of the Loopback address as explained above.

![diagram](https://github.com/user-attachments/assets/7ac3cdf1-3bbe-4915-a168-c1b146f73f4d)

The following message is generated if we have not hosted a server on the machine when we connect through `http://localhost`.

## So, What's The Differences Between Them?

So, How does the localhost interpreted as 127.0.0.1?

Every computers can use 127.0.0.1 without DNS.

![](https://github.com/user-attachments/assets/8ce8be5c-9bc5-4816-98ec-087fc3150c74)

---

[](https://devocean.sk.com/blog/techBoardDetail.do?ID=165818&boardType=techBlog)

[](https://www.naukri.com/code360/library/127-0-0-1-localhost)
