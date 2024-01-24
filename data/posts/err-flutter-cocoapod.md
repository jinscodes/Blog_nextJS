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
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8d2003ce-32b5-49c1-beff-8ab9905c777a)

The error indicates a problem building the native extension for the CocoaPods gem. This can be caused by missing dependencies or issues with the development environment.

To solve this error, there are serveral steps.

#### 1. Install Command Line Tools
Ensure Xcode Command Line Tools installed. I installed them by running the following command in the terminal.

```bash
$ xcode-select --install
```

Follow the prompts to complete the installation.

#### 2. Update Homebrew
If the version of Homebrew is low, update it with the following commands.

```bash
$ brew update
$ brew upgrade
```

#### 3. Install Required Dependencies
CocoaPods may require some dependencies to be installed on my system. Install them using Homebrew.

```bash
$ brew install cmake
$ brew install openssl
```

> 💡 In my case, I didn't do this. So, I think this step can be skipped. 

#### 4. Install CocoaPods Agagin
I tried to install CocoaPods again.

```bash
$ sudo gem install cocoapods
```

If wants to specify the version, follow the below command

```bash
$ sudo gem install cocoapods -v 1.11.2
```

## 🚨 
I installed ruby thorugh homebrew and upgraded it to the lastest version. However, I checked the version of ruby in terminal, ruby version is not upraded. like this ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin21].

--- 
[](https://stackoverflow.com/questions/20939568/error-error-installing-cocoapods-error-failed-to-build-gem-native-extension)

[](https://stackoverflow.com/questions/62593939/cocoapods-not-installed-or-not-in-valid-state)

[](https://dev-repository.tistory.com/120)

[](https://forums.developer.apple.com/forums/thread/668456)

[](https://github.com/rbenv/ruby-build/discussions/2127)

[](https://stackoverflow.com/questions/76938956/installed-latest-ruby-on-mac-but-still-showing-old-in-terminal)