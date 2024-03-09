import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Input from "./Input";
const Weather = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const api_key = "115a3cfe39f9f803a69f8a609c508cdb";
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;
  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      if (location.trim() === "") {
        setAlertMessage("Please enter a city to know the weather.");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(api_url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
        setAlertMessage("");
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
      setLocation("");
    }
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  if (loading) {
    return <div className="loader mx-auto my-10"></div>;
  }

  if (error) {
    return (
      <>
        <div>
          <Input
            handleChange={handleInputChange}
            handleKeyDown={searchLocation}
            value={location}
          />
        </div>
        <div
          class="p-4 mb-4 text-sm w-3/12 mx-auto mt-3 text-red-700 rounded-lg bg-blue-50"
          role="alert"
        >
          <span class="font-medium">Info alert!</span> No result found!!. Enter
          a valid city...
        </div>
      </>
    );
  }
  if (!data) {
    return <p className="fw-bold">city not found</p>;
  }
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <Input
        handleChange={handleInputChange}
        handleKeyDown={searchLocation}
        value={location}
      />
      {alertMessage && (
        <div
          className="p-4 mt-4 text-sm text-red-700 rounded-lg bg-blue-50"
          onClick={() => setAlertMessage("")}
          role="alert"
        >
          <span className="font-medium">Info alert!</span> {alertMessage}
        </div>
      )}
      <WeatherData weatherData={data} />
    </div>
  );
};

export default Weather;
