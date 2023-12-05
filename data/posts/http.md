## Intro...
It is no exaggeration to say that everything on the computer is made up of HTTP. To understand the programming deeply regardless of what language or tools we use, we must study about HTTP. 

So, What is HTTP?

## HTTP ( HyperText Transfer Protocol )
> HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web, enabling the exchange of text, images, files, and other resources between clients (such as web browsers) and servers.

Everything is throught HTTP. In other words, sending everything to the HTTP message.

- HTML, TEXT
- Image, Video, File, Vocie, and etc...
- JSON, XML (API)
- Almost all forms of data
- When exchanging data bewteen servers

Today, HTTP is used almost everywhere. This is the HTTP era.

### History
Before we start studying HTTP in earnest, let's take a brief look at the history of HTTP. In fact, when it comes to studying HTTP, you don't need to know the history, but let's think of it as like a GE.

1. HTTP/0.9 1991: Only `get` method, No HTTP header
2. HTTP/1.0 1996: Method, Header is added
3. **HTTP/1.1 1997: Most used, Important version for us**
	1. RFC2068 (1997) -> RFC2616 (1999) -> RFC7230~7235 (2014)
4. HTTP/2 2015: Improve performance
5. HTTP/3 Ongoing: Using UDP instead of TCP, Imporve performance

### Underlying Protocol
- **TCP**: HTTP/1.1, HTTP/2
- **UDP**: HTTP/3
- Now: HTTP/1.1, increasing the rate of HTTP/2 and HTTP/3

**<HTTP2 & HTTP3>**

![http23](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4a7c3c04-73fb-46a6-b3fd-4dbf753258d4)

**<HTTP1.1 & HTTP2>**

![http1 1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a9029702-cc94-40af-9b21-b07949112775)

## Features of HTTP
- Client Server structure
- Stateful, Stateless
- Connectionless
- HTTP message
- Simple and Extendable

### Client Server Structure
- Request Response structure
- Client requests to the server and waits for response
- Server makes the result that is corresponded with the request and respond to the client.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/43c85f14-36dd-4b32-9761-8fbfbf28208b)

If you're new to state management, these two concepts can be confusing. Let's take a look at what the concepts of stateful and stateless are and what are the differences

### Stateful
> The server preserving the client's previous state is called **stateful**.

Here is the example of the **stateful**. Customer is the client, and clerk is the server.

---

Customer: How much is this laptop?   
Clerk: The price of this laptop is $1,000

Customer: I'll buy two.   
Clerk: $2,000. Would you like to pay with a credit card or cash?

Customer: I would pay it with the credit card   
Clerk: The payment of $2,000 has been completed.

---

What do you think about this conversation? It's very normal situation. Customer wants two laptops and clerk understands what customer wants in every conversation. 

This is the **stateful**. Suerly, this example is not enough for understanding the concept of the **stateful** fully. Let's say the clerk changes.

---

Customer: How much is this laptop?   
Clerk A: The price of this laptop is $1,000

Customer: I'll buy two.   
Clerk B: ?   
Clerk B: What would you like to buy two?

Customer: I would pay it with the credit card.   
Clerk C: ?   
Clerk C: What do you want to buy and how many?

---

This conversation is not make sense. Because each clerk doesn't be aware of the previous situation and information. In the second example, clerks don't save the information about what customer wants, which is like the server doesn't save any state from the client.

Above two examples help understand what **stateful** is. 

To make the first example more clear...

---

Customer: How much is this laptop?   
Clerk: The price of this laptop is $1,000 **( state1: laptop )**

Customer: I'll buy two.   
Clerk: $2,000. Would you like to pay with a credit card or cash? **( state1: laptop, state2: two )**

Customer: I would pay it with the credit card   
Clerk: The payment of $2,000 has been completed. **( state1: laptop, state2: two, state3: creditcard )**

---

### Stateless
> The server that doesn't preserver the client's previous state is called **stateless**.

Here is the example of the **stateless**. Customer is the client, and clerk is the server.

---

Customer: How much is this **laptop**?   
Clerk A: $1,000

Customer: I'll buy **two** **laptops**.   
Clerk B: The price is $2,000. Credit card or cash?

Customer: I'll buy **two** **laptops** with the **credit card**.   
Clerk C: Thanks.

---

Can you feel the different between **stateful** and **stateless**? 

Regardless of changing the clerk, the customer always mentions the information of the laptop and clerk can understand what the customer wants. This is the **stateless**.

Substituting the situation of the above conversation into the client and server, you can accurately grasp what `statelessness` is. 

The server does not store or have any information about any work. That's why when a client sends a request to a server, it must always send all the information needed for the task.

> As such, one of the characteristics of HTTP is "stateless" that the server does not store the state and the client must always send the state.

### Connectionless