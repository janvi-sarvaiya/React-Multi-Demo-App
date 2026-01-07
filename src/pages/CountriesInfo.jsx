import React, { lazy, Suspense, useState } from "react";

const CountryDisplay = lazy(() => import("../components/CountryDisplay"));

function Loading() {
  return <p className="fallback"> </p>;
}

export const CountriesInfo = () => {
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!search) {
      setError("Please enter a country name");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");

    try {
      const fetchCountry = await fetch(
        `https://restcountries.com/v3.1/name/${search}?fields=name,flags,population,currencies,capital,maps`
      );
      if (!fetchCountry.ok) {
        setError("country not found!");
        setLoading(false);
        setCountry(null);
        return;
      }
      const data = await fetchCountry.json();
      setTimeout(() => {
        setCountry(data[0]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="country-container">
      <div className="country-box">
        <h1>Country Information</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="enter country name"
          name="search"
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {error && (
          <p style={{ color: "red", fontSize: "18px", marginTop: "1rem" }}>
            {error}
          </p>
        )}

        {loading && <Loading />}
        {!loading && country && (
          <Suspense fallback={<Loading />}>
            <CountryDisplay country={country} />
          </Suspense>
        )}
      </div>
    </div>
  );
};
