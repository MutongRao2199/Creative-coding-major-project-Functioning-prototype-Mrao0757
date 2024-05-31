# Creative-coding-major-project-Functioning-prototype-Mrao0757
Creative coding major project-Functioning prototype-mrao0757

# Interactive Description

I chose time-based animations, which automatically start playing when you open a web page. It is a universe expressed in the style of [Constructivism art](https://en.wikipedia.org/wiki/Constructivism_(art)). The stars at the center of the universe (represented by concentric circles) will contract in a breathing manner, and some stars will rotate around the center of the universe. There are also smaller stars that twinkle at different frequencies in the deep blue of the universe.

# Technical specification

- **Breathing effect**: This is achieved by `setInterval(breathingEffect, 20)`, which updates the `baseRadius` value every 20 milliseconds, and by increasing or decreasing the `baseRadius` to achieve the breathing effect in concentric circles.
- **Rotation effect**: By `setInterval(updateRotatingCircles, 20)` to achieve, every 20 milliseconds to update the angle of the rotation circle, change their position to achieve the planet rotation effect.
- **Flicker effect**: By `setInterval(toggleVisibility1, 500)` and `setInterval(toggleVisibility2, 700)`, a total of fifty stars are divided into two groups. Switch the visibility of a group of stars every 500 milliseconds and 700 milliseconds.

# Changes to the original code

I organized and summarized the code of drawing the circle position in the original code, reducing the number of lines of code to facilitate my subsequent programming.

# Source of inspiration

My initial inspiration came from the classical astronomical clock, which is also a time-keeping tool, and the position of major planets such as the sun and moon is often shown on the clock. This gave me the idea to make the stars revolve around the center of the picture.
![Astronomical Clock](https://lisaboyer.com/Claytonsite/copernicanfull.jpg)

My other source is Giovanni di Paolo's *The Creation of the World and The Expulsion from Paradise* (1445). It shows Adam and Eve being thrown out of heaven, with layers of circles like portals, and the Earth in the middle. This painting gave me the idea of slowly shrinking concentric circles. Slowly zooming in and out, the center of the image resembles a black hole or a portal, revealing the mysteries of the universe.
![The Creation of the World and The Expulsion from Paradise](https://www.christiesrealestate.com/blog/wp-content/uploads/2019/04/Art-Bibical-panel-Adam-Eve-GettyImages.jpg)

# Web resources and external references

To complete this task, in addition to what I learned in the course, I watched tutorials from codedamn, youtube, geeksforgeeks, and others as references. To find the smallest fifty circles, I use `sort()`, `map()`, and Array Functions. This is from [p5.js sort](https://p5js.org/reference/#/p5/sort), [p5.js map](https://p5js.org/reference/#/p5/map), [Array Functions tutorial](https://happycoding.io/tutorials/p5js/array-functions). At the same time, in order to get a more concise structure of my coding, I watched the p5.js tutorial of The Coding Train on youtube [The Coding Train p5.js tutorial](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).
