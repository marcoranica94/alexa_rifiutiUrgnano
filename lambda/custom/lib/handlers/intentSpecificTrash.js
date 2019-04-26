const message = require('../constants/messages');

const SpecificTrashHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'SpecificTrashIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(message.STOP)
            .getResponse();
    },
};

module.exports = SpecificTrashHandler;
