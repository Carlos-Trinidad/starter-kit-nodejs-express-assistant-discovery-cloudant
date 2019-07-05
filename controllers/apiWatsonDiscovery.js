const DiscoveryV1 = require('ibm-watson/discovery/v1');
const ENV = require('../configuration/env');
const CLOUDANT = require('./apiCloudant');

const DISCOVERY_CREDENTIALS = ENV.discovery_credentials;

const discovery = new DiscoveryV1({
    version: '2019-04-30',
    iam_apikey: DISCOVERY_CREDENTIALS.apikey,
    url: DISCOVERY_CREDENTIALS.url
});


let query = async (query) => {

    let queryParams = await getParams(query);
    let resultDiscovery = await discovery.query(queryParams);

    CLOUDANT.saveQuery(queryParams, resultDiscovery); //async

    return resultDiscovery;
}

let getParams = async (query) => {

    let queryParams = {
        environment_id: '[ADD_HERE_ENVIRONMENT_ID]',
        collection_id: '[ADD_HERE_COLLECTION_ID]',
        natural_language_query: query.text,
        highlight: true,
        passages: true,
        /*
        aggregation:,
        query:,
        return_fields:,
        sort:,
        passages_count:,
        passages_characters:, 
        */
    };

    if (query.options) {
        if (query.options.count) {
            queryParams.count = query.options.count;
        }
        if (query.options.offset) {
            queryParams.offset = query.options.offset;
        }
        if (query.options.filter) {
            queryParams.filter = query.options.filter;
        }
    }

    return queryParams;
}

module.exports = {
    query
}