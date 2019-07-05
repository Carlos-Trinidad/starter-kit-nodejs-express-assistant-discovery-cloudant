const Cloudant = require('@cloudant/cloudant');
const ENV = require('../configuration/env');

var cloudant = new Cloudant({
    url: ENV.cloudant_credentials.url,
    plugins: {
        iamauth: {
            iamApiKey: ENV.cloudant_credentials.apikey
        }
    }
});

module.exports = cloudant;