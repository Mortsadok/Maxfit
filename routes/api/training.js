const express = require('express');

const router = express.Router();

const Training = require('../../models/Training');

const { validationResult, check } = require('express-validator');

router.post(
  '/',
  [
    check('typeName', 'בחר תוכנית אימונים')
      .not()
      .isEmpty(),
    check('buttonValue', 'בחר מספר ימי אימון')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { typeName, buttonValue, email } = req.body;

    try {
      let buildPlanRequest = await Training.findOne({ email });
      if (buildPlanRequest) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'למשתמש זה קיים תוכנית אימונים במערכת' }] });
      }

      buildPlanRequest = new Training({
        typeName,
        buttonValue,
        email
      });
      await buildPlanRequest.save();
      res.json(req.body);
    } catch (err) {
      console.error('Server Error', err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
