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

	async send(toAddresses, message){
		const params = {
			Destination: {
				ToAddresses: toAddresses
			},
			Message: {
				Body: {
					Text: {
						Data: message
					}
				},
				Subject: {
					Data: CONSTANTS.EMAIL.SUBJECT,
				}
			},
			Source: CONSTANTS.EMAIL.SOURCE // deve essere verificato
		};

		try {
			console.log('Sending email, ', JSON.stringify(params));
			await this.emailer.sendEmail(params).promise();
			console.log('Email sent');
		} catch (e){
			console.log('Unable to send email =>', JSON.stringify(e));
			console.log(e);
			throw e;
		}
	}
}

module.exports = MailHelper;
