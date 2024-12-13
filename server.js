const twilio = require('twilio');

exports.handler = function(context, event, callback) {
  const client = new twilio('AC5b36278bf5318b209bdd73b1cb9db625', '9af106eab0742e00ece2dcf3b06b6f74');

  client.calls
    .create({
      to: +918247341184,
      from:'+12564148264',
      url: 'http://demo.twilio.com/docs/voice.xml', // TwiML for call instructions
    })
    .then((call) => {
      callback(null, `Call initiated: ${call.sid}`);
    })
    .catch((error) => {
      callback(error);
    });
};
