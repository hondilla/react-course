import { useEffect, useState } from "react";

export const useCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
        setIsLoading(true);
        const request = await fetch("https://restcountries.com/v3.1/all");
        const result = await request.json();
        let countries = [];
        if(request.ok) {
          countries = result.reduce((acc, country) => {
            acc.push({ "id": country.cca2, "name": country.name.common });
            return acc;
          }, [])
        }
        setIsLoading(false);
        setCountries(countries);
    })();
  }, []);

  return [isLoading, countries];
}