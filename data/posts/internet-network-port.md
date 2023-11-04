## PORT
> A port is a numbered endpoint on a computer or device used to facilitate data exchange between different devices or services, ensuring proper routing and delivery of information. 

> Ports are essential for managing network traffic and enabling various applications to communicate effectively.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b9afbd3f-231f-4b10-92a7-949e49795e5e)

A port, in the context of networking and communication protocols, is a numbered endpoint on a computer or device used to facilitate data exchange between different devices or services, ensuring proper routing and delivery of information. Ports are essential for managing network traffic and enabling various applications to communicate effectively.

## Origin Port & Destination Port

As in the image above, the client IP uses the starting port and the destination port to solve the problem that arises when each data packet must be sent to multiple server IPs.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2b048077-3da6-4cf3-be49-d4327484ce0d)

The origin port and destination port are included in TCP. In other words, there is a concept of the PORT with the concept of the IP in the TCP/IP packet. IP is for finding the destination server, and the port is for dividing and separating the applications in the server.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/aebb4180-6dc9-40ea-84b5-a0343a34d2e2)

For example, as shown in the picture above, the client has 8090 ports to the game server's port 11220, 21000 ports to the messenger server's port 32202, and the last 100100 ports to the web browser server's port 80. Data is transmitted to the corresponding Ip and port.