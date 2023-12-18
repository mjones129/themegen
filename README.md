<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mjones129/themegen">
    <!-- <img src="images/steps.svg" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">ThemeGen</h3>

  <p align="center">
    Bootstrap your next WordPress theme just by answering a few questions.
    <br />
    <br />
    <br />    
    <a href="https://github.com/mjones129/themegen/issues">Report Bug</a>
    ·
    <a href="https://github.com/mjones129/themegen/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Screen Shot][product-screenshot]](https://github.com/mjones129/themegen)

This tool alows developers to quickly generate a WordPress theme and bootstrap a custom website by simply answering a few quick questions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![Node][NodeJS]][Node-url]

[![NPM][NPM]][NPM-url]

<!-- [![Glide][GlideJS]][Glide-url] -->

<!-- [![Deploybot][Deploybot]][Deploybot-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project is intended to help other WordPress developers who are comfortable building custom themes and plugins, working with NodeJS and NPM, as well as some basic command line skills. The idea is to simply run clone the repo and install the dependencies, execute the program in the terminal, and follow the question prompts.

### Prerequisites

As mentioned above, this is a WordPress plugin that will depend on a few other things being in place. Here's a brief rundown of what's required:

* WordPress version 6.3.1 or higher
* PHP version 8.2 or higher
* NodeJS version 18.18 or higher
* Git


### Installation

1. Open a terminal window and navigate to your empty theme folder like so: ```cd wp-content/themes/emptyThemeFolder```.
2. Clone this repository. ```git clone https://github.com/mjones129/themegen.git .```
3. Install deps by running ```npm install```.
4. Execute the ThemeGen file by running ```npm run themegen```.
5. Follow the prompts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- How It Works -->
## How It Works


6. A new WordPress theme will be generated in your directory and your selected plugins will be downloaded and installed automagically.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Classic Theme Support
- [x] Add Blocks Theme Support
- [x] Download and install a custom list of plugins in parallel
- [x] Add support for custtom colors defined during generation
- [ ] Add basic theme template files for Blocks themes
- [ ] Add basic theme template files for Classic themes

See the [open issues](https://github.com/mjones129/themegen/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: lib/screenshot.png
[Deploybot]: https://img.shields.io/badge/deployed_with-Deploybot-white
[Deploybot-url]: https://milesit.deploybot.com/
[NodeJS]: https://img.shields.io/badge/v18.18.0-NodeJS-green
[Node-url]: https://nodejs.org/
[NPM]: https://img.shields.io/badge/v10.2.0-NPM-CD0000
[NPM-url]: https://npmjs.com/
[GlideJS]: https://img.shields.io/badge/v3.6.1-GlideJS-ED145B
[Glide-url]: https://glidejs.com/
