const message = require('./../constants/messages');
const common = require('../method/common');

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return common.speak(handlerInput, message.ERROR);
    },
};

module.exports = ErrorHandler;
