const genericMethods = require('./../method/genericMethods');

const HelpHandler = {
    canHandle(handlerInput) {
        return genericMethods.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.HelpIntent');
    },
    handle(handlerInput) {
        return genericMethods.speakAndReprompt(handlerInput, "DA DEFINIRE", "DA DEFINIRE");
    },
};

module.exports = HelpHandler;
