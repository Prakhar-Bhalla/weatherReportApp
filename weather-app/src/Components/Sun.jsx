import React from "react";


function SunTime({ weatherData: { timezone }, dailyDetails }) {
  return (
    <div className="flex flex-row w-full my-4 md:mx-auto">
      <div className="w-1/2 h-18 ml-2 mr-3">
        <p>Sunrice</p>
      </div>
      <div className="w-1/2 mr-2 h-18 text-right">
        <p>Sunset</p>
      </div>
    </div>
  );
}

export default SunTime;