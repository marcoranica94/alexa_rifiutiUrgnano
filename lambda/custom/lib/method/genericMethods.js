const genericMethods = {
    findIndexFromMap(map, keyToFind) {
        return map.keySeq().findIndex((key) => key === keyToFind);
    },

    getSliceMap(map, indexToSlice) {
        return map.slice(indexToSlice);
    },

    speak(handlerInput, message, shouldEndSession = false) {
        return handlerInput.responseBuilder
            .speak(message)
            .withShouldEndSession(shouldEndSession)
            .getResponse();
    },

    speakAndReprompt(handlerInput, message, reprompt, shouldEndSession = false) {
        return handlerInput.responseBuilder
            .speak(message)
            .reprompt(reprompt)
            .withShouldEndSession(shouldEndSession)
            .getResponse();
    },

    checkRequestType(handlerInput, requestType) {
        return handlerInput.requestEnvelope.request.type === requestType;
    },

    checkRequestName(handlerInput, requestName) {
        return handlerInput.requestEnvelope.request.intent.name === requestName;
    },

    checkRequestTypeAndName(handlerInput, requestType, requestName) {
        return this.checkRequestType(handlerInput, requestType) &&
            this.checkRequestName(handlerInput, requestName);
    },


};

module.exports = genericMethods;
