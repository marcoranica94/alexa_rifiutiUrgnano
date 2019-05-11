const AWS = require('aws-sdk');
const lodash = require('lodash');
const CONSTANT_AWS = require('./../constants/constantAws');
AWS.config.update({region: CONSTANT_AWS.REGION});

let singleton = null;

class DbHelper {
    constructor() {
        this.docClient = new AWS.DynamoDB.DocumentClient();
        this.prodottoRifiuto = 'prodotto_rifiuto';
    }

    static initialize() {
        singleton = new DbHelper();
    }

    static isInitialized() {
        return !!singleton;
    }

    static get() {
        if (!DbHelper.isInitialized()) {
            throw new Error('Not initialized.');
        }
        return singleton;
    }

    async getItems(product) {

        var params = {
            TableName: this.prodottoRifiuto,
            Key: {
              'prodotto': {S: product}
            },
            ProjectionExpression: 'ATTRIBUTE_NAME'
          };
        try {
            console.log('Getting items, ', JSON.stringify(params));
            const data = await this.docClient.getItem(params).promise();
            console.log('Got items, ', JSON.stringify(data));
            return data.Items;
        } catch (e) {
            console.log('Unable to get items =>', JSON.stringify(e));
            throw e;
        }
    }

}

module.exports = DbHelper;
