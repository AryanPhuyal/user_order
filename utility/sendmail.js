const EventEmitter = require("events");
const nodemailer = require("nodemailer");

const mailConfig = new EventEmitter();

mailConfig.on("send", async (email, subject, message) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
    });
    let info = await transporter.sendMail({
      from: '"Robin Hood 👻" <phuyalrn2@gmail.com>', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      html: message, // html body
    });
    mailConfig.emit("success");
  } catch (err) {
    mailConfig.emit("error", err);
  }
});
module.exports = mailConfig;
