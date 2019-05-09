const genericMethods = require('./../method/genericMethods');

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return genericMethods.getSpeechRepromptAlexa(handlerInput, "DA DEFINIRE", "DA DEFINIRE");
    },
};

module.exports = HelpHandler;
