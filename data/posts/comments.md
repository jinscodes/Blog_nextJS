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

```java
// Copyright (C) 2003,2004,2005 by Object Mentor, Inc. All rights reserved.
// GNU General Public License 
```

2. Comments Providing Information
	1. It's convenient to provide basic information in comments (if possible, it's better to put information in function name)

```java
// Return Responder instance being tested
Protected abstract Responder responderInstance();
```

or

```java
// kk:mm:ss EEE, MMM dd, yyyy formation
Pattern timeMatcher = Pattern.compile(
	"\\d*:\\d*:\\d* \\w*, \\w* \\d*, \\d*"
);
```

3. Comments describing intention
	1. Beyond the line to help you understand the codes, explain the intent behind the decision

```java
public int compareTo(Object o) {
  if(o instanceof WikiPagePath) {
    WikiPagePath p = (WikiPagePath) o;
    String compressedName = StringUtil.join(names, "");
    String compressedArgumentName = StringUtil.join(p.names, "");
    return compressedName.compareTo(compressedArgumentName);
	}
  return 1; // It's the right type, so the ranking is higher
}
```

or

```java
// It attempts to create a competitive condition by generating threads in large quantities.
for(int i = 0; i < 25000; i++) {
  WidgetBuilderThread widgetBuilderThread = new WidgetBuilderThread(widgetBuilder, text, parent, failFlag);
  Thread thread = new Thread(widgetBuilderThread);
	thread.start();
}
```

4. Comments informing the meaning clearly
	1. Ambiguous arguments or return values become easier to understand if the meaning is expressed in a readable way
	2. but, there is a significant risk of incorrect annotation
	3. In other words, use it when there is no better way

```java
assertTrue(a.compareTo(a) == 0); // a == a
assertTrue(a.compareTo(b) != 0); // a != a
assertTrue(ab.compareTo(ab) == 0); // ab == ab
assertTrue(a.compareTo(b) == -1); // a < b
assertTrue(aa.compareTo(ab) == -1); // aa < ab
assertTrue(ba.compareTo(bb) == -1); // ba < bb
assertTrue(b.compareTo(a) == 1); // b > a
assertTrue(ab.compareTo(aa) == 1); // ab > aa
assertTrue(bb.compareTo(ba) == 1); // bb > ba
```

5. Comments Warning the result
	1. Of course, these days, we can turn off the test case using the @ignore property
	2. There may be better solutions, but warning comments are very reasonable

```java
// If you don't have enough free time, don't run it
public void _testWithReallyBigFile() {
  writeLinesToFile(10000000);
	...
}
```

or

```java
public static SimpleDateFormat makeStandardHttpDateFormat() {
  // SimpleDateFormat() is not safe to threads
	// Therefore, each instance must be created independently
	SimpleDateFormat df = new SimpleDateFormat("EEE, dd MMM  yyyy HH:mm:ss z");
	df.setTimeZone(TimeZone.getTimeZone("GMT"));
	return df;
}
```

6. TODO Comments
	1. It's good to leave a future event or something that needs to be modified
	2. However, there is a hassle of checking and erasing periodically without forgetting
(If you forget and don't erase it, it's just a slap in the face…)

```java
// TODO: MdM is not need now
// If importing the checkout model, function is not needed
```

7. Comments emphasizing the importance
	1. Not-emphasizing the importance of any code
	2. Useful when emphasizing the importance of something that might be considered insignificant

```java
String listItemContent = match.group(3).trim();
// At this point, trim is very important. trim() erases the starting spaces from the string
// This is because if there is a start space in the string, it is recognized as another string
new ListItemWidget(this, listItemContent, this.level + 1);
return buildList(text.substring(match.end()));
```

## 