import axios from 'axios';
import {promises as fsPromises} from 'fs';
import fs from 'fs';
import unzipper from 'unzipper';
import slug from './themegen.js';

//define some global variables
let link = '';
let file = '';
let outputDirectory = '../../plugins/';

//request the download link for the latest version of the wordpress plugin, based on the slug
async function getDownloadLink(slug) {
  
  await axios.get(`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`)
  .then(function (response) {
    //save the server response to a global variable nd return it
    link = response.data.download_link;
    console.log(`Download link: ${link}`);
    getFile();
  })
  .catch(function (error) { //catch any errors
    console.log(error);
  })
  return;

}

//make a GET request to whatever download link line 15 returns
async function getFile() {
  await axios({
    method: 'get',
    url: `${link}`,
    responseType: 'stream',
    onDownloadProgress: function (progressEvent) {
      console.log(`Download progress ${(progressEvent.progress*100).toFixed(2)}%`);
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
async function decompressFile(file) {
  console.log('Extracting...');
  fs.mkdir(`${outputDirectory}/${slug}/`, (err) => {
    //once the file is finished downloading, extract it to the plugins directory
    if (err) throw err;
      fs.createReadStream(file)
      .pipe(unzipper.Extract({ path: outputDirectory })).on('close', function(err) {
        if (err) throw err;
        console.log('Extraction complete.');
        cleanup();
      })
    })
    return;
}

 //delete the old zip after extraction completes
 async function cleanup() {
  console.log('Cleaning up...')
  fs.unlink(file, () => {
    console.log('Cleanup successful.');
    console.log('Build complete. Thanks for using Themegen!');
  })
  return;
}
 

//combine all that into a single function
async function downloadPlugin(slug) {
  await getDownloadLink(slug);
  // await getFile(link);
  // await decompressFile(file);
  // await cleanup();
}


//do it
downloadPlugin(slug);

// exports.axiosRequest = downloadPlugin;
// export {downloadPlugin};
// module.exports = {downloadPlugin};'extraction complete'
// exports.downloadPlugin = downloadPlugin;