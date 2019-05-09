const message = require('./../constants/messages');
const common = require('../method/common');

const ExitHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.CancelIntent')
            && common.checkRequestTypeAndName(handlerInput, 'IntentRequest', 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return common.speak(handlerInput, message.STOP, true);
    },
};

module.exports = ExitHandler;
