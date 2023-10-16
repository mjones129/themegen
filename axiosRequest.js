import axios from 'axios';
import fs from 'fs';
import unzipper from 'unzipper';

//define some global variables
let link = '';
let slug = 'akismet';
let file = '';
let outputDirectory = '../../plugins/';

//request the download link for the latest version of the wordpress plugin, based on the slug
async function getDownloadLink(slug) {
  
  await axios.get(`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=${slug}`)
  .then(function (response) {
    //save the server response to a global variable nd return it
    link = response.data.download_link;
    console.log(`Download link: ${link}`)
    return link;
  })
  .catch(function (error) { //catch any errors
    console.log(error);
  })

}

//make a get request to whatever download link line 14 returns
async function getFile(link) {
  await axios({
    method: 'get',
    url: link,
    responseType: 'stream'
  })
  .then(function(response) {
    //capture the server response into a data stream and pipe it into a new file in the plugins directory
    response.data.pipe(fs.createWriteStream(`../../plugins/${slug}.zip`))
    file = `../../plugins/${slug}.zip`
    console.log('New file has been returned');
    return file;
  })
}

//unzip the file into the directory that Wordpress is expecting
async function decompressFile(file) {
  //await the file, because you can't extract the file if it isn't finished downloading yet
  await file;
  //once the file is finished downloading, extract it to the plugins director
  fs.createReadStream(file)
  .pipe(unzipper.Extract({ path: outputDirectory })).on('finish', (err) => {
    if (err) throw err;
    console.log('extraction complete');
    //after the file has been successfully unzipped with no errors, deleted the original .zip
    fs.unlinkSync(file, (err) => {
      if (err) throw err;
    });
    console.log("cleanup successful");
  });
}
 

//combine all that into a single function
async function downloadPlugin(slug) {
  await getDownloadLink(slug);
  await getFile(link);
  await decompressFile(file);
}


downloadPlugin(slug);
