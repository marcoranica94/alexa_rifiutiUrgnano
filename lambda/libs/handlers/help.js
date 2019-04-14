import messages from './../messages';

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak("DA DEFINIRE")
            .reprompt("DA DEFINIRE")
            .getResponse();
    },
};

export default HelpHandler;
