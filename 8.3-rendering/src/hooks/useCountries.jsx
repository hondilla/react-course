import countries from '../countries.json';

export const useCountries = () => 
  countries.map(country => {
    return {
      "id": country.cca2,
      "name": country.name.common
    };
  });