const mongoose = require('mongoose');

const lodgeSchema = new mongoose.Schema(
  {
    name: String,
    country: String,
    location: [Number, Number],
    beds: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const Lodge = mongoose.model('lodge', lodgeSchema);

module.exports = Lodge;
