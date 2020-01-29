const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const Processing = require('../../models/Processing');

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
    const { Weight, Chest, frontHand, waist } = req.body;

    try {
      new Processing({
        Weight,
        Chest,
        frontHand,
        waist
      });
    } catch (err) {
      console.error(err.message);
    }
  }
);
module.exports = router;
