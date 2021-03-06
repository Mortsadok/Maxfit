const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const NewClient = require('../../models/NewClient');
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('password', 'הכנס סיסמה עם 6 תווים או יותר').isLength({ min: 6 }),
    check('oldPassword', 'הכנס סיסמה ישנה')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, oldPassword, password } = req.body;
    try {
      let user = await NewClient.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'משתמש לא קיים' }] });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'סיסמה לא נכונה' }] });
      }
      user.update({
        password
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
