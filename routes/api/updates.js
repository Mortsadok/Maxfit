const express = require('express');

const router = express.Router();
const Updates = require('../../models/Updates');

router.get('/', async (req, res) => {
  try {
    const updates = await Updates.find();
    res.json(updates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
