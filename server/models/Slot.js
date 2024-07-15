const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  timeSlots: [{
    start: { type: String, required: true },
    end: { type: String, required: true }
  }],
  overrideDates: [{
    date: { type: String, required: true },
    timeSlots: [{
      start: { type: String, required: true },
      end: { type: String, required: true }
    }]
  }]
});

module.exports = mongoose.model('Slot', SlotSchema);
