const express = require('express');
const app = express();
const PORT = 8080;
const crimes = require('./routes/crimes');

app.use('/api/crimes', crimes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
