const AWS = require('aws-sdk');
const CONSTANT_AWS = require('../constants/constantAws');
AWS.config.update({region: CONSTANT_AWS.REGION});

let singleton = null;

class MailHelper {

	constructor() {
		this.emailer = new AWS.SES();
	}

	static initialize() {
		singleton = new MailHelper();
	}

	static isInitialized() {
		return !!singleton;
	}

	static get() {
		if (!MailHelper.isInitialized()) {
			throw new Error('Not initialized.');
		}
		return singleton;
	}

	async send(message){
		const params = {
			Destination: {
				ToAddresses: CONSTANT_AWS.MAIL_TO
			},
			Message: {
				Body: {
					Text: {
						Data: message
					}
				},
				Subject: {
					Data: 'Nuovo Elemento',
				}
			},
			Source: CONSTANT_AWS.MAIL_FROM
		};

		try {
			await this.emailer.sendEmail(params).promise();
		} catch (e){
			console.log('Unable to send email =>', JSON.stringify(e));
			console.log(e);
			throw e;
		}
	}
}

module.exports = MailHelper;
