const path = require('path')
const express = require('express')
const sensor = require("node-dht-sensor").promises;
const app = express()
const port = 8000

app.get('/data', async (req, res) => {
  // Fetch temperature and humidity from the sensor
  const data = await sensor.read(22, 4);
  const temp = data.temperature.toFixed(1);
  const humid = data.humidity.toFixed(1);
  res.json({ temperature: temp, humidity: humid })
})

app.get('/', (req, res) => {
  // Return HTML
  res.sendFile(path.join(__dirname, '/src/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

