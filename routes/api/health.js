const express = require('express');

const router = express.Router();

const Health = require('../../models/Health');
const Notifications = require('../../models/Notifications');

const { validationResult, check } = require('express-validator');

router.post(
  '/',
  [
    check('firstName', 'הכנס שם פרטי תקין')
      .not()
      .isEmpty(),
    check('lastName', 'הכנס שם משפחה תקין')
      .not()
      .isEmpty(),
    check('documentsText', 'הצהרת בריאות לא נמצאה')
      .not()
      .isEmpty(),
    check('userId', 'תעודת זהות לא נמצאה')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      firstName,
      lastName,
      documentsText,
      userId,
      readMessage,
      subject
    } = req.body;

    try {
      let healthClient = await Health.findOne({ userId });
      if (healthClient) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'למשתמש זה קיים הצהרת בריאות במערכת' }] });
      }
      healthClient = new Health({
        firstName,
        lastName,
        documentsText,
        userId,
        readMessage,
        subject
      });
      let noti = new Notifications({
        readMessage,
        subject
      });
      await noti.save();
      await healthClient.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
