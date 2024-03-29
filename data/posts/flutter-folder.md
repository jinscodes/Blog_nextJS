At the start of every project, how to organize the folder structure is always one of the challenging and difficult topics.

The file structure is the organization of the data of an application. The file structure is something that plays a very important role in the effective and easy management of the project be it of any size.

## Why File Structure is important
Is it easy to find things in a well-organized warehouse? Is it easy to find things in a messy warehouse?

The answer is clear. It is easy to find items in a well-organized warehouse.

As the size of a project grows, it becomes more and more important to have a proper structure and format for the code otherwise it can lead to many undesired problems such as

- Unable to find the sepcific file in a repository, making it a time-consuming task
- Unfit for teamwork
- Difficult to maintain
- In the worst-case scenario, it can result in low performance app

Otherwise, what is the benefit for making the file structure well?

- Easy to find specific file, function, or class
- Easy to do teamwork
- Easy to maintenance

#### File Name Convention
Before that one important thing that we always need to keep in mind is the naming of the file and directories must always be in the proper format. 

For instance, if someone is creating a social media app and wants to make a file to store data of its uses, then this is how it should be named.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2cfeb41e-8e5f-45f6-a6f6-9ea8ccb5ce5e)

#### Assets File (Static assets for the app)
This directory is on the root level will contain all the static assets that are used in the application, for example, fonts, icons, logos, background images, demo videos, etc.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/00795119-15cf-4e8b-b25f-3b4b9110a6f0)

It is very much recommended that we should have different directories for a different type of data for example images, videos & logos, should have a different folder of their own so that it becomes easier to maintain and access them.

#### Screen
This directory will contain the actual layout of the UI for the entire application. 

It can further be distributed into two-three folders. 

One which stored the flash screen and onboarding pages such as login/sign-up screen, the second folder can store the home screen and other generally used screens, and the third folder can contain screens that are not that important

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/782560db-5de6-499c-9c5e-68c9ee71245f)

> 💡 However, if you look at the picture above, I didn't do it as described above.   
> In the screens folder, a dart file that becomes the underlying(Scaffold) is composed, and the details in it are separated like components in the lib folder, not the screens folder.

> The reason I did this was that I had a habit of classifying each component while using react, so this was more comfortable.

#### Providers (Interaction outside the app)
This directory is supposed to hold all the interactions that transact the data from outside the app. 

This is different from the cloud functions, in regards to that none of the code in this directory will interact will cloud storage or server. 

Considering the weather app, a good example is having to translate the JSON-type location data received from the weather and API to use it.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/754889b9-e455-4958-96f2-929675daeefe)

Please refer to the link below for information on the provider.

[](https://totally-developer.tistory.com/83)

#### Utilities (Function or logic used in the app)
This directory will hold all the app logic or business logic of our entire application. 

Again a good example in the weather app would be when a user selects a different location the weather data should also change accordingly.   
Or in the case of the social media app when logins the app data should also change accordingly.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/afb783d8-f182-45cb-bd80-23a510e6ebf6)

#### Widgets (Widgets & Layout)
It becomes clear all by the name itself that this folder will hold all the static widgets or the widgets that are used multiple times in the application. 

#### Models (Collection of data)
Models are the collection of data that are usually sourced from the servers, users, or external APIs, these are used in combination with widgets to complete the user interface of the app. 

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2ea7741e-2efe-49f3-81ee-f6ba64e44c64)

---
[](https://www.geeksforgeeks.org/flutter-file-structure/)

[](https://en.wikipedia.org/wiki/Separation_of_concerns)

[](https://couldi.tistory.com/34)

[](https://totally-developer.tistory.com/83#google_vignette)