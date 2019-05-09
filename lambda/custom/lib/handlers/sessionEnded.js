const common = require('../method/common');

const SessionEndedHandler = {
    canHandle(handlerInput) {
        return common.checkRequestType(handlerInput, 'SessionEndedRequest');

        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};

module.exports = SessionEndedHandler;
