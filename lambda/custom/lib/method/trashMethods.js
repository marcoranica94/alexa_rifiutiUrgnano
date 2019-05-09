const calendar = require('./../constants/calendar');
const rifiutiCodeDetails = require ('./../constants/rifiutiCodeDetails')
const { List } = require('immutable');

const trashMethods = {

    getListOfTrash(listCodTrash) {
        return listCodTrash.reduce(function(accumulator, currentValue) {
            return accumulator + rifiutiCodeDetails[currentValue] + ", ";
          }, "");
    },

    findTrashAndDateFromSpecific(map, idTrash){
        return map.findEntry( value => value.includes(idTrash));
    }

}
module.exports = trashMethods;