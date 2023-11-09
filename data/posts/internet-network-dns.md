## Why DNS?
For server and client communication, IP is necessarily needed. However, IP has problems to use for server and client communication.
- It's hard to remember full IP
- IP can be changed

IP is consisted of series of number like `100.100.100.1` or `200.200.200.2` which is very hard to remember it. Whenever communicatoin between server and client is needed, it's impossible for users to remember the specific IP and use it.

There is another problem to use IP. Although users can remember the IP, IP can be changed. If the IP is changed, user can't access the page that the user want to visit.

## DNS ( Domain Name System )
> DNS is a decentralized system that translates human-readable domain names into IP addresses, enabling computers to locate and connect to websites and services on the internet

- Phone book
- Convert Domain name to IP address

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/79288ec2-e7b5-43ca-a508-e947640947b5)

On the DNS server, sites can be assigned like the above image. Each IP is assigned to each unique domain. For example, if some site's IP is `200.200.200.2` and upload their site to DNS, the IP can be assigned google.com.

### DNS Usage
- (1) The client search through domain
- (2) DNS server responds to the IP mathcing domain
- (3) The client is able to access the IP


When the client tries to access the server, the client doesn't use the IP first. The client searches the server through domain name. So, if user wants to visite the `200.200.200.2`, the user searches the google.com. DNS server gets the domain name from the client and responds the matched IP to the client. Lastly, the client can access the server with IP.

This DNS usability can solve all of the problems of IP mentioned above. DNS is relatively much easier for users to remember than IP. That is, when communicating with a specific server, there is a high possibility that the IP will not be remembered. In addition, even if the IP changes, the domain does not be changed, so the client(user) does not have to care about the IP changes.
