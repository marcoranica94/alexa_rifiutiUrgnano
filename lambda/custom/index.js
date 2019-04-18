const Alexa = require('ask-sdk');
const handlers = require('./lib/handlers');

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
    .addRequestHandlers(
        ...handlers.request,
    )
    .addErrorHandlers(
        ...handlers.error,
    )
    .lambda();
