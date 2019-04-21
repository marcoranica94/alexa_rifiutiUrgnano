const message = require('./../constants/messages');
const dateMethods = require('./../method/dateMethods');
const trashMethods = require('./../method/trashMethods');

const InvocationHandler = {
    canHandle(handlerInput) {
        console.log("ERROR00" + handlerInput.requestEnvelope.request.type);

        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const today = dateMethods.getNowDate();
        console.log("today "+ today);

        const listCodesTrash = dateMethods.getRifiutidelGiorno('27/09/2019');
        console.log("rifiutiGiornalierio "+ listCodesTrash);
        console.log( "Type rifiuti : " + typeof listCodesTrash)

        const dateToSpeech = dateMethods.getFormatForSpeech(today);
        console.log("dateToSpeech "+ dateToSpeech);

        let SPEECH = "";
        if (listCodesTrash.size === 0) {
            SPEECH = message.NO_RIFIUTI + dateToSpeech;
        } else {
            const trashToSpeech = trashMethods.getListOfTrash(listCodesTrash);
            console.log("rifiuti "+ trashToSpeech);
            SPEECH = message.RIFIUTI + dateToSpeech + " sono: " + trashToSpeech;
        }
        return handlerInput.responseBuilder
            .speak(SPEECH)
            .reprompt("speechText")
            .getResponse();
    },
};

module.exports = InvocationHandler;