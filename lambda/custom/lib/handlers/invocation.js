const messages = require('./../constants/messages');
const dateMethods = require('./../method/dateMethods');
const trashMethods = require('./../method/trashMethods');
const genericMethods = require('./../method/genericMethods');

const InvocationHandler = {
    canHandle(handlerInput) {
        return genericMethods.checkRequestType(handlerInput, 'LaunchRequest');
    },
    handle(handlerInput) {
        const today = dateMethods.addDaysFromDate(dateMethods.getNowDate(), 1);
        const listCodesTrash = dateMethods.getRifiutidelGiorno(today);
        const dateToSpeech = dateMethods.getFormatForSpeech(today);

        let SPEECH = "";
        if (listCodesTrash.size === 0) {
            SPEECH = messages.NO_RIFIUTI + dateToSpeech;
        } else {
            const trashToSpeech = trashMethods.getListOfTrash(listCodesTrash);
            SPEECH = messages.RIFIUTI + dateToSpeech + " sono: " + trashToSpeech + ". " + messages.MORE_INFO;
        }
        return genericMethods.speak(handlerInput, SPEECH);
    },
};

module.exports = InvocationHandler;
