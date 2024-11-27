When developing with React, it's very common to make components like list by repeating the array form data.

However, we can usually see the warning if we set eslint.

![warning](https://github.com/user-attachments/assets/50f5276e-987a-4d76-8852-dbc745f599dc)

⚠️ **Missing "key" prop for element in iterator**

It means that we don't pass the key property to the component in repeated process. Some developers grant index value to key property, but it causes another warning.

![warning2](https://github.com/user-attachments/assets/7af5d1aa-dea6-4836-b0cd-f588e86542d9)

⚠️ **Do not use Array index in keys**

Why we don't do like this?

### Why key should not be index

##### Unique key

First of all, if the index is used as the key value, each component cannot be properly identified.

For example, let's say that you have codes with values Bob, Joe, and Fred to form a list. React creates a DOM element for each individual and attaches the DOM element to that key. If the key is an index, each object could not actually be uniquely identified.

Specifically, when Bob is removed, Joe is now the first item and Fred is the second. In other words, the index number is difficult to be a unique key value because it can change when certain elements are removed.

##### Performance

Secondly, if the index value is given to the key, the performance may deteriorate when the array data is changed.

![pitfall](https://github.com/user-attachments/assets/daac5650-5d51-4a69-b159-346a5d830927)

Even in the official React document, it is recommended not to put the Index value in the key value. There are three main reasons.

1. When you insert, delete, or rearrange items, the rendering order changes over time.

2. In addition to the index value, the case of generating values on the spot is similar.

3. The key is not actually delivered to the component and is used only in react.

---

[](https://yozm.wishket.com/magazine/detail/2634/)

[](https://react.dev/learn/rendering-lists)

[](https://www.reddit.com/r/react/comments/1daj9nz/whats_so_bad_about_index_as_key/)
