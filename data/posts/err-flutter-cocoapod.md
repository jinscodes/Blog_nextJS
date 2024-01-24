## Intro..
One day a cocoapod error suddenly came to me. The flutter that was working well didn't work and I had to fix the error.

I tried to reinstall cocoapod but another errors occurs. I don't know why this happen to me, but I solved it.

This post is about the error that I experienced before and the solution. 

## 🚨 CocoaPods not installed or not in valid state
![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d10140dc-0be3-4228-a2b8-1d834bfe17d7)

Obviously, until yesterday, there was no problem running the flutter. However, since I installed something, I have encountered an error like the picture above.

I kept looking for reasons, but I couldn't find them. Maybe I changed something I shouldn't have touched while modifying ~/.zshrc before.

Firstly, I downloaded Cocoapods according to the error above using homebrew. 

```bash
$ brew cleanup -d -v
```

```bash
$ brew install cocoapods
```

But, `brew install` didn't work properly because of the authority. So, I used `sudo gen install`

```bash
$ sudo gem install cocoapods
```

However, it's not working. Another error occurs in a row.

## 🚨 Failed to build gem native extension.
