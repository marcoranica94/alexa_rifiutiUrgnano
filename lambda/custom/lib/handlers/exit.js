const message = require('./../constants/messages');
const genericMethods = require('./../method/genericMethods');

const ExitHandler = {
    canHandle(handlerInput) {
        return genericMethods.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.CancelIntent')
            && genericMethods.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return genericMethods.getSpeechAlexa(handlerInput, message.STOP, true);
    },
};

module.exports = ExitHandler;
