Installing libraries through a package manager such as npm or yarn creates a **package.json** file.

If you look at the **package.json** file, dependencies and devDependencies are written separately, what is the difference between these two?

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d556e1f-f420-4142-8980-54ee4278d82c)

## dependencies

In the **package.json** file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object.

`dependencies` are installed on both:

- `npm install` from a directory that contains **package.json**
- `npm install $package` on any other directory

```bash
$ npm install <package name>
```

For example, installing the moment module for formatting the time in the project.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/02ae40aa-c1d0-44f4-b7b9-1feda7943676)

After this module is installed, we can find the moment module with its version in `"dependencies"` in `package.json` as shown below:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ce6e7d4e-a51d-4eb1-871d-929dc90fb817)

## devDependencies

In package.json file, there is an object called as `devDependencies` and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number.

So, whenever you want to install any library that is required only in your development phase then you can find it in the `devDependencies` object.

Installing library as `dev-dependencies` is similar to installing `dependencies`.

`devDependencies` are:

- also installed on npm install on a directory that contains **package.json**, unless you pass the `--production` flag, or if the `NODE_ENV=production` environment variable is set
- not installed on `npm install "$package"` on any other directory, unless you give it the `--dev` option.
- are not installed transitively.

```bash
$ npm install <package name> --save-dev
```

For example, installing the bootstrap module.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/382f5870-4116-4cde-bd0f-454bcdc05128)

After this module is installed, we can find the bootstrap module with its version in `"devDependencies"` in `package.json` as shown below:

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cba11ecd-63c1-42c3-a8df-9face20a47b8)

## peerDependencies

There is another dependency beside dependencies and devDependencies.

It's peerDependencies.

In package.json file, there is an object called as `peerDependencies` and it consists of all the packages that are exactly required in the project or to the person who is downloading and the version numbers should also be the same.

That is the reason they were named as `peerDependencies`.

The best example is ‘react’ which is common in every project to run similarly.

To be specific, suppose you develop React-based component library.

This library is based on React, so it must depend on React. In these cases, `peerDependencies` are used.

It's actually a bit like telling people using this project to use the react ^17.0.0 version.

Suppose installing this project, with the react 16.0.0 version already installed. In this app, the following module structure is created.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/69c8f0bb-7bca-4611-9fd4-74d08df488bf)

Here, you can see that the versions of the react are different. If the versions have different dependencies, npm and yarn inform the developer in different ways.

> 💡 **NOTE**  
> These dependencies are not automatically installed. `npm` gives a warning message whenever there is a `peerDependency` and these are different dependencies compared to the above-discussed dependencies.

#### Yarn

The warning is like below

```terminal
my-ui-library@0.0.1" has incorrect peer dependency "react@^17.0.0".
```

#### Npm

Up to the npm version 3, `peerDependency` was automatically installed, but due to a number of problems, only warning messages were displayed from versions 4 to 6, and from version 7, package installation will not be possible if the `peerDependency` version is not correct.

For npm@<=6 version and yarn, the installation is fine except for the warning message even if the `peerDependency` version and the installed `dependency` version do not match, but we don't know what errors will occur. Depending on the warning message, it is up to the developer to choose which version to actually install.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fdbd0b7f-6787-4408-8415-3797983b7cba)

---

[](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/)

[](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)

[](https://80000coding.oopy.io/fb570d89-1874-424c-b0d2-5cf2bada3867)
