const prompt = require('prompt-sync') ();
const fs = require('fs');

const themeName = prompt("What's the name of your theme?");
console.log("That's an awesome name. Good thinking!");
const authorName = prompt("What's the author's name?");
console.log(`Nice to meet you, ${authorName}!`);
const authorURI = prompt(`Do you have a website, ${authorName}?`);
console.log("Awesome, I'll be sure to include that.");
const themeDesc = prompt("How would you describe this theme?");

let stylesheetData =   `/*
Theme Name: ${themeName}
Theme URI: https://wordpress.org/themes/twentytwenty/
Author: ${authorName}
Author URI: ${authorURI}
Description: ${themeDesc}
Tags: blog, one-column, custom-background, custom-colors, custom-logo, custom-menu, editor-style, featured-images, footer-widgets, full-width-template, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-styles, wide-blocks, accessibility-ready
Version: 1.3
Requires at least: 5.0
Tested up to: 5.4
Requires PHP: 7.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: twentytwenty
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/`


fs.writeFile('style.css', stylesheetData, (err) => {
    if(err) throw err;
});