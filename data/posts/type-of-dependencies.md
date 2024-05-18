Installing libraries through a package manager such as npm or yarn creates a **package.json** file.

If you look at the **package.json** file, dependencies and devDependencies are written separately, what is the difference between these two?

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9d556e1f-f420-4142-8980-54ee4278d82c)

## Dependencies

In the **package.json** file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever you install any library that is required in your project that library you can find it in the dependencies object.

dependencies are installed on both:

- `npm install` from a directory that contains **package.json**
- `npm install $package` on any other directory

```bash
$ npm install <package name>
```

For example, installing the moment module for formatting the time in the project.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/02ae40aa-c1d0-44f4-b7b9-1feda7943676)

After this module is installed, we can find the moment module with its version in `"dependencies"` in `package.json` as shown below:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/742d0ebb-478e-4071-8101-bdd335fee592)

---

[](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/)

[](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)

[](https://80000coding.oopy.io/fb570d89-1874-424c-b0d2-5cf2bada3867)
