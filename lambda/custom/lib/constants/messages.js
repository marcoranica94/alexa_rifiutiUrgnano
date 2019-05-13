const messages = {
    ERROR: 'Mi dispiace, si è verificato un errore.',
    STOP: 'Ciao, alla prossima!',
    MORE_INFO : 'Cittadino, desidera sapere altro?',
    NO_RIFIUTI : 'Non è previsto il ritiro dei rifiuti la mattina seguente, il ',
    RIFIUTI : 'I rifiuti che verranno ritirati il ',
    UNKNOWN_TRASH: 'Non conosco questo rifiuto',
    NO_RIFIUTI_YEAR: 'Non è previsto il ritiro quest anno',
    SPECIFIC_TRASH: (firstTrash, day) => firstTrash + ' verrà ritirato il ' + day,
    EMAIL_ERROR: "Errore nell'invio della mail",
    EMAIL_BODY: productSlot => 'Il prodotto da aggiungere è: ' + productSlot,
    UNDERSTAND_PRODUCT: 'Non ho questo prodotto nel mio archivio. Riprova fra qualche ora! Verrà aggiunto presto',
    EMAIL_TITLE: 'Alexa Skill RIFIUTI-URGNANO - Nuovo Elemento'
};

module.exports = messages;
