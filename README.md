# A Minimalist WordPress Theme Generator

ThemeGen is a bare-bones WordPress theme generator that happens entirely in the terminal. Simply answer a few questions and generate basic theme files instantly.

## Requirements:
* A computer
* Internet
* WordPress version 6.3.1 or higher
* NodeJS Version 18.18 or higher
* Git

## How Does It Work?
1. Open a terminal window and navigate to your empty theme folder like so: ```cd wp-content/themes/emptyThemeFolder```.
2. Clone this repository. ```git clone https://github.com/mjones129/themegen.git .```
3. Install deps by running ```npm install```.
4. Execute the ThemeGen file by running ```node themegen.js```.
5. Follow the prompts.
6. A new ```style.css``` file will be generated in the root of your theme folder and should now be recognized by WordPress.