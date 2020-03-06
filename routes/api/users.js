const express = require('express');
const router = express.Router();
const NewClient = require('../../models/NewClient');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post(
  '/',
  [
    check('Name', 'הכנס שם תקין')
      .not()
      .isEmpty(),
    check('email', 'הכנס דואר אלקטרוני תקין').isEmail(),
    check('password', 'הכנס סיסמה עם 6 תווים או יותר').isLength({ min: 6 }),
    check('phone', 'הכנס מספר טלפון תקין')
      .not()
      .isEmpty(),
    check('clientId', 'הכנס תעודת זהות עם 9 ספרות').isLength({
      min: 9,
      max: 9
    }),
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      Name,
      email,
      password,
      phone,
      clientId,
      Type,
      Time,
      Payment,
      readMessage,
      subject
    } = req.body;

    try {
      let user = await NewClient.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'המשתמש קיים במערכת' }] });
      }

      user = new NewClient({
        Name,
        email,
        password,
        phone,
        clientId,
        Type,
        Time,
        Payment,
        readMessage,
        subject
      });
      //Encrypt The password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // Making Web Token

      const payload = {
        user: {
          clientId: user.clientId
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
