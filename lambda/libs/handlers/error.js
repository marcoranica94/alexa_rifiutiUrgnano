const messages = require('./../messages');

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak(messages.ERROR)
            .reprompt('Sorry, an error occurred.')
            .getResponse();
    },
};

module.exports = ErrorHandler;
