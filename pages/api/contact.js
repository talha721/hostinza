import dbConnect from "../../utils/dbConnect";
import Contact from "../../models/contactModel";

dbConnect();

export default (req, res) => {
  const { name, email, website, message } = req.body;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "talhamoazzam4118@gmail.com",
      pass: "talha1117",
    },
  });

  let mailOptions = {
    from: email,
    to: "talhamoazzam4118@gmail.com",
    subject: message,
    html: `<h3>Name: ${name}</h3><h3>Email: ${email}</h3><h3>Website: ${website}</h3>
                    <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, async (error, result) => {
    if (error) {
      res.status(400).json({ success: false, message: "Email not sent." });
    }

    if (req.method === "POST") {
      const contact = await Contact.create(req.body);
      res.status(200).json({ status: true, data: contact });
    } else {
      res.status(400).json({ status: false, message: "create post error" });
    }
  });
};
