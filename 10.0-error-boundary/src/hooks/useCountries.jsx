import { useEffect, useState } from "react";

const parseField = field => {
  if (typeof field === "object" && field !== null) return objectToString(field);
  return field ?? '-';
}

const objectToString = (obj) => {
  return Object.values(obj).reduce((acc, value) => {
      acc += parseField(value) + ", ";
      return acc;
  }, []).slice(0, -2);
}

export const useCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const COUNTRIES_API = `https://restcountries.com/v3.1`;
  const ALL_COUNTRIES_URL = `${COUNTRIES_API}/all`;
  const COUNTRY_BY_NAME_URL = `${COUNTRIES_API}/name/${search}`;

  useEffect(() => {
    (async () => {
        setIsLoading(true);
        const request = await fetch(search ? COUNTRY_BY_NAME_URL : ALL_COUNTRIES_URL);
        const result = await request.json();
        let countries = [];
        if(request.ok) {
          countries = result.reduce((acc, country) => {
            acc.push({ 
              "id": country.cca2, 
              "name": country.name.common,
              "cca3": country.cca3,
              "capital": country.capital ? country.capital.join(',') : '-',
              "currencies": parseField(country.currencies ?? {}),
              "flag": country.flags.svg,
              "languages": parseField(country.languages ?? {}),
              "region": country.region,
              "subregion": country.subregion,
              "population": country.population
            });
            return acc;
          }, []);
        }
        setIsLoading(false);
        setCountries(countries);
    })();
  }, [search]);

  return [isLoading, countries, setSearch];
}