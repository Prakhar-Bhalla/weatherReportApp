import React from "react";
import TempChart from "./TempChart";
import PressureAndHumidity from "./PressureAndHumidity";
import Sun from "./Sun";

function Graph({ weatherData, dailyDetails }) {
  return (
    <div className="w-full md:mx-auto md:w-1/2">
      <div id="graphbox" className="rounded-lg p-2 shadow-xl mx-4">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl font-medium ml-2 mt-2 md:ml-2">
            {dailyDetails.temp.toFixed()}°C
          </h1>
        </div>

        <div>
          <TempChart hourlyData={weatherData.hourly} />
        </div>

        <PressureAndHumidity dailyDetails={dailyDetails} />
        <Sun weatherData={weatherData} dailyDetails={dailyDetails} />
        <div className="w-full md:mx-auto">
          <img src={"graph.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Graph;