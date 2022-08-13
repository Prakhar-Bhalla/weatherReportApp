import { useState } from "react";
import { nanoid } from 'nanoid'

function Cities({ input, setInput, setDivToggle }) {
  const [cities, setCities] = useState([
    "Lucknow",
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Kanpur",
    "Pune",
    "Mohali",
    "Noida",
    "Surat",
  ]);
  return (
    <div className="absolute z-10 bg-white mt-4 flex px-4 flex-col items-center my-2 w-full text-black">
      <div className="rounded-lg flex flex-col w-full">
        {cities
          .filter((val) => {
            if (val.toLowerCase().includes(input.toLowerCase())) {
              return val;
            }
          })
          .map((item, i) => {
              let key = nanoid();
            return <div
              onClick={() => {
                setDivToggle(false);
                setInput(item);
              }}
              key={key}
              className="h-12 flex items-center pl-2 bg-bg-div border-b border-b-color"
            >
              {item}
            </div>
          })}
      </div>
    </div>
  );
}

export default Cities;