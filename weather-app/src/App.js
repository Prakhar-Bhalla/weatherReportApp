import { useEffect, useState } from "react";
import "./App.css";
import Graph from "./Components/Graph";
import MainBox from "./Components/MainBox";
import SearchBox from "./Components/SearchBox";
import { getFormattedWeatherData } from "./Modules/weather";

function App() {
  const [query, setQuery] = useState({ q: "" });
  const [weatherData, setWeatherData] = useState(null);
  const units = "metric";

  const [dailyDetails, setDailyDetails] = useState({
    temp: null,
    sunrise: null,
    sunset: null,
    humidity: null,
    pressure: null,
    icon: null,
  });

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const fetchWeather = async () => {
    if (query.q === "") {
      return;
    }

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setDailyDetails({ ...dailyDetails, ...data });
      setWeatherData(data);
    });
  };

  useEffect(() => {
    handleLocationClick();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <div>
      {weatherData ? (
        <div className="flex flex-col justify-center items-center">
          <SearchBox setQuery={setQuery} weatherData={weatherData} />

          <MainBox
            weatherData={weatherData}
            dailyDetails={dailyDetails}
            setDailyDetails={setDailyDetails}
          />
          <Graph weatherData={weatherData} dailyDetails={dailyDetails} />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-60">
          <img
            src="https://c.tenor.com/zecVkmevzcIAAAAM/please-wait.gif"
            alt="Loading....."
          />
        </div>
      )}
    </div>
  );
}

export default App;

