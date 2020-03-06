const express = require('express');
const router = express.Router();
const ReturnClient = require('../../models/returnClients');
const { check, validationResult } = require('express-validator');

// add new client
router.get('/', async (req, res) => {
  try {
    const returnClient = await ReturnClient.find();
    res.json(returnClient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.post(
  '/',
  [
    check('Type', 'הכנס סוג מנוי')
      .not()
      .isEmpty(),
    check('Time', 'הכנס תקופת מנוי')
      .not()
      .isEmpty(),
    check('Payment', 'הכנס אמצעי תשלום')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      Name,
      clientId,
      phone,
      Type,
      Time,
      Payment,
      Total,
      subject,
      readMessage
    } = req.body;
    let returnClient = await ReturnClient.findOne({ clientId });
    if (returnClient) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'תעודת זהות זו נמצאת במערכת' }] });
    }
    try {
      returnClient = new ReturnClient({
        Name,
        clientId,
        phone,
        Type,
        Time,
        Payment,
        Total,
        subject,
        readMessage
      });
      await returnClient.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
