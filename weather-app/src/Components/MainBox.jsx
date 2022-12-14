import { useEffect, useState } from "react";
import { iconUrlFromCode } from "../Modules/weather";
import { nanoid } from 'nanoid'

function MainBox({
  weatherData: { daily },
  setDailyDetails,
  dailyDetails,
}) {
  const [activeBox, setActiveBox] = useState({
    activeObject: null,
    objects: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
  });

  const toggleActiveBox = (index) => {
    setActiveBox({ ...activeBox, activeObject: activeBox.objects[index] });
    setDailyDetails({ ...dailyDetails, ...daily[index] });
  };

  useEffect(() => {
    setActiveBox({ ...activeBox, activeObject: null });
  }, [daily])

  const toggleActiveBoxIdName = (index) => {
    if (activeBox.activeObject === activeBox.objects[index]) {
      return "box-active";
    } else {
      return "box-inactive";
    }
  };

  return (
    <div className=" w-full my-5 mb-5 md:mx-auto md:w-1/2">
      <div className="text-center space-x-2 mx-4 flex flex-row justify-between items-center overflow-x-scroll">
        {daily &&
          daily.map((item, i) => {
              let key = nanoid();
            return (
              <div
                onClick={() => toggleActiveBox(i)}
                id={toggleActiveBoxIdName(i)}
                key={key}
                className="py-2 h-32 my-2 flex flex-col items-center text-sm w-[84px] hover:border sm:w-[84px]"
              >
                <div className="w-18">
                  <p>{item.title}</p>
                  <p>{item.temp.toFixed()}° {(item.temp + Math.random() * 6).toFixed()}°</p>
                </div>

                <img className="h-10" src={iconUrlFromCode(item.icon)} alt="" />
                <p className="w-20">{item.mode}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MainBox;
