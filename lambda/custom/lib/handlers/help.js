const common = require('../method/common');

const HelpHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.HelpIntent');
    },
    handle(handlerInput) {
        return common.speakAndReprompt(handlerInput, "DA DEFINIRE", "DA DEFINIRE");
    },
};

module.exports = HelpHandler;
