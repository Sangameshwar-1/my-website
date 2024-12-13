const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Replace with your Twilio credentials
const accountSid = 'your_account_sid'; // Replace with your Account SID
const authToken = 'your_auth_token';   // Replace with your Auth Token
const client = twilio(accountSid, authToken);

// API endpoint to make a call
app.post('/make-call', (req, res) => {
  const { to } = req.body;

  client.calls
    .create({
      twiml: '<Response><Say>Hello, this is a call from Twilio!</Say></Response>',
      from: '+1234567890', // Replace with your Twilio number
      to: to,             // Recipient phone number
    })
    .then((call) => {
      res.status(200).send({ success: true, sid: call.sid });
    })
    .catch((error) => {
      res.status(500).send({ success: false, error: error.message });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
