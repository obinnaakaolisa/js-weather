const key = 'QkGAhbRFnbQh4cZnEp48ZL8zuEoyCP3H';

//Get City Information
const getWeather = async (locationId) => {
    const baseURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationId}?apikey=${key}`;


    const response = await fetch(baseURL + query);

    const data = await response.json();

    return data[0];

};

//Get Weather Information
const getCity = async (city) => {
    const baseURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();

    return data[0];

};