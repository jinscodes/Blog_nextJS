## Intro
When developing, opinions are divided on whether or not to leave a comment. Some of the developers say comments are forced to be written. Recently, however, more people have argued that comment isn't needed.

This post is based on the Book name **"clean code"** written by Robert C. Martin. And it is very personal. Just keep in mind that there are these opinions

## What is comment?
> ‘Don't use comments’ - Write the code that can be understood without comments

- Comments never compensate bad code
- Express intentions with code itself rather than comments

## Good Comments (Necessary Comments)
1. **Legal comments**
	1. Indicate specific comments for legal reasons in line with implementation standards established by the company

	```java
	// Copyright (C) 2003,2004,2005 by Object Mentor, Inc. All rights reserved.
	// GNU General Public License 
	```

2. **Comments providing information**
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

3. **Comments describing intention**
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

4. **Comments informing the meaning clearly**
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

5. **Comments warning the result**
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

6. **TODO comments**
	1. It's good to leave a future event or something that needs to be modified
	2. However, there is a hassle of checking and erasing periodically without forgetting
(If you forget and don't erase it, it's just a slap in the face…)

	```java
	// TODO: MdM is not need now
	// If importing the checkout model, function is not needed
	```

7. **Comments emphasizing the importance**
	1. Not-emphasizing the importance of any code
	2. Useful when emphasizing the importance of something that might be considered insignificant

	```java
	String listItemContent = match.group(3).trim();
	// At this point, trim is very important. trim() erases the starting spaces from the string
	// This is because if there is a start space in the string, it is recognized as another string
	new ListItemWidget(this, listItemContent, this.level + 1);
	return buildList(text.substring(match.end()));
	```

## Bad Comments (Un-necessary Comments)
1. **Rambling comment**
	1. Comments reluctantly written in a sense of duty for no particular reason
	2. The value of the comments' existance is diminished

	```java
	try {
	  String propertiesPath = propertiesLocation + "/" + PROPERTISE_FILE;
	  FileInputStream propertiesStream = new FileInputStream(propertiesPath);
	  loadedProperties.load(propertiesStream);
	} catch (IOException) {
	  // If there is no properties file, it means that default value is read to memory
	}
	```

2. **Comments that overlap the same story**
	1. It's not effective to write overlapped comments on the codes because it takes a long time to read
	2. The overlapped comments tarnish the code

	```java
	// This is the utility method when the this.closed is true
	// When it reaches timeout, exception is thrown
	public synchronized void waitForClose(final long timeoutMillis) {
	  throw Exception {
	    if (!closed) {
	      wait(timeoutMillis);
	      if (!closed) {
	        throw new Exception("MockResponseSender could not be closed");
	      }
	    }
	  }
	}
	```

	or 

	```java
	// delay value
	protected int backgroundProcessorDelay = -1;

	// lifecycle to support the component
	protected LifecycleSupport lifecycle = new LifecycleSupport(this);

	// Logger that is related to container
	protected Loader loader = null;
	```

3. **Comments that can be misunderstood**
	1. Because of the slightly incorrect (or misleading) information in the comments, other developers may make an error without knowing why

	```java
	// This is the utility method when the this.closed is true
	// When it reaches timeout, exception is thrown
	public synchronized void waitForClose(final long timeoutMillis) {
	  throw Exception {
	    if (!closed) {
	      wait(timeoutMillis);
	      if (!closed) {
	        throw new Exception("MockResponseSender could not be closed");
	      }
	    }
	  }
	}
	```

	This is the same code of **Comments that overlap the same story**'s example. In other words, the above code is both **Comments that overlap the same story** and **Comments that can be misunderstood**

4. **Mandatory comments**

	```java
	/**
	 * @param title CD title
	 * @param author CD autor
	 * @param tracks number of CD tracks
	 */

	public void addCD(String title, String author, int tracks) {
	  CD cd = new CD();
		cd.title = title;
		cd.author = author;
		cd.tracks = tracks;

		cdList.add(cd);
	}
	```

5. **Comments to record history**
	1. Very few these days

	```java
	/**
	 * History ( since 11-Oct-2020 )
	 * -----------------------------
	 * 11-Oct-2020 : Create new Package
	 * 05-Nov-2020 : Add getDescription() method and remove NotableData class
	 * 12-Nov-2020 : Fix the bug from SpreadsheetDate class
	 * 13-Mar-2020 : Fix the bug from Checkstyle
	 */
	```

6. **An Unremarkable Comment**
	1. Comments that mentions obvious fact and fails to provide any new information

	```java
	// day of month
	private int dayOffMonth;

	// return day of month
	// @return day of month
	public int getDayOfMonth() {
	  return dayOfMonth;
	}
	```

	or

	```java
	try {
	  doSending();
	} catch (SocketException e) {
	  // Well, someone ceased the request
	} catch (Exception e) {
	  try {
	    response.add(ErrorResponder.makeExceptionString(e));
	    response.closeAll();
	  } catch (Exception e1) {
	    // What is that?
	  }
	}
	```

7. **Comments that can be expressed as a function or variable**
	1. If we are programmer, we should express our intention as a function or variable

	```java
	// Does the module in the global list <smodule> depend on the subsystem we belong to?
	if (smodule.getDependSubsystems().contains(subSysMod.getSubSystem()));
	```

8. **Location Comments**
	1. It can be useful to use location comments during developing. But, it should be erased.
	2. If it's not removed, it's a trash

	```java
	// Actions ///////////////////////////////////////
	```

9. **Comments after ), }, ] (close brackets)**
	1. If it is a superimposed and lengthy function, it may be meaningful
	2. But, like these days, these kinds of comments are useless because functions are small and encapsulated

	```java
	try {
	  while ((line = in.readLine()) != null) {
	    ...
	  } // while
	  ...
	} // try
	```

10. **Comments that credits or expresses the author**
	```java
	// Jay added
	```

11. **Commented codes**
	1. If other developers see commented codes, they'll hesitate to erase it even the useless.
	2. Delete obsolete codes, not commented
	```java
	InputStreamResponse response = new InputStreamResponse();
	response.setBody(formatter.getResultStream(), formatter.getByteCount());
	// InputStream resultStream = formatter.getReultStream();
	// StreamReader reader = new StreamReader(resultStream);
	```

12. **HTML codes**
	1. "In the source code, the Html annotation is abhorrent itself" from "clean code"
	```java
	/**
	 * This is for the test
	 * This task returns the results from the test
	 * <pre>
	 *  <p>
	 *    ...
	 *  </p>
	 * </pre>
	```

13. **Global information**
	1. If we need to comment, only write the code near it

	```java
	/**
	 * Test Port: <b>8082</b>
	 * 
	 * @param fitnessPort
	 */
	public void setFitnessePort(int fitnessePort) {
	  this.fitnessePort = fitnessePort;
	}
	```

14. **Too much information**
	1. It's probably useless
	```java
	/*
	  Too much information shared in the workplace. Irrelevant information exchanged
	  at work. A lack of alignment between all the discussions going on at the same 
	  time in the workplace. Not enough time given to the employees to process the
	  information they receive.
	*/
	```

15. **Ambiguous relationship**
	1. If the relationship between codes and comments is not clear, it will make it harder for the reader to understand

	```java
	/**
	 * Array is started with enough size to put every pixels in it.
	 * And, 200 bytes are added for header information.
	 */
	this.pngBytes = new byte[((this.width + 1) * this.height * 3) + 200];
	```

16. **Function header**