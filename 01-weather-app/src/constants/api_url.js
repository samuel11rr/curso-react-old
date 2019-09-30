const location = "Mexico City,mx";

const api_key= "8dc6f49ddb2df3c07eb229a45f0bd47a";
const base_url = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${ base_url }?q=${ location }&appid=${ api_key }`;