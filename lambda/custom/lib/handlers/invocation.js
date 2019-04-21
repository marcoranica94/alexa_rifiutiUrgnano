const moment = require('moment');
const message = require('./../constants/messages');
const calendar = require('./../constants/calendar');
const rifiutiCodeDetails = require ('./../constants/rifiutiCodeDetails')
const { List } = require('immutable');

const InvocationHandler = {
    canHandle(handlerInput) {
        console.log("ERROR00" + handlerInput.requestEnvelope.request.type);

        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        moment.locale('it');
        console.log("locale :" +moment.locale());
        const today = moment().format('DD/MM/YYYY');
        console.log("today "+ today);

        const rifiutiGiornalierio = List(calendar.get('19/04/2019'));
        console.log("rifiutiGiornalierio "+ rifiutiGiornalierio);
        console.log( "Type rifiuti : " + typeof rifiutiGiornalierio)
        const longDate = moment().format('LL');
        console.log("longDate "+ longDate);

        const rifiuti = rifiutiGiornalierio.reduce(function(accumulator, currentValue) {
            return accumulator + " " + rifiutiCodeDetails[currentValue];
          }, " ");
        console.log("rifiuti "+ rifiuti);

        let SPEECH = "";
        if (rifiutiGiornalierio === undefined) {
            SPEECH = message.NO_RIFIUTI + longDate;
        } else {
            SPEECH = message.RIFIUTI + longDate + " sono " + rifiuti;
        }
        return handlerInput.responseBuilder
            .speak(SPEECH)
            .reprompt("speechText")
            .getResponse();
    },
};

module.exports = InvocationHandler;