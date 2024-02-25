## Intro..
The above errors often occurred when importing images or files using TypeScript. 

This post is about TS error resolution.

## Error
**[Typescript] TS2307: Cannot find module '.png' or its corresponding type declarations.**

While starting a new project with React and TypeScript, I tried to import an image file with a *.png* extension name, but the error appeared, so it didn't work. 

When I searched and looked it up, it was because the type was not defined.

```json
// tsconfig.json
...
"typeRoots": ["src/types"],
...
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a9850036-57f0-44e6-8489-5370786d7b57)

I added the .d.ts file to the src/types folder to add the type. 

The image could be imported successfully.

```ts
// src/types/images.d.ts
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
```

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1a97c8ab-554f-4b87-9cb7-e89fc1e661fd)

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/42b2745a-6a74-4ab5-912a-87fd2b9a6dc0)



---
[](https://epiphany0421.tistory.com/169#google_vignette)

[](https://egas.tistory.com/125)