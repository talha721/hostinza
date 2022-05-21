import dbConnect from "../../utils/dbConnect";

dbConnect();

export default (req, res) => {
  const { name, email, website, question } = req.body;

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
    subject: question,
    html: `<h5>Name: ${name}</h5><h5>Email: ${email}</h5><h5>Website: ${website}</h5>
                    <p>Question: ${question}</p>`,
  };

  transporter.sendMail(mailOptions, async (error, result) => {
    if (error) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  });
};
