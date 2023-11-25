## Intro
When developing, opinions are divided on whether or not to leave a comment. Some of the developers say comments are forced to be written. Recently, however, more people have argued that comment isn't needed.

This post is based on the Book name **"clean code"** written by Robert C. Martin. And it is very personal. Just keep in mind that there are these opinions

## What is comment?
> ‘Don't use comments’ - Write the code that can be understood without comments

- Comments never compensate bad code
- Express intentions with code itself rather than comments

## Good Comments (Necessary Comments)
1. Legal Comments
	1. Indicate specific comments for legal reasons in line with implementation standards established by the company

2. Comments Providing Information
	1. It's convenient to provide basic information in comments (if possible, it's better to put information in function name)

3. Comments describing intention
	1. Beyond the line to help you understand the codes, explain the intent behind the decision

4. Comments informing the meaning clearly
	1. Ambiguous arguments or return values become easier to understand if the meaning is expressed in a readable way
	2. but, there is a significant risk of incorrect annotation
	3. In other words, use it when there is no better way

5. Comments Warning the result
	1. Of course, these days, we can turn off the test case using the @ignore property
	2. There may be better solutions, but warning comments are very reasonable

6. TODO Comments
	1. It's good to leave a future event or something that needs to be modified
	2. However, there is a hassle of checking and erasing periodically without forgetting
(If you forget and don't erase it, it's just a slap in the face…)

7. Comments emphasizing the importance
	1. Not-emphasizing the importance of any code
	2. Useful when emphasizing the importance of something that might be considered insignificant