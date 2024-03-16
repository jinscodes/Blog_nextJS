While writing the code, there some cases not to clean up the unused import syntax.

Of course, it can be handled with the help of Eslint through warnings or errors. However, it's a little cumbersome.

There is a built-in option in the Vscode to resolve this issue.

### Settings
Move to the Vscode setting page using [command + ,].

Or

Click the button at the bottom left.

Clicking the button, there is a settings.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4011333b-2b20-4886-9749-7541723ef539)

If click the settings, we can see the settings page like below. 

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e6767aef-9889-4aa3-adec-c080246a8437)

Click the icon at the top right, looks like below 

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/25656931-f780-4b79-9284-824ec711d584)

When cliking this icon, we can open the settings.json file.

Add the below code to the settings.json file.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f55ab3bd-87b6-49df-8496-f2f97d523421)

```json
{
	...
	"editor.codeActionsOnSave": {
		"source.organizeImports": true
	},
}
```

Now, unused import syntax is removed well!

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d2681c62-74eb-4d47-938e-6233d12b0f46)

---
[](https://stackoverflow.com/questions/46722701/is-there-a-way-to-remove-unused-imports-and-declarations-from-angular-2)

[](https://webruden.tistory.com/1069)