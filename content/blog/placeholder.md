---
title: Hello h1
publishedAt: July 02, 2023
---

Lorem ipsum dolor sit amet consectetur adipisicing elit.

Perferendis doloremque eum asperiores quidem dicta,

```ts
let doc = document.querySelector("html");
let divElement = document.createElement("div");
doc.style.overflowY = "hidden";
doc.style.overflowX = "hidden";
// Set any desired attributes or styles for the div
divElement.style.backgroundColor = "black";
divElement.style.width = "100vw";
divElement.style.height = "100vh";
divElement.style.zIndex = "1000";
divElement.style.position = "absolute";

// Get a reference to the body element
var bodyElement = document.getElementsByTagName("body")[0];

// Insert the div as the first child of the body
bodyElement.insertBefore(divElement, bodyElement.firstChild);
```
