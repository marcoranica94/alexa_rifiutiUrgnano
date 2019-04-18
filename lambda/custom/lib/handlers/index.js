const InvocationHandler = require('./invocation');
const HelpHandler = require('./help');
const ExitHandler = require('./exit');
const ErrorHandler = require('./error');
const SessionEndedHandler = require('./sessionEnded');

module.exports = {
    error: [
        ErrorHandler,
    ],
    request: [
        InvocationHandler,
        HelpHandler,
        ExitHandler,
        SessionEndedHandler,
    ],
};