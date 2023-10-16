import axios from "axios";
import fs from "fs";

async function getFile() {
    await axios.get({
      url: 'https://downloads.wordpress.org/plugin/woocommerce.8.2.0.zip',
      responseType: 'blob',
      onDownloadProgress: function(progressEvent) {
        console.log(progressEvent)}
      })
    .then(function (response) {
        console.log(response.data);
    //   response.data.pipe(fs.createWriteStream('../pluginDirectory/wooplugin.zip'))
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  getFile();