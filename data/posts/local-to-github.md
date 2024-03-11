## Intro..
In this post, we post how to upload local projects to GitHub using GitHub and GitBash.

Posting on the assumption that GitHub created a repository.

## GitHub + Git Bash
Copy the address of the repository you created.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/be49ee3c-f34a-4ea2-858f-a9dfb3b708ab)

After pasting the url of the repository, there are two ways to put our product into GitHub.

### First Method

Right-click the project folder to upload to GitHub - Select Git Bash Here

> 💡 **NOTE**   
> It is recommended to create a backup file in case the file is moved somewhere else or damaged due to upload failure.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c5bd952-9835-4525-b6cf-7b07419bb11c)

or (in the case of MacOs)

Using terminal, go to the repository.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9f6f8f21-7037-44a3-8813-234fbda9bde2)

Execute the following commands.

Rather than copying it all at once, it is better to run it by checking for errors by hitting it line by line.

```bash
$ git init 
$ git status

# Choose one of the two
$ git add .
$ git add [파일명/폴더명]

$ git commit -m "[push message]"
$ git remote add origin [repository url] 
$ git remote -v
$ git push origin master
```

- git init: Create local storage
- git status: Check the files in the current folder for files to go up
- git add .: Upload full files to local storage
- git add [filename]: upload specific files/folder to local storage
- git commit -m "[push message]": register and commit desired message at push
- git remote -v: local storage connects to remote storage
- git push origin master: upload previously committed files to remote repository

### Second Method
The second method is a little more convenient and simpler than the above process.

That's using the GitHub desktop.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/947b8695-80ca-45dc-ac1c-9caa58baa573)

[](https://desktop.github.com/)

First, copy the address of the repository you created.

![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/be49ee3c-f34a-4ea2-858f-a9dfb3b708ab)

Select Clone Repository... from GitHub Desktop

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/21e273ec-6ae1-4564-9a76-ebd2d5d3056e)

If you select Clone Repository... on the GitHub desktop, it looks like the below image.

Go to the URL section and add the copied GitHub Repo Url

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/50f7aed2-b967-4f5a-b6af-1a7f82738105)

When you insert url and press the clone button, a folder is created in the path specified in the local path.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/bba12fa3-0dfb-410e-afd8-13a1e0310892)

The folder made of GitHub Deskstop is linked to GitHub.

In other words, if you move the contents in the existing local file to the newly created folder, it will be uploaded to GitHub.


---
[](https://yeonyeon.tistory.com/50)