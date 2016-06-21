keitheous.com
=============

This is a personal website to promote my work and let the world know I am as a Web Developer. I have decided to test out parallax.js by Matthew Wagerfield (you can visit his website here [link](http://matthew.wagerfield.com/parallax/)) for my website to give users a 3D view while browsing through the page. **This page is YET TO BE a responsive designed webpage**.

Understanding Parallax.js
-------------------------

Parallax.js utilizes class "layer" and meta-data (0.0-1.0) to sort the images in the z-index, overlapping one another, in order for the images to move at their respective pace as you scroll across it.

Navigating through the page
---------------------------
The page includes an About Me section, as well as, a Contact and Project section which is accessible by clicking on the SnowMan. These images are drawn using Paint, affordable and time effective. Pixel-wise, meh. Some day when I can afford Adobe Illustrator, I'll come back and make the changes.

Initially, I wanted to make the clouds into navigation buttons. I soon realized that this was harder to accomplish due to the nature of Parallax.js where images are stacked on top of one another and the front-most element becomes the only clickable element on the stack.

Animation
---------
There are two layers of "snow-balls" moving up and down alternately in the back and foreground. This is accomplished using JQuery's animate and delay. Similar effects are implemented to the clouds.

The thought bubble is timed. An array of thoughts are hardcoded and displayed randomly. When the SnowMan is clicked, and if else statement turn thoughts into "success..".

Future Improvements
-------------------
In the future, I would like to implement Responsive Web Design to give viewers a pleasant experience, while viewing through different platforms.
