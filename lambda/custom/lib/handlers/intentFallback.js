const common = require('../method/common');
const intents = require('../constants/intents');
const messages = require('../constants/messages');

const FallbackHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.FALLBACK);
    },
    handle(handlerInput) {
        return common.speakAndReprompt(handlerInput,
            messages.UNDERSTAND_INTENT,
            messages.UNDERSTAND_INTENT);
    },
};

module.exports = FallbackHandler;
