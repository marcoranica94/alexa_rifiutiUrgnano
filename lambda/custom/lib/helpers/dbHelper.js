const AWS = require('aws-sdk');
const lodash = require('lodash');
const CONSTANT_AWS = require('../constants/constantAws');
AWS.config.update({region: CONSTANT_AWS.REGION});

let singleton = null;

class DbHelper {
    constructor() {
        //this.docClient = new AWS.DynamoDB.DocumentClient();
        this.docClient = new AWS.DynamoDB({apiVersion: '2012-08-10'});

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

    async getItem(product) {
        const params = {
            TableName: this.prodottoRifiuto,
            Key: { 
                "product": {
                    "S" : product
                }
            }
        };

        try {
            console.log('Getting item, ', JSON.stringify(params));
            const data = await this.docClient.getItem(params).promise();
            console.log('Getting item, ', JSON.stringify(params),  
                '\n Got item', JSON.stringify(data)
            );
            return !lodash.isEmpty(data.Item) ? data.Item: null;
        } catch (e) {
            console.log('Unable to get item =>', JSON.stringify(e));
            throw e;
        }
    }

}

module.exports = DbHelper;
