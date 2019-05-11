const common = require('../method/common');
const intents = require('../constants/intents');

const InfoTrashHandler = {
    canHandle(handlerInput) {
		return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.INT_INFO_TRASH);
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const trashSlot = slots['SlotTrash'] || "";
        return common.speak(handlerInput, "");
    },
};

module.exports = InfoTrashHandler;
