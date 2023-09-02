const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.get('/api/feature-flags', (req, res) => {
  const featureFlags = {
    isTelegramShareEnabled: true,
  };
  res.json(featureFlags);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
