// imports
const express = require('express');

const router = express.Router();
const Updates = require('../../models/Updates');
// get request
router.get('/', async (req, res) => {
  try {
    const updates = await Updates.find();
    res.json(updates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await Updates.findByIdAndDelete(req.params.id);
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// post request
router.post('/', async (req, res) => {
  const { _id, readMessage } = req.body;
  try {
    let updates = await Updates.findOne({ _id });

    updates.updateOne({
      readMessage
    });
    updates.readMessage = readMessage;
    await updates.save();
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
