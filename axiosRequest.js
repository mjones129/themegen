import axios from 'axios';
import fs from 'fs';
import unzipper from 'unzipper';

//this doesn't work because I need to wait on two things:
//1 the fileURL is just the API that returns JSON
//2 you need to wait on that API call and JSON to come back and load that into a variable
//3 Only after that variable contains JSON data do you access the download_link key
//4 Only after you have a valid download_link key do you pass it through the axios function below, piping that response into a datastream and outputting the file.

let link = '';
let slug = 'akismet';
let file = '';
let outputDirectory = '../../plugins/';
// async function downloadPlugin(slug) {
//   //get the JSON
//   const APIcall = `https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`;
//   await axios.get(APIcall)
//     .then (function (response) {
//     // response.data.pipe(fs.createWriteStream(outputLocationPath));
//     const sourceURL = response.data.download_link;
//     return sourceURL;
//     })
//     .then (function () {
//       sourceURL.pipe(fs.createWriteStream(outputLocationPath));
//     })
// }

async function getDownloadLink(slug) {
  
  await axios.get(`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`)
  .then(function (response) {
    link = response.data.download_link;
    console.log(`Download link: ${link}`)
    return link;
  })
  .catch(function (error) {
    console.log(error);
  })

}

async function getFile(link) {
  await axios({
    method: 'get',
    url: link,
    responseType: 'stream'
  })
  .then(function(response) {
    response.data.pipe(fs.createWriteStream(`../../plugins/${slug}.zip`))
    file = `../../plugins/${slug}.zip`
    console.log('New file has been returned');
    return file;
  })
}

async function decompressFile(file) {
  await file;
  fs.createReadStream(file)
  .pipe(unzipper.Extract({ path: outputDirectory })).on('finish', (err) => {
    if (err) throw err;
    console.log('extraction complete');
    fs.unlinkSync(file, (err) => {
      if (err) throw err;
    });
    console.log("cleanup successful");
  });
}
  
async function downloadPlugin(slug) {
  await getDownloadLink(slug);
  await getFile(link);
  await decompressFile(file);
}




downloadPlugin(slug);
//get the link
// GET request for remote image in node.js