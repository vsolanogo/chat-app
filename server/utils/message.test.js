const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', ()=>{
	if('should generate correct message objet', ()=>{
		const from='Jill';
		const text='My name is Jill';
		const message= generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});