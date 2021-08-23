const path = require('path')
const express = require('express')
const app = express()
const port = 80

app.get('/data', (req, res) => {
  // Fetch temperature and humidity from the sensor
  res.json({ temperature: 21.5, humidity: 68.00 })
})

app.get('/', (req, res) => {
  // Return HTML
  res.sendFile(path.join(__dirname, '/src/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})