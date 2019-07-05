const IBMCloudEnv = require('ibm-cloud-env');

IBMCloudEnv.init("/mapping.json");

let ENV = {
    assistant_credentials: IBMCloudEnv.getDictionary("assistant_credentials"),
    assistant_id: IBMCloudEnv.getDictionary("assistant_id").value,
    discovery_credentials: IBMCloudEnv.getDictionary("discovery_credentials"),
    cloudant_credentials: IBMCloudEnv.getDictionary("cloudant_credentials"),
    cloudant_database: IBMCloudEnv.getDictionary('cloudant_database').value
}

module.exports = ENV;