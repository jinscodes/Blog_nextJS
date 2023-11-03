## 4 Layer of the Internet Protocol Stack
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a78b528a-f520-426d-9fd9-f654cb096443)
![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/82bd5d5f-dcce-4765-ba3d-a591dd81ffae)

(1) Program generates a message called HELLO

(2) Forward via SOCKET library

(3) Generating TCP information with message data

(4) Create IP PACKET with TCP data 

## TCP ( Transmission Control Protocol )
> TCP (Transmission Control Protocol) is a reliable, connection-oriented protocol used in computer networks to ensure the accurate and ordered delivery of data between devices.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0ed48680-ca5f-4573-92ee-5a8f2aabc96f)

### TCP Features
- Preferred connection - TCP 3 way handshake (virtual connectivity)
- Data Connection Warranty
- Ensure Order
- reliable protocol
- Currently, most use TCP

## TCP - 3 Way Handshake
TCP uses three-way handshake to establish logical connections between devices. TCP 3 Way Handshake means that before the application that communicates sends datas, the process of the establishing the session with other computers to ensure an accurate transmission by using the TCP/IP protocol

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3e1bc506-9b59-4a82-b6fb-89d8c17b2eb4)

Step 1 (**SYN**): In the first step, the client wants to establish a connection with a server, so it sends a segment with SYN(Synchronize Sequence Number) which informs the server that the client is likely to start communication and with what sequence number it starts segments with   

Step 2 (**SYN + ACK**): Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies the response of the segment it received and SYN signifies with what sequence number it is likely to start the segments with   

Step 3 (**ACK**): In the final part client acknowledges the response of the server and they both establish a reliable connection with which they will start the actual data transfer

## TCP - Data Connection Warranty
Firstly, the client sends datas to the server. After receiving data from the client, the server provides feedback to the client, such as receiving the data well. 

However, if the server has a problem and does not provide feedback to the client, the client may notice that the server has a problem or an error.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5f4d97a9-a64d-4d42-9576-a7055a2c4a94)

## TCP - Ensuring the Order
The client sends packets containing data to the server in order. If a problem occurs in the middle and the packet arrives at the server with the wrong order, the server sends a request to the client to send the packet again from the part where the order was changed.

❗️ Surely, the server can optimize for these sequencing problems, for example, by reordering them on the drive.


![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/eebbd3af-2f2b-4887-bed4-a7af87714f9b)

## UDP ( User Datagram Protocol )
- There are Hardly functions (comparable to white drawing paper)
- Non-preferred connectivity - TCP 3 way handshake ❌
- Data transmission warranty ❌
- Ensuring Order ❌

BUT...

- Simple and Fast

> UDP is similar to IP (just adding some concepts of PORT and CHECKSUM), and requires work at the application level.

---
- `https://www.geeksforgeeks.org/tcp-3-way-handshake-process/`
- `https://www.sciencedirect.com/topics/computer-science/three-way-handshake`
- `https://bangu4.tistory.com/74`