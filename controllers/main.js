const apiWatsonAssistant = require('./apiWatsonAssistant');
const apiWatsonDiscovery = require('./apiWatsonDiscovery');

// Entry endpoints
let watsonAssistantSendMessage = async (req, res) => {

    let message = {
        text: req.body.text
    }

    try {
        let resultSendMessage = await apiWatsonAssistant.sendMessage(message);
        res.status(200).send(resultSendMessage);
    } catch (err) {
        responseError = await errorHandler(err);
        res.send(responseError);
    }

};

let watsonDiscoveryQuery = async (req, res) => {

    let query = {
        text: req.body.text,
        options: req.body.options
    }

    try {
        let resultDiscoveryQuery = await apiWatsonDiscovery.query(query);
        res.status(200).send(resultDiscoveryQuery);
    } catch (err) {
        responseError = await errorHandler(err);
        res.send(responseError);
    }

}

let errorHandler = async (error) => {

    console.log(error);

    return error;
};


module.exports = {
    watsonAssistantSendMessage,
    watsonDiscoveryQuery
}