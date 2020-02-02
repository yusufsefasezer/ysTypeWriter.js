# ysTypeWriter.js
ysTypeWriter.js is a simple typewriter typing plugin, without need additional components.

### [Download](https://github.com/yusufsefasezer/ysTypeWriter.js/archive/master.zip) / [Demo](http://www.yusufsezer.com/ysTypeWriter.js/) / [yusufsezer.com](http://www.yusufsezer.com)

# Getting Started

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

### 1. Include ysTypeWriter on your site.

```html
<script src="path/to/ystypewriter.js"></script>
```
### 2. Initialize ysTypeWriter.

In the footer of your page, after the content, initialize ysTypeWriter. And that's it, you're done. Nice work!

**Example 1**

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
```

**Example 2**

```javascript
var customElement = document.querySelector('.custom-element');
var myTypeWriter = new ysTypeWriter(customElement);
```

### 3. Use ysTypeWriter events in your own scripts

You can also call ysTypeWriter's methods in your own scripts.

#### writeText()

Write anything text in selected HTMLElement.

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeText(
	text,  // text to be typed
	speed, // speed in milliseconds
);
```

**Example 1**

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeText('Hello ysTypeWriter');
```

**Example 2**

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeText('Hello ysTypeWriter', 100);
```

#### writeHTML()

Write anything HTML in selected HTMLElement.

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeHTML(
	html,  // HTML to be typed
	speed, // speed in milliseconds
);
```

**Example 1**

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeHTML('Hello My name is <strong>Yusuf</strong> <em>SEZER</em>');
```

**Example 2**

```javascript
var myTypeWriter = new ysTypeWriter('p#text');
myTypeWriter.writeHTML('Hello My name is <strong>Yusuf</strong> <em>SEZER</em>', 100);
```

**Example 3**

```javascript
var customElement = document.querySelector('.custom-element');
var myTypeWriter = new ysTypeWriter(customElement);
myTypeWriter.writeHTML(customElement.innerHTML);
```


# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

Created by [Yusuf SEZER](http://www.yusufsezer.com)
