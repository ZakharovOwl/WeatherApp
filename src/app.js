//load - начет работать, когда страница полностью загружена
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureIcon = document.querySelector('.temperature-icon');
    let weatherIcon = document.querySelector('.weather-icon')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const apiKey = '7ed9d435b9ac07fc6d9c5c2033420a51';
           const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`;
            
           fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data=>{
                    console.log(data);
                    const {temp, summary} = data.current;

                    //set DOM Elements from the API
                    //Units – default: kelvin 

                    temperatureDegree.textContent = `${temp -  273,15}`;
                    temperatureDescription.textContent = data.current.weather[0].description;
                    locationTimezone.textContent = data.timezone;
                    let iconLink = data.current.weather[0].icon;
                    weatherIcon.innerHTML = `<img src=http://openweathermap.org/img/w/${iconLink}.png></img>`
                })
            })
        }else {
            h1.textContent = 'hey, not working, i dont know why(( Sorry'
    }
})

