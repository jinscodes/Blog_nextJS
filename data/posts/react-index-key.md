When developing with React, it's very common to make components like list by repeating the array form data.

However, we can usually see the warning if we set eslint.

![warning](https://github.com/user-attachments/assets/50f5276e-987a-4d76-8852-dbc745f599dc)

⚠️ **Missing "key" prop for element in iterator**

It means that we don't pass the key property to the component in repeated process. Some developers grant index value to key property, but it causes another warning.

![warning2](https://github.com/user-attachments/assets/7af5d1aa-dea6-4836-b0cd-f588e86542d9)

⚠️ **Do not use Array index in keys**

Why we don't do like this?

### Why key should not be index

---

[](https://yozm.wishket.com/magazine/detail/2634/)

[](https://react.dev/learn/rendering-lists)
