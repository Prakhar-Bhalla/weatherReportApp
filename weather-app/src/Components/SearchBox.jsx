import { useState } from "react";
import { UilSearch, UilLocationPoint} from "@iconscout/react-unicons";
import Cities from "./Cities";

function SearchBox({ setQuery, weatherData }) {
  const [input, setInput] = useState(weatherData.name);
  const [divToggle, setDivToggle] = useState(false);

  const onSubmit = () => {
    setQuery({ q: input });
  };

  const getCityToSearch = (city) => {
    setQuery({ q : city})
  }

  return (
    <div className="relative mt-5 w-full text-black md:mx-auto md:w-1/2">
      <div className="relative flex flex-row items-center w-full text-black">
        <UilLocationPoint
          size={22}
          className="absolute ml-5 text-blue cursor-pointer transition ease-out hover:scale-125"
        />

        <input
          onClick={() => setDivToggle(true)}
          onKeyDown={(event) => {
            if(event.key === "Enter") {
                onSubmit();
            }
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for city...."
          id="input"
          className="rounded-lg pl-10 text-xl font-light p-2 w-full h-12 capitalize placeholder:lowercase mx-4"
        />

        <UilSearch
          onClick={onSubmit}
          size={22}
          className="absolute right-10 text-blue cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      {divToggle ? (
        <Cities
          setInput={setInput}
          input={input}
          setDivToggle={setDivToggle}
          getCityToSearch={getCityToSearch}
        />
      ) : null}
    </div>
  );
}

export default SearchBox;
