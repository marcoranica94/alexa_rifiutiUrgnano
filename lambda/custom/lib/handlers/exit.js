const message = require('./../constants/messages');
const genericMethods = require('./../method/genericMethods');

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return genericMethods.getSpeechAlexa(handlerInput, message.STOP, true);
    },
};

module.exports = ExitHandler;
