import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
}

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce((str, [key, val]) => {
        return str += `${CONTACT_MESSAGE_FIELDS(key)}: \n${val} \n \n`
    }, ''
    );

    const htmlData =  Object.entries(data).reduce((str, [key, val]) => {
        return str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1>`
    }, ''
    );

    return {
        text,
        html,
    }
}

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data= req.body;
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({ message: 'Bad Request'});
        }

        try {
            console.log(req.body)
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: 'This is a test string',
                html: '<h1>Test Title</h1><br/><p>Some text </p>'
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
    return res.status(400).json({ message: 'Bad Request'});
};

export default handler;