//load - начет работать, когда страница полностью загружена
window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone')

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
                    const {temperature, summary} = data.currently;
                    data.currently.temperature
                    //set DOM Elements from the API

        })
        
        })
    }else {
        h1.textContent = 'hey, not working, i dont know why(( Sorry'
    }
})

/*
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
*/