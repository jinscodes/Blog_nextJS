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

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c6b0b8bc-3725-42cc-8245-3af79b1eac91)

### tsconfig Global Attributes
The tsconfig global attribute refers to attributes located at the top of the file.

```json
{
  // Properties that specify options for the TypeScript compiler
  "compilerOptions": { 
    "target": "es5", 
    "module": "commonjs", 
    "strict": true, 
    "sourceMap": true
    // ... so many options
  },

  // Properties that specify an individual list of files to be compiled
  "files": ["src/main.ts", "src/utils.ts"],

  // Properties that specify the files to be compiled
  "include": [ "src/**/*.ts" ], 
    
  // Properties that specify which files to exclude from compilation
  "exclude": [ "node_modules", "**/*.test.ts" ], 
    
  // Properties that allow the settings to be reused by inheriting other tsconfig.json files
  "extends": "./configs/base.json", 
    
  // Properties that specify dependencies for projects made up of multiple subprojects
  "references": [ 
    { "path": "./subproject1" }, 
    { "path": "./subproject2" } 
  ], 
    
  // Properties that specify options related to type acquisition
  "typeAcquisition": { 
    "enable": true, 
    "include": ["jquery"], 
    "exclude": ["react"] 
  }, 
        
  // Properties that specify options related to watch mode
  "watchOptions": { 
    "watchFile": "useFsEvents", 
    "watchDirectory": "useFsEvents", 
    "fallbackPolling": "dynamicPriority"
  }
}
```

There are so many global attributes, but the five-visible attributes that are mainly used among them are compiler Options, files, inclusion, exclusion, and extents.

#### files
It is a property that explicitly specifies a list of files to be compiled in a project.
 
The files attribute has a higher priority than the exclude to be learned below. If this attribute is omitted, the include and exclude attributes determine the compilation target.

```json
{
  "files": [ // You have to write the file extension correctly
    "src/main.ts",
    "src/utils.ts",
    "src/types.d.ts"
  ]
}
```

#### extends
extents is an option that allows you to import and reuse the settings of other tsconfig.json files. Usually, the extents attribute is located at the top of the tsconfig.json file.

For example, if the property setting of the config/base.json file fits the format of the current tsconfig.json file, the setting of the base file will be inherited.

```json
// config/base.json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

```json
{
  "extends": "./configs/base",
  "compilerOptions": {
    "strictNullChecks": false
  },
  "files": [
    "src/main.ts",
    "src/utils.ts",
    "src/types.d.ts"
  ]
}
```

#### include
The inclusion attribute is a property that designates files to be compiled in a project, such as the files attribute, but it differs in that it is designated as a wild card pattern. In addition, unlike the files attribute, inclusion is weaker than inclusion, so even if it is specified in inclusion, it can be excluded.

```json
{
  "compilerOptions": {
    ...
  },
  "include": [
    "src/*.ts", // src 디렉토리에 있는 모든 .ts 파일
    "dist/test?.ts" // dist 디렉토리에 있는 test1.ts, test2.ts , test3.ts ..등에 일치
    "test/**/*.spec.ts" // test 디렉토리와 그 하위 디렉토리에 있는 모든 .spec.ts 파일
  ]
}
```

The wild card pattern can be seen as a symbol that groups and matches files or directories that can be used for inclusion or exclusion attributes in the tsconfig.json file.

- * : All files in that directory
- ? : If you include at least one letter of the names of the files in the directory, that is appropriate
- ** : Includes all files from subdirectories in that directory