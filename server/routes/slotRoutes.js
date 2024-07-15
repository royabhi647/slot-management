const express = require('express');
const { createSlot, getSlot, updateSlot, deleteSlot } = require('../controllers/SlotController');

const router = express.Router();

router.post('/', createSlot);
router.get('/getSlot', getSlot);
// router.put('/slot/:id', updateSlot);
router.delete('/delete/:id', deleteSlot);

module.exports = router;