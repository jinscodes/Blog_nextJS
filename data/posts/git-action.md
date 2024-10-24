## What Is GitHub Actions?

According to the documentation of GitHub Actions, GitHub Actions is described as a tool that can automate workflow such as CI/CD. Simply put, when an event (push, pull, merge ...) occurs in GitHub, you can understand that it is a tool that allows you to execute a set action for that event.

GitHub Actions have many keywords such as event, trigger, job, step, use, name, etc., and I'll explain them together with code and comments.

- Tools to help automate software workflow
- Example of Workflow
  - Test Code
  - Release
  - Other scripts wanting to automate
  - Check whether or not the python works well
- CI/CD
- Price
- Limits
  - Up to 20 Workflows can be registered in a single repo
  - Jobs that exist in a workflow can run for 6 hours and automatically stop when exceeded
  - Github Free storage limit of 500MB, monthly run time of 2,000 minutes

## Setting Project

To use git action, React project is needed.

Make personal repository in the github, and then push the project into the repository.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9ea0d8ab-7691-48da-bfc1-f14cc58bfd8e)

If the repository looks like the above image, basic project setting is done.

After pushing the project to git repository, we need to set the secret key and value. The secret key and value depend on the cloud services or the contents in `.env` files we used.

**Settings > Secrets and variables > Actions** like the below image.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a93f4489-0e0e-47a2-937a-0c8367bfee44)

If the `secret` is added, it looks like the below image 👇🏼

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f44eda95-b213-4d35-ab33-cb90db315095)

## Usage GitHub Actions

Make the **workflow** to test the code whenever any branch is trying to push the code to the repository. The workflow is the automatic process that execute more than one work, and it is executed when the event like push occurs.

Make the `./github/workflows` folder and make `main.yml` file. Git Actions uses this file.

Or, by using **Actions** in repository, we can get `./github/workflows/main.yml`.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ad77d49a-523d-481d-9dec-0bd55fadbea2)

If clicking the **`set up a workflow yourself ->`**, you can see the below page

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5ca00946-0868-40f2-8d1d-929c9d659f45)

First, I recommend creating a `.github/workflows/` directory in the root path of the project and creating two GitHub Actions files.

- .github/workflows/main.yml
- .github/workflows/main.test.yml

> 💡 **NOTE**  
> Reason for separating into two file  
> This is to use different GitHub Actions files for each branch.

> This is because the main branch is a branch for real service distribution and the release branch is a branch for inspection purposes, so there is a high possibility of a difference in workflow between the two branches in the future.

### Set up this workflow

Example of `.yml` file

Workflow with the name CI that runs when a push or pull request comes to the master branch.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b09f06ae-d29c-431a-bd80-401eabda5f7c)

#### name:

Name of the workflow

#### on:

```yml
on:
	push:
		branches: [ master ]
	pull_request:
		branches: [ master ]

# or

on:
	push:
	 branches:
	 	- main
		- master
```

- The part that is related to the event
- Conditions for workflow's trigger
- Being able to use `push`(Branch or Tag), `pull_request`, `schedule`
- Being able to use it as an array

```yml
on: push

# or

on: [pull_request, issues]
```

#### jobs:

```yml
jobs:
	build:
		runs-on: ubuntu-latest

		steps:
		- uses: actions/checkout@v2
		- name: Run a one-line script
			run: echo Hello, world!

		- name: Run a muli-line script
			run: |
				echo Add other actions to build,
				echo test, and deploy your project.
```

- Workflow consists of multiple **jobs**
- If there are several jobs, it is executed parallelly as a default
- Execute job named build, and there are two steps under the job(build)
- **runs-on** specifies which OS to run on
- There is the way to regist environment variable (above example, there is no code about environment)
- **uses** of **steps** specifies which action to use. Specify when using an action that has already been created.

---

[](https://docs.github.com/ko/actions/learn-github-actions/understanding-github-actions)

[](https://fe-developers.kakaoent.com/2022/220106-github-actions/)

[](https://velog.io/@annkim7/P2023-github-action-%EC%98%A4%EB%A5%98)

[](https://stackoverflow.com/questions/38774798/accessdenied-for-listobjects-for-s3-bucket-when-permissions-are-s3)

[](https://zzsza.github.io/development/2020/06/06/github-action/)

[](https://velog.io/@cataiden/ci-cd-with-github-actions-and-aws-codedeploy)

[](https://velog.io/@1nthek/GitHub-Action%EC%9C%BC%EB%A1%9C-AWS-S3%EC%97%90-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94)
