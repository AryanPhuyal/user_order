const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  userId: Number,
  firstname: String,
  lastname: String,
  name: String,
  email: String,
  password: String,
  orders: Number,
  verified: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
  },
});

userSchema.method("updateorder", async () => {
  console.log(this.userId);
  this.orders = await mongoose.models.Order.countDocuments({});
  console.log(this);
  //   this.save();
  //   await this.save();
});
userSchema.pre("save", function (next) {
  this._doc.password = bcrypt.hashSync(this._doc.password, 12);
  next();
});

userSchema.methods.comparePassword = function (cpassword) {
  const match = bcrypt.compareSync(cpassword, this.password);
  return match;
};

module.exports = model("User", userSchema);
