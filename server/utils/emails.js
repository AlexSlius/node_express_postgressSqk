const nodemailer = require('nodemailer');

module.exports = async ({
    type = "appea",
    data,
    to,
    subject = 'Message from Node js',
    text='This message was sent from Node js server.'
}) => {

    try {
        let transporter = nodemailer.createTransport({
            service:  process.env.EMAIL_SERVICE,
            auth: {
                user:  process.env.EMAIL_AUTH_USER,
                pass:  process.env.EMAIL_AUTH_PASS,
            },
        });

        let result = await transporter.sendMail({
            from: `"Node js" <${ process.env.EMAIL_AUTH_USER}>`,
            to,
            subject,
            text,
            html: "<b>Hello world?</b>",
        });

    } catch (error) {
        console.log("error email: ", error)
    }
}