const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

connectDB();

app.use(express.json({ extended: false }));
app.use('/api/Nclient', require('./routes/api/Nclient'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/health', require('./routes/api/health'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/forgotPass', require('./routes/api/forgotPass'));
app.use('/api/settingsForgotPass', require('./routes/api/settingsForgetPass'));
app.use('/api/resetEmail', require('./routes/api/resetEmail'));
app.use('/api/training', require('./routes/api/training'));
app.use('/api/updates', require('./routes/api/updates'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
