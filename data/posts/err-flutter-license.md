## Intro...
The previous post was about androin toolchain. 

This post will summarize android licenses. 

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3abcb2a7-3d4e-40ff-b159-00e2a9e97cf9)

## 🚨 Error: Android licenses have not been accepted
When we encounter the error message "Android licenses have not been accepted," it means that we need to accept the Android SDK licenses before we can use certain features or components. Follow these steps to resolve the issue:

### Navigate to the Android SDK Tools Directory
Go to the directory where the Android SDK tools are installed. The location might vary based on the operating system.

How to know where the android SDK tools directory is located?

#### 1. Run Android Studio
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6545b9a8-2cc1-4a08-88d0-66dc81f08e47)

#### 2. Open Any Project or Create New Project
If open or create any project file, click the **File** option.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/614fc3d8-2587-4bc8-bdab-f9f89a6e7069)

#### 3. Enter the Project Strucuture
Among the options of the File, there is a Project Structure. 

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/22bf3bc0-5aa6-4ed6-a8bb-9bcafd301645)

#### 4. Go to SDKs for path
Like the below image, after open the Project Structure, go to SDKs for checking the path.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e7ad779f-8ad2-4ae1-893e-6bab3e2d3157)

Here is the path of the SDK!

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c20b1c6b-7e69-4822-b715-4678eb19298c)

#### 5. Go to the path
```bash
$ cd "SDK path"
```

### Run the "sdkmanage" command
Run the following command to open the SDK Manager

```bash
$ sdkmanager --licenses
```

On Windows, command is little bit different

```bash
$ path/to/sdk/tools/bin/sdkmanager --licenses
```

If sdkmanage needs to be **updated**, follow below command.

```bash
$ sdkmanager --update
```

### Review and Accept Licenses
The `sdkmanager --licenses` command will display a list of licenses that need to be accepted. Read through the licenses, and when prompted, type y to accept each one.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f19ec34c-b70d-49c7-8ce6-ca2784f1260c)

> 💡 We can accept All Licenses at Once (Optional)   
	```bash
	$ sdkmanager --licenses --accept
	```

---
[](https://stackoverflow.com/questions/39760172/you-have-not-accepted-the-license-agreements-of-the-following-sdk-components)

[](https://hanco.tistory.com/8)