
const API_URL = "https://restcountries.com/v3.1";
const fetchCountries = async (path) => { 
  try {
    const res = await fetch(
      `${API_URL}/${path}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const getData = async () => {
    return fetchCountries('all');
  };
const getCountry = async (id) => {
    return fetchCountries(`/name/${id}`);
  };

export{getCountry,getData}