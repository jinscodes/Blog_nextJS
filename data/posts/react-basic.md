## Before looking at React, Framework Versus Library

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fba1f45f-3b11-4816-920f-023b92bec777)   

Frameworks provide a comprehensive solution for application development, covering various aspects. They have less flexibility and come with more rules to follow. 

A library is a collection of reusable code or functions that provide specific functionality, allowing for greater flexibility and a relatively lower learning curve.

## React Basic - What's React?

React is a JavaScript library for building user interface    
Why we need to use React instead of JavaScript?

- Making it easier to create Web or Mobile apps
- Making it easier to build From simple static sites to complex scale
- So many places used React ( #1 most used framework )
- Available in multiple: React | React Native | Electron | NextJs etc..
- SPA ( Single Page Application ), CSR ( Client Side Rendering )  
      -> With NextJs or Gatsby, Being able to use SSG ( Static Site Generation ) and SSR ( Server Side Rendering )

## Convention (or Philosophy) of the React

> One Root, Several Components   
> A highly cohesive building block for UIs loosely coupled with other components

When I heard the above two quotes, I realized that I needed to change my attitude to the website. In normal case, people view a website without considering structures, but programmer using React need to approach the website with a little special perspective. "Another perspectives" means that when programmers look at the website, they need to see the website is composed of boxes or containers.

### Criteria for dividing components
- DRY ( Don't Repeat Yourself )
- SR ( Single Responsibilty )

In my case, I couldn't always meet the standards while building the structure for the websites. Also, it's so hard for me to expect the codes that will be repeated or not and grant single responsibilty to my codes. Alough I couldn't expect the DRY and give SR to my codes or components, I've tried to remind and keep the criteria. Whenever I faced some problems of repeating or complex responsibility, I immediately fixed the structures of the components or codes. 

> We are not perfect and can make mistakes. However, we must always try to have a conservative attitude toward our code. Reminding and Trying to keep the criteira for making clean and neat codes.