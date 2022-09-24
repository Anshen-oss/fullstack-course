const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.send('Hello la Réunion monwar!')
})
app.get('/demo', (req, res) => {
  res.set('X-full-stack', '4life');
  res.status(418);
 res.send('Mi prefer cafe la reunion');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
