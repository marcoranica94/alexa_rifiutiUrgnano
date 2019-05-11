const intents = {
	HELP : 'AMAZON.CancelIntent',
	STOP : 'AMAZON.StopIntent',
	CANCEL : 'AMAZON.CancelIntent',
	INVOCATION : 'LaunchRequest',
	SESSION_END : 'SessionEndedRequest',
	INT_SPECIFIC : 'SpecificTrashIntent',
	INT_INFO_TRASH: 'InfoTrashIntent',
};

module.exports = intents;
