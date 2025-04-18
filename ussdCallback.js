const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Africa's Talking USSD Endpoint
app.post('/ussd', (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;
  let response = "";

  // Main Menu
  if (text === '') {
    response = `CON AfriSoko
1. Uza/Sell
2. Nunua/Buy
3. Tuma/Send
4. Chama/Save
5. Msaada/Help`;
  }

  // Sell Flow (Uza)
  else if (text === '1') {
    response = 'CON Sema kitu unauza: (Say what you sell)';
  }

  // Buy Flow (Nunua)
  else if (text === '2') {
    response = 'CON Sema unatafuta: (Say what you need)';
  }

  // Handle subsequent steps (e.g., voice processing)
  else if (text.startsWith('1*')) {
    const item = text.split('*')[1];
    response = `END Umeweka "${item}". Buyers wataitika!`;
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`USSD running on port ${PORT}`));
