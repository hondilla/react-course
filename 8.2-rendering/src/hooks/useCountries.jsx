import countries from '../countries.json';

export const useCountries = () => 
  countries.reduce((acc, country) => {
    acc.push({
      "id": country.cca2,
      "name": country.name.common
    })
    return acc;
  }, []);