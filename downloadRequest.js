const https = require('https');

//download some plugins
function getWoo() {
    https.get('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=woocommerce', res => {
        let data = [];
        res.on('data', chunk => {
            data.push(chunk);
        });

        res.on('end', () => {
            console.log("Response ended: ");
            const woo = JSON.parse(Buffer.concat(data));
            console.log(woo.download_link);
        })

    }).on('error', err => {
        console.log("Error: ", err.message);
    });
}

getWoo();