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

## So, What's The Differences Between Them?

So, How does the localhost interpreted as 127.0.0.1?

Every computers can use 127.0.0.1 without DNS.

![](https://github.com/user-attachments/assets/8ce8be5c-9bc5-4816-98ec-087fc3150c74)

---

[](https://devocean.sk.com/blog/techBoardDetail.do?ID=165818&boardType=techBlog)

[](https://www.naukri.com/code360/library/127-0-0-1-localhost)
