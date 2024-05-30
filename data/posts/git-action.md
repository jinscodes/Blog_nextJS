According to the documentation of GitHub Actions, GitHub Actions is described as a tool that can automate workflow such as CI/CD. Simply put, when an event (push, pull, merge ...) occurs in GitHub, you can understand that it is a tool that allows you to execute a set action for that event.

GitHub Actions have many keywords such as event, trigger, job, step, use, name, etc., and I'll explain them together with code and comments.

## Setting Project

To use git action, React project is needed.

Make personal repository in the github, and then push the project into the repository.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9ea0d8ab-7691-48da-bfc1-f14cc58bfd8e)

If the repository looks like the above image, basic project setting is done.

After pushing the project to git repository, we need to set the secret key and value. The secret key and value depend on the cloud services or the contents in `.env` files we used.

**Settings > Secrets and variables > Actions** like the below image.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a93f4489-0e0e-47a2-937a-0c8367bfee44)

---

[](https://docs.github.com/ko/actions/learn-github-actions/understanding-github-actions)

[](https://fe-developers.kakaoent.com/2022/220106-github-actions/)

[](https://velog.io/@annkim7/P2023-github-action-%EC%98%A4%EB%A5%98)

[](https://stackoverflow.com/questions/38774798/accessdenied-for-listobjects-for-s3-bucket-when-permissions-are-s3)
