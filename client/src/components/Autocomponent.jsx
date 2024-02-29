import { useState, useMemo } from "react";

// list of european countries
const countries = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

export default function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // create a useMemo called filteredCountries that will filter the countries array based on the searchTerm
  // and set the results state to the filtered array
  const filteredCountries = useMemo(() => {
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return filteredCountries;
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredCountries.map((country, index) => (
          <div key={index} onClick={() => setSearchTerm(country)}>
            {country}
          </div>
        ))}
      </div>
    </div>
  );
}