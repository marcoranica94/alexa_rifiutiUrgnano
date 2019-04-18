const moment = require('moment');
const message = require('./../constants/messages');
const calendar = require('./../constants/calendar');

const InvocationHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const today = moment.moment().format('MM/DD/YYYY');
        console.log(today);
        const rifiutoGiornalierio = calendar.get(today);
        console.log(rifiutoGiornalierio);

        return handlerInput.responseBuilder
            .speak(rifiutoGiornalierio)
            .reprompt(speechText)
            .getResponse();
    }
};

module.exports = InvocationHandler;