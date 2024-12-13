const express = require('express');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

// Twilio credentials from environment variables
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Route to make a call
app.get('/make-call', (req, res) => {
  client.calls.create({
    to: '+1234567890',   // Replace with the recipient number
    from: '+0987654321', // Replace with your Twilio number
    url: 'http://demo.twilio.com/docs/voice.xml' // TwiML URL for call actions
  })
  .then(call => res.send('Call initiated!'))
  .catch(err => res.status(500).send('Error: ' + err));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
