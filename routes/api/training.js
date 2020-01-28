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
    const { typeName, buttonValue, clientId } = req.body;

    try {
      let buildPlanRequest = await Training.findOne({ clientId });
      if (buildPlanRequest) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'למשתמש זה קיים תוכנית אימונים במערכת' }] });
      }

      buildPlanRequest = new Training({
        typeName,
        buttonValue,
        clientId
      });
      await buildPlanRequest.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
