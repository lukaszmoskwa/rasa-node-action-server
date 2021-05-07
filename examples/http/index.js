const { RasaNodeActionServer, RasaActionEvent } = require("../../index");
const axios = require("axios");

const rnas = new RasaNodeActionServer();

rnas.define("weather_city_today_action", async (action, res) => {
  const { city } = action.getSlots();
  const { data } = await axios.get(
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
  );
  res
    .addEvent(
      RasaActionEvent.bot(
        `Here is your today's meteo data about the city of ${city}`,
        data
      )
    )
    .send();
});

rnas.start();
