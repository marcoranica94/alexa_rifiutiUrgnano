const common = require('../method/common');
const intents = require('../constants/intents');
const DbHelper = require('../helpers/dbHelper');
const MailHelper = require('../helpers/mailHelper');
const lodash = require('lodash');
const message = require('../constants/messages');

const InfoTrashHandler = {
    canHandle(handlerInput) {
		return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.INT_INFO_TRASH);
    },
    async handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        let productSlot = slots['Product'].value || "";
        let speech = '';
        if (productSlot === '') {
          return common.speak(handlerInput, "Non ho capito il rifiuto");  
        } 
        var arrayProducts = productSlot.split(" ");
        if(arrayProducts.length>1) {
          productSlot = arrayProducts[1];
        }

        const item = await DbHelper.get().getItem(productSlot);
        if(lodash.isEmpty(item)) {
          speech = message.UNDERSTAND_PRODUCT;  
          try {
            await MailHelper.get().send(message.EMAIL_BODY(productSlot));
          } catch(e) {
            return common.speak(handlerInput, message.EMAIL_ERROR);
          }
        } else  {
          const typeTrash = item.typeTrash.S;
          speech = productSlot + " va messo all'interno " + typeTrash;  
        }
        
        return common.speak(handlerInput, speech);
    },
};

module.exports = InfoTrashHandler;
