const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Processing = require('../../models/Processing');
const Notifications = require('../../models/Notifications');

router.post(
  '/',
  [
    check('Weight', 'הכנס סטטיסטיקת משקל')
      .not()
      .isEmpty(),
    check('Chest', 'הכנס סטטיסטיקת חזה')
      .not()
      .isEmpty(),
    check('frontHand', 'הכנס סטטיסטיקת יד קדמית')
      .not()
      .isEmpty(),
    check('waist', 'הכנס סטטיסטיקת מותניים')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      Weight,
      Chest,
      frontHand,
      waist,
      Name,
      email,
      readMessage,
      subject
    } = req.body;
    try {
      let processingRequest = await Processing.findOne({ email });
      if (processingRequest) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'למשתמש זה קיים מדדים במערכת' }] });
      }
      processingRequest = new Processing({
        Weight,
        Chest,
        frontHand,
        waist,
        email,
        readMessage,
        subject
      });
      let noti = Notifications({
        readMessage,
        subject,
        Name
      });
      await noti.save();
      await processingRequest.save();
    } catch (err) {
      console.error(err.message);
    }
  }
);
module.exports = router;
