require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/weather", async (req, res) => {
  const apiKey = process.env.API_KEY;
  const city = req.query.city;

  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`
    );

    res.json(response.data);
  } catch (err) {
    console.error("Error accessing external API:", err.message);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(port, () => {
  console.log(`🔐 Backend runing on http://localhost:${port}`);
});
