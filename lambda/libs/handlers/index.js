const InvocationHandler = require('./invocation');
const ErrorHandler = require('./error');
const ExitHandler = require('./exit');
const HelpHandler = require('./help');
const SessionEndedHandler = require('./sessionEnded');

module.exports = {
    error: [
        ErrorHandler,
    ],
    request: [
        InvocationHandler,
        ExitHandler,
        HelpHandler,
        SessionEndedHandler,
    ],
};
