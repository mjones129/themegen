import axios from 'axios';
import fs from 'fs';

//this doesn't work because I need to wait on two things:
//1 the fileURL is just the API that returns JSON
//2 you need to wait on that API call and JSON to come back and load that into a variable
//3 Only after that variable contains JSON data do you access the download_link key
//4 Only after you have a valid download_link key do you pass it through the axios function below, piping that response into a datastream and outputting the file.

let fileUrl = 'https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=woocommerce';
let outputLocationPath = '../pluginDirectory/'
let link = fileUrl.download_link;
axios({
  method: "get",
  url: download_link,
  responseType: "stream"
}).then(function (response) {
  response.data.pipe(fs.createWriteStream(outputLocationPath));
});

