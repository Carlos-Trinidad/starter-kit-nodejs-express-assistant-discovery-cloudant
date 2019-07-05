const AssistantV2 = require('ibm-watson/assistant/v2'); // watson sdk
const ENV = require('../configuration/env');

const ASSISTANT_CREDENTIALS = ENV.assistant_credentials;
const ASSISTANT_ID = ENV.assistant_id;

var assistant = new AssistantV2({
    iam_apikey: ASSISTANT_CREDENTIALS.apikey,
    version: '2019-02-28',
    url: ASSISTANT_CREDENTIALS.url
});

/* METODOS */

let sendMessage = async (message) => {

    let payloadSession = {
        assistant_id: ASSISTANT_ID
    }
    let resultSession = await assistant.createSession(payloadSession);


    let payloadAssistant = {
        assistant_id: ASSISTANT_ID,
        session_id: resultSession.session_id,
        input: {
            message_type: 'text',
            text: message.text,
            options: {
                return_context: true,
                alternate_intents: true
            }
        }
    };

    let resultAssistant = await assistant.message(payloadAssistant);

    return resultAssistant;
};


module.exports = {
    sendMessage
}