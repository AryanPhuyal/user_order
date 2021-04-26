const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: Number,
    userId: Number,
    subtotal: Number,
    date: Date,
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

orderSchema.virtual("user", {
  ref: "User",
  localField: "userId",
  foreignField: "userId",
});

module.exports = mongoose.model("Order", orderSchema);
