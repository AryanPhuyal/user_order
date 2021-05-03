const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  index: {
    require: true,
    type: Number,
  },
  permissions: Array,
});

module.exports = mongoose.model("Role", roleSchema);
