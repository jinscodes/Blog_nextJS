#### What is Git Repository?
It's a repository on the Internet or somewhere in the network. 

Even a remote repository can be located on a local system. (It can actually exist on the same local system.) 

The name 'remote' must be used so that the repository is somewhere far away from the network or the Internet. It doesn't mean you have to stay away from it. Of course, as with ordinary remote storage, you use the same functions as Push, Pull, etc.

## Sequence
1. Check Git repository

2. Add Git repository

3. Save to Git repository

4. Check Git repository

> 💡 **Note**   
> Q1. How to bring the files from remote repository?

> ![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dd09f905-07a4-483d-bc4b-422e185cfb88)

> Q2. How to check the remote repository?

> ![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ff075788-c8a9-4691-b95b-ff99842d7149)

> Q3. How to change the name of the repository?

> ![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/db19600a-cdab-455d-b421-8a186b67f2f5)

### Create repository in Github
Before do something else via terminal, github repository is needed.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d0310c2c-380d-467f-b85a-de8c91dc9220)

> 💡 **NOTE**   
> It is possible to upload the local file not only to github repository, but also to cloud service.

> For example, In korea, there is a cloud service name cafe24. To use the service, we need to upload the build file. We can use the git remote.

### Connect remote git repository
Before connecting the git repository, make sure there is a connected repository.

To check if there is a connected repository, there is two way.

```bash
$ git remote

or 

$ git remote -v
```

1. In the case of `git remote`, it shows only remote repository's alias.
	1. ![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/254ee427-66cd-4ff1-93bc-eb1c7cd3beee)

2. In the case of `git remote -v`, it shows remote repository's alias with url
	1. ![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dac1a2c3-1d79-4e4d-b570-0d207505814d)

If there is no connected remote repository, there is nothing like the below image. 

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/52feca5f-4c8d-49fe-a0be-cd73409a108b)

To connect the remote repository, repository url is necessary.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ed909ef8-472f-497c-9486-be6b0c56c4c6)

Copy the url and do 👇🏼

```bash
$ git remote add <alias> <url>
```

For example, 

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/94478b41-2a0d-42ce-8ad7-995ee56e9430)

### Save contents to remote git repository
If we done connecting, we can upload our contents into the remote git repository.

First of all, `push` is needed.

```bash
$ git push <alias> <branch>
```

In this part, **alias** is the same nickname that we decided when connecting to git remote repository.

And the **branch** means a branch(local) that contains what you want to push.

![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8beea573-a9d5-41eb-ba11-340ea6d67049)

After pushing the codes, go to the github, and we can see our codes are posted well.

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b4d2bb7f-d992-4855-8663-ab79fdd07f4c)

### Check remote git repository
If the `git push` is successful, we need to make sure that our code went up successfully.

To see if it's successful, 👇🏼

```bash
$ git remote show <Repository alias>
```

As a result, we can see Fetch URL, Push URL, and HEAD branch.

![12](https://github.com/jinscodes/test/assets/87598134/461ae7c7-984c-4633-8459-6549d0425227)

## Other Commands About Git Remote Repository
There is several commands related to remote git repository.

- Bring codes from git remote repository
- Change git repository name
- Remove git repository connection

### Bring codes from remote git repository
If we want to get codes from git repository like fork, 

```bash
$ git fetch <Repository alias> <branch>

# or

$ git pull <Repository alias> <branch>
```

![13](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5b94a285-83d6-48be-ac10-cb21af6b3cc7)

### Change git repository name
To change the name of alias, 

```bash
$ git remote rename <current repository alias> <new repository alias>
```

![14](https://github.com/jinscodes/Blog_nextJS/assets/87598134/83908a43-7e3e-4c30-9ada-dffc71e293b5)

### Remove git repository connection
To remove the connected remote git repository, 

```bash
$ git remote remove <Repository alias> 

# or

$ git remote rm <Repository alias>
```

![15](https://github.com/jinscodes/Blog_nextJS/assets/87598134/159233e0-10bd-4ac5-9f2a-c97f48f144a5)

---
[](https://nemomemo.tistory.com/83)

[](https://dev-and-remind.tistory.com/15)

[](https://stackoverflow.com/questions/19660744/git-push-permission-denied-public-key)