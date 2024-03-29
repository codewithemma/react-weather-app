import React from "react";
import sunIcon from "../Assets/sun-icon.png";
import rainSvg from "../Assets/rain-svg.svg";
import windIcon from "../Assets/wind-icon.svg";
import pressureSvg from "../Assets/pressure-svg.svg";
const CustomWeather = ({ weatherData }) => {
  return (
    <>
      <div>
        <header className="mt-3">
          <p className="font-mono">
            Right now in <strong>Lagos</strong>, its partly cloudy.
          </p>
        </header>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
          <img src={sunIcon} alt="Weather Icon" />
          <h1 className="text-8xl font-thin mx-auto">30°</h1>
          <div className="flex flex-col space-y-3 font-mono font-medium">
            <p className="flex">
              <img src={windIcon} className="mr-1" alt="wind" width={"20px"} />
              <span>
                29<sub>mph</sub>
              </span>
            </p>
            <p className="flex">
              <img src={rainSvg} alt="rain" width={"20px"} className="mr-1" />
              <span>
                45<sub>%</sub>
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
                45<sub>%</sub>
              </span>
            </p>
          </div>
        </div>
        <div className="font-mono mt-4 flex justify-center items-center">
          <p className="text-2xl">Good Afternoon</p>
          <p>08.03.2024</p>
          <p>12:34 PM</p>
        </div>
      </div>
    </>
  );
};

export default CustomWeather;
