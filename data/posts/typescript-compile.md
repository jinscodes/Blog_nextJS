## Intro...
To use typecrypt efficiently, tsconfig must be set appropriately.

When studying React alone, it was created for TypeScript, so there was no experience that I set tsconfig.json file. But I felt needs to study on the company when I started the new project.

## TypeScript Compile setting
`tsconfig.json` can be seen as a file that defines the compilation settings that convert type scripts into JavaScript at once. You can set in detail the root files and compiler options required to compile the project.

Usually, the tsconfig.json file is located in the root directory (Root Directory) of a TypeScript project. So if the tsconfig.json file is in the project, vscode will recognize that we develop it in TypeScript.

If options are predefined in tsconfig, you no longer have to specify a target file or option in the command on a daily basis when compiling. So, if you just execute the tsc or ts-node command, the project will convert the sources (compile) based on the tsconfig setting in the current folder. If there is no tsconfig setting file in the current folder, the path of the parent folder is searched within the project folder.

To learn more about compiler options, visit the site below
[](https://www.typescriptlang.org/ko/tsconfig)
[](https://typescript-kr.github.io/pages/compiler-options.html)

### Create tsconfig
To generate tsconfig.json, run the code below.

```bash
$ tsc --init
```