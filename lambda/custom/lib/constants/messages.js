const messages = {
    ERROR: 'Mi dispiace, si è verificato un errore.',
    STOP: 'Ciao, alla prossima!',
    MORE_INFO : 'Cittadino, desidera sapere altro?',
    NO_RIFIUTI : 'Non è previsto il ritiro dei rifiuti la mattina seguente, il ',
    RIFIUTI : 'I rifiuti che verranno ritirati il ',
    UNKNOWN_TRASH: 'Non conosco questo rifiuto',
    NO_RIFIUTI_YEAR: 'Non è previsto il ritiro quest anno',
    SPECIFIC_TRASH: (firstTrash, day) => firstTrash + ' verrà ritirato il ' + day
};

module.exports = messages;
