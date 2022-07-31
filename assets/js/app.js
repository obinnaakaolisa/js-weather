const cityForm = document.querySelector('form');
const card     = document.querySelector('.card');
const details  = document.querySelector('.details');
const time     = document.querySelector('img.time');
const icon     = document.querySelector('.icon img');



const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weatherDetails = data.weatherDetails;

    // Update Details Template
    details. innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg; C</span>
        </div>
    `;

    //Remove the Hidden Class on the Card
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //Update Night or day and icon images
    const iconSrc = `assets/images/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weatherDetails.IsDayTime ? 'assets/images/day.svg' : 'assets/images/night.svg';
    

    time.setAttribute('src', timeSrc);

    
};

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);
    return { cityDetails, weatherDetails };
}
cityForm.addEventListener('submit', (e) => {

    //Prevent Default Action
    e.preventDefault();


    //Get City Value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    
    //Update UI with the new city
    updateCity(city)
        .then( data => updateUI(data))
        .catch (err => console.log(err));
});