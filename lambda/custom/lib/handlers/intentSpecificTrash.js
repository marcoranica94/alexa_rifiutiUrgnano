const message = require('../constants/messages');
const calendar = require('../constants/calendar');
const dateMethods = require('./../method/dateMethods');
const genericMethods = require('./../method/genericMethods');
const trashMethods = require('./../method/trashMethods');
const rifiutiCodeDetails = require('../constants/rifiutiCodeDetails');

const SpecificTrashHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'SpecificTrashIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const trashSlot = slots['SlotTrash'] || "";
        const idTrash = trashSlot.resolutions.resolutionsPerAuthority[0].values[0].value.id;

        if(trashSlot === "" || idTrash === undefined){
            return handlerInput.responseBuilder
                .speak(message.UNKNOWN_TRASH)
                .withShouldEndSession(false)
                .getResponse();
        }

        const today = dateMethods.addDaysFromDate(dateMethods.getNowDate(), 1);
        let indexKey = -1;
        let date = today;
        do {
            indexKey = genericMethods.findIndexFromMap(calendar, date);
            date = dateMethods.addDaysFromDate(date, 1);
        } while (indexKey < 0);

        const sliceMap = genericMethods.getSliceMap(calendar, indexKey);
        const dateAndCodeTrash = trashMethods.findTrashAndDateFromSpecific(sliceMap, idTrash);

        if(dateAndCodeTrash === undefined) {
            return handlerInput.responseBuilder
                .speak(message.NO_RIFIUTI_YEAR)
                .withShouldEndSession(false)
                .getResponse();
        }

        const dateSpeech = dateMethods.getFormatForSpeech(dateAndCodeTrash[0]);
        let speech = message.SPECIFIC_TRASH(rifiutiCodeDetails[idTrash], dateSpeech);
        const listCodeTrashWithoutTrashSlot = dateAndCodeTrash[1].filter(x => x !== idTrash);
        if(listCodeTrashWithoutTrashSlot.length === 0) {
            return handlerInput.responseBuilder
                .speak(speech)
                .withShouldEndSession(false)
                .getResponse();
        }

        const listTrash = trashMethods.getListOfTrash(listCodeTrashWithoutTrashSlot);
        if(listTrash.size !== '') {
            speech = speech + ' insieme a : ' + listTrash;
        }

        return handlerInput.responseBuilder
            .speak(speech)
            .withShouldEndSession(false)
            .getResponse();
    },
};

module.exports = SpecificTrashHandler;
