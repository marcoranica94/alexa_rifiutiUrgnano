const common = require('../method/common');
const intents = require('../constants/intents');

const HelpHandler = {
    canHandle(handlerInput) {
        return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.HELP);
    },
    handle(handlerInput) {
        return common.speakAndReprompt(handlerInput,
            "Chiedimi quando portare fuori un tipo di rifiuto",
            "Posso dirti quando potertò fuori il rifiuto");
    },
};

module.exports = HelpHandler;
