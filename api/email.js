export default function handler(request, response) {

    if (request.method === 'OPTIONS') {
        response.status(200).end()
        return
    }
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const formData = request.body.data;
    var htmlPart1 = '<html><body>' +
        '<div><h1 style="background: #f27e30; padding: 10px; border-top: 2px solid black; border-bottom: 2px solid black; color: white;">HM Web Enquiry</h1></div>' +
        '<div style="background: blanchedalmond; padding: 10px; border: 1px solid black">' +
        '<dl><dt style="font-size: 20px; font-weight: bold; color: #176eb3; margin-bottom: 10px">Name: </dt>' +
        '<dd style="font-size: 18px; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #41b34f;">' + formData.firstName + ' ' + formData.lastName + '</dd>' +
        '<dt style="font-size: 20px; font-weight: bold; color: #176eb3; margin-bottom: 10px">Email: </dt>' +
        '<dd style="font-size: 18px; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #41b34f;">' + formData.emailAddress + '</dd>';
    
    if (formData.phoneNumber !== null && formData.phoneNumber !== undefined) {
        var htmlPart2 = '<dt style="font-size: 20px; font-weight: bold; color: #176eb3; margin-bottom: 10px">Phone Number: </dt>' +
        '<dd style="font-size: 18px; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #41b34f;">' + formData.phoneNumber + '</dd>';
        htmlPart1 = htmlPart1.concat(htmlPart2);
    }
    
    var htmlPart3 = '<dt style="font-size: 20px; font-weight: bold; color: #176eb3; margin-bottom: 10px">Message: </dt>' +
        '<dd style="font-size: 16px; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed #41b34f;">' + formData.comments + '</dd></dl>' +
        '</div></body></html>';
    
    var emailContent = htmlPart1.concat(htmlPart3);
    const msg = {
        to: 'arcaneshawn@gmail.com',
        from: formData.emailAddress,
        subject: 'Website Enquiry',
        content: [
        {
            type: 'text/html',
            value: emailContent,
        }
        ]
    };
    sgMail.send(msg, (error, result) => {
        if (error) {
            response.send(error);
        } else {
            response.status(200);
            response.send(result);
        }
    });
}
