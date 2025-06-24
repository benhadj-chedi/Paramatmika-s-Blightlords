const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "//mail",
    pass: "//app password",
  },
});

const mailOptions = {
  from: "//email from",
  to: "//email to",
  subject: "the subject",
  text: "the text to send",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log("error: ", err);
  else console.log("email sent");
});
