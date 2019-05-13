const Alexa = require('ask-sdk');
const handlers = require('./lib/handlers');
const DbHelper = require('./lib/helpers/dbHelper');
const MailHelper = require('./lib/helpers/mailHelper');

DbHelper.initialize();
MailHelper.initialize();
const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
    .addRequestHandlers(
        ...handlers.request,
    )
    .addErrorHandlers(
        ...handlers.error,
    )
    .lambda();
