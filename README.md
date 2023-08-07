# ysTypeWriter.js
ysTypeWriter.js is a simple typewriter typing plugin, without need additional components.

**ysTypeWriter.js** is a highly functional and user-friendly **JavaScript typewriter library** that seamlessly integrates into any webpage or application. With this remarkable library, you can effortlessly incorporate captivating and dynamic typing animations into your projects, bringing your text to life and enhancing the overall user experience. Whether you need to highlight important details, create engaging content, or simply add an interesting touch to your website, ysTypeWriter.js is the perfect solution.

What sets ysTypeWriter.js apart from other typewriter libraries is its simplistic yet efficient design. Unlike many similar plugins, ysTypeWriter.js requires no additional components or dependencies to function optimally. This means that all the necessary elements for creating a mesmerizing typing animation are seamlessly bundled within the library itself. With just a few simple lines of code, you can instantly transform any plain text on your webpage into an eye-catching typewriter effect.

Implementing ysTypeWriter.js into your project is effortless. The library provides an intuitive and easy-to-understand API, enabling even novice developers to quickly grasp its functionality. By following the concise documentation provided along with the library, you can easily configure your typing animations to suit your specific requirements. Whether you want to customize the typing speed, adjust the delay between sentences, or add a distinctive sound effect, ysTypeWriter.js offers a wide range of options to tailor the typewriter animation to your liking.

Furthermore, ysTypeWriter.js is lightweight and optimized for performance, ensuring that your webpage remains fast and responsive. Its efficient codebase guarantees smooth execution, allowing users to enjoy seamless typing animations without any noticeable drops in performance.

Another noteworthy feature of ysTypeWriter.js is its excellent compatibility with modern web technologies. The library is designed to work flawlessly across multiple browsers, including Chrome, Firefox, Safari, and Edge, ensuring that your **typewriter animations** are consistently displayed on various platforms. Moreover, ysTypeWriter.js is fully responsive and mobile-friendly, meaning your typewriter effects will scale perfectly on any device, from mobile phones to large desktop screens.

### [Download](https://github.com/yusufsefasezer/ysTypeWriter.js/archive/master.zip) / [Demo](https://www.yusufsezer.com/projects/ystypewriter-js/) / [yusufsezer.com](https://www.yusufsezer.com)

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

Created by [Yusuf Sezer](https://www.yusufsezer.com)
