const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
	it('should generate correct message objet', ()=>{
		const from='Jill';
		const text='My name is Jill';
		const message= generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});


describe('generateLocationMessage', ()=> {
	it('should generate correct location object', () => {
		const from ='Deb';
		const latitude = 15;
		const longitude = 19;
		const url = 'https://www.google.com/maps?q=15,19';
		const message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
})