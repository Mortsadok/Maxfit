const express = require('express');
const { check, validationResult } = require('express-validator');
const Training = require('../../models/Training');
const router = express.Router();

router.post(
  '/',
  [
    check('dayValue', 'בחר מספר ימי אימון')
      .not()
      .isEmpty(),
    check('trainingType', 'בחר תוכנית אימונים')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { dayValue, trainingType, clientId } = req.body;
    try {
      let trainingRequest = await Training.findOne({ clientId });
      if (trainingRequest) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'למשתמש זה קיים תוכנית אימונים במערכת' }] });
      }
      trainingRequest = new Training({
        dayValue,
        trainingType,
        clientId
      });
      await trainingRequest.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
