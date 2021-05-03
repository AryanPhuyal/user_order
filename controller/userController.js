const User = require("../model/user");
const jwt = require("jsonwebtoken");
const asyncHandeler = require("express-async-handler");
const mail = require("../utility/sendmail");

exports.verifyAccount = asyncHandeler(async (req, res) => {
  const id = req.params.id;
  jwt.verify(id, process.env.JWT_SECRET_VERIFY, async (err, data) => {
    if (err) {
      res.status = 500;
      throw "Unable to verify accout";
    }
    const user = await User.find({ email: data.email });
    if (!user) {
      res.status = 400;
      throw "Url is invalid";
    }
    user.verified = true;
    await user.save();
    res.send("Successfully verified User");
  });
});

exports.resetPassword = asyncHandeler(async (req, res) => {});
exports.changePassword = asyncHandeler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
});

exports.signup = asyncHandeler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  const checkUserExists = await User.find({ email: email });
  if (checkUserExists.length > 0) {
    return res.json({ success: false, error: "User already exists" });
  }
  const user = new User({
    email,
    password,
    firstname,
    lastname,
  });
  await user.save();
  subject = "verify account";
  const token = jwt.sign({ email: email }, process.env.JWT_SECRET_VERIFY);
  const message = `Go to this link to verify account ${process.env.url}/${token}`;
  mail.emit("send", email, subject, message);

  mail.on("success", () => {
    res.json({
      success: true,
      user: user,
    });
  });
  mail.on("error", (err) => {
    res.status(500).json({
      success: false,
      err: err,
      message: "Unable to send mail",
    });
  });
});

exports.forgotPassword = asyncHandeler(async (req, res) => {});

exports.login = asyncHandeler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const match = user.comparePassword(password);
    if (match) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({ success: true, token: token });
    }
    return res.json({ success: false, message: "Email or password invalid" });
  } else
    return res.status(400).json({ success: false, message: "User not exists" });
});
