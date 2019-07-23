const ENV = require('../configuration/env');
const cloudant = require('../configuration/cloudant');

const DB = cloudant.db.use(ENV.querys_database);

let saveQuery = async (queryParams, resultDiscovery) => {

    console.log(queryParams);
    console.log(resultDiscovery);

    let actualDate = new Date();
    let queryToSave = {
        date: actualDate,
        input: queryParams,
        output: resultDiscovery
    }

   /*  let resultInsert = await DB.insert(queryToSave);
    let response = {
        data: resultInsert,
        statusCode: 200
    };
    return response; */

    DB.insert(queryToSave)
        .then(result => {
            let response = {
                data: result,
                statusCode: 200
            }
            console.log(response)
            return response;
        })
        .catch(err => {
            let response = {
                data: {},
                statusCode: err.statusCode,
                message: "Error",
                error: err
            }
            console.log(response)
            return response;
        });

}


module.exports = {
    saveQuery
}