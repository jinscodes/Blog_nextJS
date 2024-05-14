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

---
[](https://nemomemo.tistory.com/83)

[](https://dev-and-remind.tistory.com/15)

[](https://stackoverflow.com/questions/19660744/git-push-permission-denied-public-key)