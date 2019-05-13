const Alexa = require('ask-sdk');
const handlers = require('./lib/handlers');
const DbHelper = require('./lib/helpers/dbHelper');

DbHelper.initialize();
const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
    .addRequestHandlers(
        ...handlers.request,
    )
    .addErrorHandlers(
        ...handlers.error,
    )
    .lambda();
