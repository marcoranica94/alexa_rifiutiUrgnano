const common = require('../method/common');
const intents = require('../constants/intents');
const DbHelper = require('../helpers/dbHelper');
const MailHelper = require('../helpers/mailHelper');
const CONSTANT_AWS = require('../constants/constantAws');
const lodash = require('lodash');

const InfoTrashHandler = {
    canHandle(handlerInput) {
		return common.checkRequestTypeAndName(handlerInput, 'IntentRequest', intents.INT_INFO_TRASH);
    },
    async handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const productSlot = slots['Product'].value || "";
        let speech = '';
        if (productSlot === '') {
          return common.speak(handlerInput, "Non ho capito il rifiuto");  
        } 

        const item = await DbHelper.get().getItem(productSlot);
        if(lodash.isEmpty(item)) {
          speech = "Non ho questo prodotto nel mio archivio";  
          const mailMessage = 'Il prodotto da aggiungere è' + productSlot;      
          try {
            await MailHelper.get().send(CONSTANT_AWS.MAIL_TO, mailMessage);
          } catch(e) {
            return common.speak(handlerInput, messages.EMAIL_ERROR);
          }
        } else  {
          const typeTrash = item.typeTrash.S;
          speech = productSlot + " va messo all'interno " + typeTrash;  
        }
        
        return common.speak(handlerInput, speech);
    },
};

module.exports = InfoTrashHandler;
