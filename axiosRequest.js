import axios from 'axios';
import {promises as fsPromises} from 'fs';
import fs from 'fs';
// import unzipper from 'unzipper';
import extract from 'extract-zip';
// import slug from './themegen.js';
import path from 'path';

//define some global variables
let link = '';
let file = '';
let outputDirectory = path.resolve('../../plugins/');
let finished = true;

//request the download link for the latest version of the wordpress plugin, based on the slug
async function downloadPlugin(slug) {
  finished = false;
  await axios.get(`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`)
  .then(function (response) {
    //save the server response to a global variable nd return it
    link = response.data.download_link;
    console.log(`Download link: ${link}`);
    getFile(slug);
  })
  .catch(function (error) { //catch any errors
    console.log(error);
  })
  return;

}

//make a GET request to whatever download link line 15 returns
async function getFile(slug) {
  await axios({
    method: 'get',
    url: `${link}`,
    responseType: 'stream',
    onDownloadProgress: function (progressEvent) {
      console.log(`Downloading ${slug}: ${(progressEvent.progress*100).toFixed(2)}%`);
    }
  })
  .then(function(response) {
    const writer = fs.createWriteStream(`../../plugins/${slug}.zip`);
    //capture the server response into a data stream and pipe it into a new file in the plugins directory
    response.data.pipe(writer).on('finish', (err) => {
      if (err) throw err;
      file = `../../plugins/${slug}.zip`
      console.log('Download complete!');
      decompressFile(file);
    })
  })
  return file;
}
  



//unzip the file into the directory that Wordpress is expecting
// async function decompressFile(file) {
//   console.log('Extracting...');
//   fs.createReadStream(file)
//   .pipe(unzipper.Extract({ path: outputDirectory })).on('close', function(err) {
//     if (err) throw err;
//     console.log('Extraction complete.');
//   })
//     return;
// }

async function decompressFile(file) {
  console.log('Extracting...');
  try {
    await extract(file, { dir: outputDirectory })
    console.log('Extraction complete')
  } catch (err) {
    // handle any errors
    console.log(err);
  }
  await cleanup(file);
  return;
}
 
//delete the old zip after extraction completes
async function cleanup(file) {
  console.log('Cleaning up...')
  fs.unlink(file, () => {
    console.log('Cleanup successful.');
    finished = true;
    // console.log('Build complete. Thanks for using Themegen!');
  })
  return;
}

//combine all that into a single function
// async function downloadPlugin(slug) {
//   await getDownloadLink(slug);
//   // await getFile(link);
//   // await decompressFile(file);
//   // await cleanup();
// }


//do it
// downloadPlugin(slug);

// exports.axiosRequest = downloadPlugin;
export {downloadPlugin, finished};
// module.exports = {downloadPlugin};'extraction complete'
// exports.downloadPlugin = downloadPlugin;
