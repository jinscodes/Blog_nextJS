To understand the internet network, we should know several important knowledge.   

(1) **Internet Communication**   

(2) **IP(Internet Protocol)**   

(3) **TCP, UDP**   

(4) **PORT**   

(5) **DNS**   

## Internet Communication: How do computers communicate on the Internet?
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/39ba4942-53cd-4fd3-a378-b7451ba90b41)
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a30a14e7-c14a-4640-9131-09b3d08b2988)

Our programs looks like the above images. There are **client** and **server** computers, and there is an **internet** between computers. So, if **client** want to send a message "Hello, World", the message go through the internet nodes to reach the **server**.

During pass the nodes on the internet, there are so many things or situations that disract the commnunication between client and server, such as problems with satellite or submarine cable. To send a message (data) from client to server safely, fow concepts were developed.

## IP ( Internet Protocol )
To handle the communication properly, minimal rules are needed. At this point, IP is used for it. Below image, `100.100.100.1` and `200.200.200.2` are refered to the IP.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b3b59a9b-6416-4dd9-8924-a3d1af9ff3cb)

### The Role of IP
- Send datas to **specified IP Adress**
- Send datas as a communication unit named **Packet** 

### IP Packet Information
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cf2d61a4-b512-41e0-98bc-def57416fe10)

Before passing the datas to the internet, we need to create **Packet** including origin IP (100.100.100.1), destination IP (200.200.200.2) like an address, and other several information. Surely, there is a data inside the packet.

After making the client packet, it is passed through internet's nodes.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/14088a50-965d-41fc-ae67-6961a138a63e)

Packets go through different nodes of the Internet. Each node compares the target IP contained in the packet with the IP of that node. If the IP of the node and the IP of the packet are different, the packet is forwarded to another node until the IP of the packet matches the IP of the node.

After the server receive the packet from the client, server do the same process toward the client. Server creates the packet consisting of origin IP, destination IP, datas, and etc... The server then forwards the packets to the Internet. 

❗️ There may be a difference between the node that goes through wh en the client sends the packet to the server and the node that goes through when the server sends the packet to the client.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/66155d4a-ed4a-449b-9eac-49118caa2a09)

## Limitation of IP Protocol
**Disconnectivity**   
- Send packets even if there is no destination to receive them or if they are out of service

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2252c109-6187-4caa-946e-f3d226915d2c)

**Unreliable**
- What if the packet disappears in the middle?
- What if the packets don't come in order?

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/108e8319-7f40-4342-838f-8951a8cb7c1c)
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c3afedb-f0d7-4711-8346-69246a1a3d63)


**Program Classification**
- What if there are more than one application communicating on a server using the same IP?

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5c370f56-20d4-426d-b8dc-680371ff5dd0)