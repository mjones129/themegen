import { copyFile, mkdir } from 'fs/promises';
import promptSync from 'prompt-sync';
const prompt = promptSync();


const dest = prompt('Enter deploy directory without the trailing slash: ');

async function deployTheme(dest) {
  try {
    await mkdir(`${dest}/includes`);
    await copyFile("./lib/accordion.php", `${dest}/includes/accordion.php`);
    await copyFile("./lib/hero.php", `${dest}/includes/hero.php`);
    await copyFile("./lib/cards.php", `${dest}/includes/cards.php`);
  } catch (err) {
    console.error(err.message);
  }
  copyFile("./lib/header.php", `${dest}/header.php`);
  copyFile("./lib/footer.php", `${dest}/footer.php`);
  copyFile("./lib/front-page.php", `${dest}/front-page.php`);
  copyFile("./lib/functions-classic.php", `${dest}/functions.php`);
  copyFile("./lib/screenshot.png", `${dest}/screenshot.png`);
  copyFile("./lib/index.php", `${dest}/index.php`);
  copyFile("style.css", `${dest}/style.css`);
}

deployTheme(dest);
