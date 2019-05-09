const genericMethods = {
    findIndexFromMap(map, keyToFind) {
        return map.keySeq().findIndex((key) => key === keyToFind);
    },

    getSliceMap(map, indexToSlice) {
        return map.slice(indexToSlice);
    }
}

module.exports = genericMethods;