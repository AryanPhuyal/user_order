const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  orders: Number,
});

userSchema.method("updateorder", async () => {
  console.log(this.userId);
  this.orders = await mongoose.models.Order.countDocuments({});
  console.log(this);
  //   this.save();
  //   await this.save();
});

module.exports = mongoose.model("User", userSchema);
