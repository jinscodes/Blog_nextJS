When we use git on Mac, there is a common issue about xcode. To develop IOS application, we need to use xcode.

## Problem

We may experience the following error when using the collar for the first time on the Mac, or after it has been reset.

![xcode-err](https://github.com/user-attachments/assets/27acf5ad-24f1-4934-b9b0-79324c8762d1)

The reason why this error occurs is that we don't accept the agreement. It's very easy to solve it.

## Solution: How to accept xcode license when running git on Mac

##### 1️⃣ Run sudo xcodebuild -license

![agreement-step-1](https://github.com/user-attachments/assets/18677747-63ef-48c2-8838-5d22e4462e94)

To accept the agreement, put `sudo xcodebuild -license` on the terminal.

After run the above code, we can see the content of the agreement of the xcode and apple SDK.

##### 2️⃣ Agree

If anything related to xcode and applesdk's consent comes out, ask if you agree to these like this.

![agreement-step-2](https://github.com/user-attachments/assets/083dfe48-338f-42c7-936f-27c497cd54cd)

If you agree to this, enter agree  
If you want to print, type print  
If you want to cancel, it will tell you to type cancel.  
We have to agree and use it, so enter agree.

##### 3️⃣ Done

![agreement-step-3](https://github.com/user-attachments/assets/90912950-19cb-4330-89e4-a53e2eccbf00)

When we put "agree", it's done.

---

[](https://joyfulhome.tistory.com/233)
