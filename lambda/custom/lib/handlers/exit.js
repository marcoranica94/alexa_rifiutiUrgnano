const message = require('./../constants/messages');
const common = require('../method/common');
const intents = require('../constants/intents');

const ExitHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.CANCEL)
            && common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.STOP);
    },
    handle(handlerInput) {
        return common.speak(handlerInput, message.STOP, true);
    },
};

module.exports = ExitHandler;
