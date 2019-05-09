const moment = require('moment');
const calendar = require('./../constants/calendar');
const { List } = require('immutable');

const dateMethods = {

    getNowDate() {
        moment.locale('it');
        return moment().format('DD/MM/YYYY');
    },

    getRifiutidelGiorno(date) {
        return List(calendar.get(date));
    },

    getFormatForSpeech(date) {
        return moment(date, 'DD/MM/YYYY').format('LL');
    },
    
    addDaysFromDate(date, addDays){
        return moment(date, "DD/MM/YYYY").add(addDays, 'days').format('DD/MM/YYYY');
    }
}

module.exports = dateMethods;