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

Error message: "You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory"

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

But, `sudo gem install cocoapods` doesn't work because of the ruby version.

## 🚨 The last version of activesupport (>= 5.0,  < 8) to support your Ruby & RubyGems was ~
![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c69a36c0-c4f5-47e0-85bc-b9fac9dcfc6a)

I installed ruby thorugh homebrew and upgraded it to the lastest version.

```bash
$ brew install ruby
$ ruby --version
```

However, I checked the version of ruby in terminal, ruby version is not upraded like this `ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin21]`.

This is an error that occurs because Ruby is built into Mac and the version of Ruby is set to default.

Several steps are needed to change the settings for the Ruby version on Mac.

#### 1. Install Ruby with Homebrew
Firstly, install or check the version of the ruby installed by homebrew.

If no version of ruby installed, install it with homebrew

```bash
$ brew install ruby
```

And, check the ruby version. Through brew info ruby, I checked and noted the path of the ruby because it is used later.

```bash
$ brew info ruby
```

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9ac4d2ee-f07c-44f6-8210-c8e7eb3da6a3)


#### 2. Update Shell Configuration
Need to update shell configuration. 

> 💡 shell configuration means `~/.bash_profile`, `~/.zshrc`, or `~/.bashrc`

```bash
open ~/.zshrc

or 

vim ~/.zshrc
```

Add the following line, replacing /usr/local/opt/ruby/bin (or nothing in the .zshrc file) with the actual path obtained from the Homebrew info command.

```bash
$ export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
```

Like this,

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4c4b6892-1b04-4e52-a1cb-db93afee4723)

#### 3. Restart Terminal or Source the Configuration
Restart the terminal and run the following command to apply the changes.

```bash
source ~/.zshrc
```

This ensures that the updated Ruby path takes effect.

And then, check the version of the `ruby --version`

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/57827984-cffc-49ab-aab6-a4b7d28070f7)

**Done**

## Another Solution
In fact, if the ruby is installed with homebrew and the ruby installed through path setting is set as the default, the cocoapods should be well installed and the flutter should run well.

In my case, however, the cocoa pod was installed, but the flutter didn't run well.


--- 
[](https://stackoverflow.com/questions/20939568/error-error-installing-cocoapods-error-failed-to-build-gem-native-extension)

[](https://stackoverflow.com/questions/62593939/cocoapods-not-installed-or-not-in-valid-state)

[](https://dev-repository.tistory.com/120)

[](https://forums.developer.apple.com/forums/thread/668456)

[](https://github.com/rbenv/ruby-build/discussions/2127)

[](https://stackoverflow.com/questions/76938956/installed-latest-ruby-on-mac-but-still-showing-old-in-terminal)

[](https://mac.install.guide/faq/change-ruby-version/index.html)