const InvocationHandler = require('./invocation');
const HelpHandler = require('./help');
const ExitHandler = require('./exit');
const ErrorHandler = require('./error');
const SessionEndedHandler = require('./sessionEnded');
const IntentSpecificTrash = require('./intentSpecificTrash');
const IntentInfoTrash = require('./intentInfoTrash');
const IntentFallback = require('./intentFallback');

module.exports = {
    error: [
        ErrorHandler,
    ],
    request: [
        InvocationHandler,
        HelpHandler,
        ExitHandler,
        SessionEndedHandler,
        IntentSpecificTrash,
        IntentInfoTrash,
        IntentFallback,
    ],
};