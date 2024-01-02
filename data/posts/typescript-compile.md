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
    "src/*.ts", // All .ts files in the src directory
    "dist/test?.ts" // Match test1.ts, test2.ts, test3.ts, etc. in the dist directory
    "test/**/*.spec.ts" // All .spec.ts files in the test directory and its subdirectories
  ]
}
```

The wild card pattern can be seen as a symbol that groups and matches files or directories that can be used for inclusion or exclusion attributes in the tsconfig.json file.

- "*" : All files in that directory
- "?" : If you include at least one letter of the names of the files in the directory, that is appropriate
- "**" : Includes all files from subdirectories in that directory

#### exclude
The exclude attribute is a property that designates files to be excluded from compilation in a project as a wild card pattern. In other words, it can be viewed as the opposite version of include.

```json
{
  "compilerOptions": {
    ...
  },
  
  "exclude": [
    "node_modules", // Exclude node_modules directory
    "**/*.test.ts" // Exclude all .test.ts files
  ]
}
```

#### compilerOptions
It is an option that details how to convert files to be compiled. There are so many options, and among them, we will discuss them in detail in the next section.

```json
{
  "compilerOptions": {
  
    /* Default Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "incremental": true,                   /* Enable incremental compile */ 
    "target": "es5",                          /* ECMAScript Target Version Settings: 'ES3'(default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "esnext",                       /* Set module code to be created: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["dom", "dom.iterable", "esnext"], /* Set up library files to be used in the compile processs */
    "allowJs": true,                          /* Allow JavaScript File compile */
    "checkJs": true,                       /* Setting up the .js File Error Report */
    "jsx": "react",                           /* Set JSX code to be created: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* Set '.d.ts' file creation */
    "declarationMap": true,                /* Create a source map for each corresponding '.d.ts' file */
    "sourceMap": true,                     /* Set source map '.map' file creation */
    "outFile": "./",                       /* Group multiple files to set output as one file */
    "outDir": "./dist",                    /* Set the directory to be output */
    "rootDir": "./",                       /* Root directory settings for input files. You can use the --outDir option to set the output directory */
    "composite": true,                     /* Enable project compile */
    "tsBuildInfoFile": "./",               /* Specify the file to store incremental compile information */
    "removeComments": true,                /* On output, set comments removal */
    "noEmit": true,                           /* Set the output release (emit) or not */
    "importHelpers": true,                 /* Set whether to call helper from 'tslib' */
    "downlevelIteration": true,            /* Set Iterables 'for-of', 'spread', and 'destructuring' full support when setting 'ES5' or 'ES3' targets */
    "isolatedModules": true,                  /* Convert each file to a separate module (similar to 'ts.transfileModule') */

    /* Strict Type Inspection Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "strict": true,                           /* Enable all strict type inspection options */
    "noImplicitAny": true,                 /* Error in using expressions and declarations with non-exclusive type 'any' */
    "strictNullChecks": true,              /* Use strict null checks */
    "strictFunctionTypes": true,           /* Enable Strict Function Type Inspection */
    "strictBindCallApply": true,           /* Use strict 'bind', 'call', and 'apply' function methods */
    "strictPropertyInitialization": true,  /* Enable property initialization strict checking in a class */
    "noImplicitThis": true,                /* Error when using expression 'this' with type 'any' that is not explicit */
    "alwaysStrict": true,                  /* After parsing in strict mode, output "use strict" code in each source file */

    /* Additional Inspection Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "noUnusedLocals": true,                /* If unused locales exist, report them as errors */
    "noUnusedParameters": true,            /* If unused parameter exists, report it as an error */
    "noImplicitReturns": true,             /* function does not return a value, report it as an error */
    "noFallthroughCasesInSwitch": true,       /* Error reporting for switch statement error type */
 	"noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature result */

    /* Module Analysis Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "moduleResolution": "node",               /* Module Analysis Method Settings: 'node' (Node.js) or 'classical' (TypeScript pre-1.6). */
    "baseUrl": "./",                       /* Set the directory where the module is located by default, not the absolute path module (e.g. './modules-name') */
    "paths": {},                           /* Set item to remap import to relative location based on 'baseUrl' */
    "rootDirs": [],                        /* List of lot directories showing the structure of the project at runtime */
    "typeRoots": [],                       /* List of directories to include type definitions */
    "types": [],                           /* Type declaration file to be included in compile */
    "allowSyntheticDefaultImports": true,     /* Allow default calls from modules without default export (this code only performs type checks) */
    "esModuleInterop": true,                   /* Provides interoperability between CommonJS and ES modules by creating namespace objects for all imports */
    "preserveSymlinks": true,              /* simlinks not determined by actual path */
    "allowUmdGlobalAccess": true,          /* module allows UMD global access */

    /* Source Map Option
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "sourceRoot": "./",                    /*  Set where debugger will find TypeScript files instead of source locations */
    "mapRoot": "./",                       /* Set where to find map files instead of where debugger was created */
    "inlineSourceMap": true,               /* set to export one inline source map */
    "inlineSources": true,                 /* set to export source and source code together in one file. '--inlineSourceMap' or '--sourceMap' setting is required */

    /* Experimental Feature Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "experimentalDecorators": true,        /* ES7 Decorators Experimental Function Support Settings */
    "emitDecoratorMetadata": true,         /* Set up Type Metadata Release Experiment Support for Decorators */
    
    /* Advanced Options
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "skipLibCheck": true,                     /* Skip declaration file type check */
    "forceConsistentCasingInFileNames": true  /* Disallows inconsistent case references to the same file */
    
  }
}
```

### compilerOptions
There are so many compilerOptions as above. However, you don't need to know everything. 

If you want to know details about some of the things that are often used or important, you can check it out in the next post via the link below.

[](https://jay-h-blog.vercel.app/posts/TypeScript/ts-compiler-options)

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC)