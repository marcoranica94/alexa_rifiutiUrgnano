const message = require('./../constants/messages');
const genericMethods = require('./../method/genericMethods');

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return genericMethods.getSpeechAlexa(handlerInput, message.ERROR);
    },
};

module.exports = ErrorHandler;
