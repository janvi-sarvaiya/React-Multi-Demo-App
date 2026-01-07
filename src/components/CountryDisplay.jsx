import React from "react";

export default function CountryDisplay({ country }) {
  return (
    <>
      <div className="show-country">
        <h3>Show Country Information</h3>
        <div className="flag">
          <img src={country.flags.png} alt="" width="120px" height="80px" />
          <div className="flag-info">
            <h2>{country.name.common}</h2>
            <p>Capital of {country.capital}</p>
            <a href={country.maps.googleMaps} target="_blank">
              Show Location here
            </a>
          </div>
        </div>
        <div className="country-info">
          <p>
            <b>Population :</b> {country.population}
          </p>
          <p>
            <b>Currency : </b>{" "}
            {Object.values(country.currencies).map(
              (val) => val.symbol + " " + val.name
            )}
          </p>
          <p>
            <b>Info : </b>
            {country.flags.alt}
          </p>
        </div>
      </div>
    </>
  );
}
