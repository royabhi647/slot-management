const Slot = require('../models/Slot');

// Create a new slot
const createSlot = async (req, res) => {
   try {
      const newSlot = new Slot(req.body);
      const savedSlot = await newSlot.save();
      res.status(201).json(savedSlot);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
}

// Get all slots
const getSlot = async (req, res) => {
   try {
      const slots = await Slot.find();
      res.json(slots);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
}

// Update a slot
const updateSlot = async (req, res) => {
   try {
      const updatedSlot = await Slot.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedSlot);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
}

// Delete a slot
const deleteSlot = async (req, res) => {
   try {
      await Slot.findByIdAndDelete(req.params.id);
      res.json({ message: 'Slot deleted' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
}

module.exports = { createSlot, getSlot, updateSlot, deleteSlot }