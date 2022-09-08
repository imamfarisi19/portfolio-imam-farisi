var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service:'gmail',
	auth:{
		user: 'crackwall80@gmail.com';
		pass: 'crackwall@89';
		
	}
});

var mailOptions = {
	from: 'crackwall80@gmail.com',
	to: 'edwardindo1@gmail.com',
	subject: 'Sending Email Using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});

