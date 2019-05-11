const common = require('../method/common');
const intents = require('../constants/intents');

const SessionEndedHandler = {
    canHandle(handlerInput) {
        return common.checkRequestType(handlerInput, intents.SESSION_END);
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};

module.exports = SessionEndedHandler;
