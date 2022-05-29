import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateProvider";

export const useCountries = () => {
  const { dispatch } = useContext(StateContext);
  const [isLoading, setIsLoading] = useState(true);
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
            acc.push({ "id": country.cca2, "name": country.name.common });
            return acc;
          }, [])
        }
        setIsLoading(false);
        dispatch({ type: 'SET_COUNTRIES', payload: { countries: countries } });
    })();
  }, [search]);

  return [isLoading, setSearch];
}