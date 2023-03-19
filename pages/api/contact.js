import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
}

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) => 
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
            ''
    );

    const htmlData =  Object.entries(data).reduce(
        (str, [key, val]) => 
            (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1>`),
            ''
    );

    return {
        text:stringData,
        html: htmlData,
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
                text: `${data.email, data.name, data.message}`,
                html: `<h2>${data.name}</h2><br/><p>${data.message}</p></br/><p>${data.email}</p>` 
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
        }
    }
    return res.status(400).json({ message: 'Bad Request'});
};

export default handler;