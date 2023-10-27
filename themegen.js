//require the essentials
// import { downloadPlugin } from './axiosRequest.mjs';
import figlet from 'figlet';
import {promises as fs} from 'fs';
// import https from 'https';
// import prompt from 'prompt-sync';
import promptSync from 'prompt-sync'; const prompt = promptSync();
// const https = require('https');
import {downloadPlugin, finished} from './axiosRequest.js';


//set some defaults
let themeTags = '';
let themeVersion = '0.0.1';
const options = {
    encoding: 'utf8',
    mode: 0o755,
    flag: ''
};
const blocksIndex = './templates/index.html';
const blocksIndexData = '';
const classicIndex = './index.php';
const classicIndexData = '';
let slugs = [];
// let slug = axiosRequest.slug;





//begin program
console.log(
    figlet.textSync("ThemeGen", {
        font: 'Cybermedium',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
    })
);

console.log("Welcome to ThemGen!");
const themeType = prompt("Is this a Blocks theme or a Classic theme? (b/c): ");
if (themeType == 'b') {
    fs.mkdir('./templates/');
    if(fs.readdir('./templates/') == []){
        fs.copyFile('./lib/index.html', './templates/index.html');
    }
} if (themeType == 'c') {
    fs.copyFile('./lib/index.php', './index.php');
    }
fs.copyFile('./lib/screenshot.png', './screenshot.png');
const themeName = prompt("What's the name of your theme? ");
console.log("That's an awesome name. Good thinking!");
const authorName = prompt("What's the author's name? ");
console.log(`Nice to meet you, ${authorName}!`);
const authorURI = prompt(`Have a website, ${authorName}? Please enter the URL: `);
console.log("Awesome, I'll be sure to include that.");
const themeDesc = prompt("How would you describe this theme? ");
console.log("Very nice!");
const themeTagCheck = prompt("Would you like to add any tags to your theme? (y/n) ");

if (themeTagCheck == "y") {
    themeTags = prompt('Please enter your theme tags: ');
}


const versionCheck = prompt("I assume this is version 0.0.1? (y/n) ");

if (versionCheck == "y") {
    themeVersion = "0.0.1";
} if (versionCheck == "n") {
    themeVersion = prompt("Please enter version number: ");
}

const allOrNothing = prompt("Plugin time! Install the usual suspects, or cherry pick what you want? (u/c) ");

if (allOrNothing === 'c') {
    const ecomm = prompt("Install WooCommerce? (y/n) ");
    const wtf = prompt("Install What The File? (y/n) ");
    const bsr = prompt("Install Better Search Replace? (y/n) ");
    const emr = prompt("Install Enable Media Replace? (y/n) ");
    const eio = prompt("Install EWWW Image Optimizer? (y/n) ");
    const mwpw = prompt("Install ManageWP Worker? (y/n) ");
    const redir = prompt("Install Redirection? (y/n) ");
    const ssl = prompt("Install Really Simple SSL? (y/n) ");
    const svgsupport = prompt("Install SVG Support? (y/n) ");
    const wf = prompt("Install Wordfence Security? (y/n) ");
    const wpfc = prompt("Install WP Fastest Cache? (y/n) ");
    const hidelogin = prompt("Install WPS Hide Login? (y/n) ");
    const yoast = prompt("Install Yoast SEO? (y/n) ");
    const ydp = prompt("Install Yoast Duplicate Post? (y/n) ");

    if (ecomm === 'y') {
        slugs.push('woocommerce');
    } else {
        console.log('WooCommerce not downloaded.');
    }
    
    if (wtf === 'y') {
        slugs.push('what-the-file');
    } else {
        console.log('What the file not downloaded');
    }
    
    if (bsr === 'y') {
        slugs.push('better-search-replace');
    } else {
        console.log('Better Search Replace not downloaded.');
    }
    
    if (eio === 'y') {
        slugs.push('ewww-image-optimizer');
    } else {
        console.log('EWWW Image Optimizer not downloaded.');
    }
    
    if (mwpw === 'y') {
        slugs.push('worker');
    } else {
        console.log('ManageWP Worker not downloaded.');
    }
    
    if (wf === 'y') {
        slugs.push('wordfence');
    } else {
        console.log('Wordfence Security not downloaded.');
    }
    
    if (wpfc === 'y') {
        slugs.push('wp-fastest-cache');
    } else {
        console.log('WP Fastest Cace not downloaded.');
    }
    if (hidelogin === 'y') {
        slugs.push('wps-hide-login');
    } else {
        console.log("WPS Hide Login not downloaded.");
    }
    if (yoast === 'y') {
        slugs.push('wordpress-seo');
    } else {
        console.log("Yoast SEO not downloaded.");
    }
    if (ssl === 'y') {
        slugs.push('really-simple-ssl');
    } else {
        console.log('Really Simple SSL not downloaded.');
    }
    
    if (emr === 'y') {
        slugs.push('enable-media-replace');
    } else {
        console.log("Enalbe Media Replace not downloaded.");
    }

    if (redir === 'y') {
        slugs.push('redirection');
    } else {
        console.log('Redirection not downloaded.');
    }

    if (ydp === 'y') {
        slugs.push('duplicate-post');
    } else {
        console.log('Yoast Duplicate Post not downloaded.');
    }
    if (svgsupport === 'y') {
        slugs.push('svg-support');
    } else {
        console.log('SVG Support plugin not downloaded.');
    }
}

if (allOrNothing === 'u') {
    slugs.push('what-the-file', 'better-search-replace', 'ewww-image-optimizer', 'svg-support', 'enable-media-replace', 'really-simple-ssl', 'wordfence', 'wp-fastest-cache', 'wps-hide-login', 'wordpress-seo');
}


//remove spaces from theme name to create text domain
const textDomainCondensed = themeName.split(" ").join("");
//set the text domain to all lowercase
const textDomain = textDomainCondensed.toLowerCase();

//now that we have all the answers, we can populate the main style.css
let stylesheetData =   `/*
Theme Name: ${themeName}
Theme URI: https://wordpress.org/themes/twentytwenty/
Author: ${authorName}
Author URI: ${authorURI}
Description: ${themeDesc}
Tags: ${themeTags}
Version: ${themeVersion}
Requires at least: 6.3.1
Tested up to: 6.3.1
Requires PHP: 8.2
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ${textDomain}
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/`


await fs.writeFile('style.css', stylesheetData, (err) => {
    if(err) throw err;
    console.log(`Stylesheet generated!`);
});



if (slugs) {
    for (let i = 0; slugs[i]; i++) {
        await downloadPlugin(slugs[i]);
    }
}
// export default slug;
