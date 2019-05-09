const genericMethods = {
    findIndexFromMap(map, keyToFind) {
        return map.keySeq().findIndex((key) => key === keyToFind);
    },

    getSliceMap(map, indexToSlice) {
        return map.slice(indexToSlice);
    },

    getSpeechAlexa(handlerInput, message, shouldEndSession = false) {
        return handlerInput.responseBuilder
            .speak(message)
            .withShouldEndSession(shouldEndSession)
            .getResponse();
    },

    getSpeechRepromptAlexa(handlerInput, message, reprompt, shouldEndSession = false) {
        return handlerInput.responseBuilder
            .speak(message)
            .reprompt(reprompt)
            .withShouldEndSession(shouldEndSession)
            .getResponse();
    }

};

module.exports = genericMethods;
