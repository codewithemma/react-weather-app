import React, { useCallback, useEffect, useState } from "react";
import CustomWeather from "./CustomWeather";
import rainSvg from "../Assets/rain-svg.svg";
import windIcon from "../Assets/wind-icon.svg";
import pressureSvg from "../Assets/pressure-svg.svg";
const WeatherData = ({ weatherData }) => {
  const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const getGreeting = useCallback(() => {
    const currentHour = date.getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [date]);

  useEffect(() => {
    getGreeting();
  }, [getGreeting]);

  useEffect(() => {
    getGreeting();
  }, [date, getGreeting]);

  return (
    <div>
      {weatherData.weather ? (
        <div>
          {weatherData.weather.map((index) => {
            return (
              <>
                <header key={index.id} className="mt-3">
                  <p className="font-mono">
                    Right now in <strong>{weatherData.name}</strong>, there's{" "}
                    <strong>{index.description}</strong>
                  </p>
                </header>
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center mt-3"
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt="Weather Icon"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <h1 className="text-8xl font-thin mx-auto">
                    {weatherData.main.temp.toFixed()}°
                  </h1>

                  <div className="flex flex-col space-y-3 font-mono font-medium">
                    <p className="flex">
                      <img
                        src={windIcon}
                        className="mr-1"
                        alt="wind"
                        width={"20px"}
                      />
                      <span>
                        {weatherData.wind.speed}
                        <sub>mph</sub>
                      </span>
                    </p>
                    <p className="flex">
                      <img
                        src={rainSvg}
                        alt="rain"
                        width={"20px"}
                        className="mr-1"
                      />
                      <span>
                        {weatherData.main.humidity}
                        <sub>%</sub>
                      </span>
                    </p>
                    <p className="flex">
                      <img
                        src={pressureSvg}
                        alt="air pressure"
                        width={"20px"}
                        className="mr-1"
                      />
                      <span>
                        {weatherData.main.pressure}
                        <sub>atm</sub>
                      </span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="font-mono mt-4 flex justify-between items-center">
            <p className="text-2xl">{greeting}</p>
            <p>{formattedDate}</p>
            <p>{date.toLocaleTimeString([], timeOptions)}</p>
          </div>
        </div>
      ) : (
        <CustomWeather />
      )}
    </div>
  );
};

export default WeatherData;
