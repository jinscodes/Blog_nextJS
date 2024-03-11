## Intro..
In this post, we post how to upload local projects to GitHub using GitHub and GitBash.

Posting on the assumption that GitHub created a repository.

## GitHub + Git Bash
Copy the address of the repository you created.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/be49ee3c-f34a-4ea2-858f-a9dfb3b708ab)

After pasting the url of the repository, there are two ways to put our product into GitHub.

### Window

Right-click the project folder to upload to GitHub - Select Git Bash Here

> 💡 **NOTE**   
> It is recommended to create a backup file in case the file is moved somewhere else or damaged due to upload failure.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c5bd952-9835-4525-b6cf-7b07419bb11c)

Execute the following commands.

Rather than copying it all at once, it is better to run it by checking for errors by hitting it line by line.

```bash
$ git init 
$ git status

$ git add .
$ git add [파일명/폴더명]

$ git commit -m "[푸쉬 메시지]"
$ git remote add origin [복사해둔 레포지토리 주소] 
$ git remote -v
$ git push origin master
```

- git init: Create local storage