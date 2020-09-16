//load - начет работать, когда страница полностью загружена
window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = ppsition.coords.longitude;
           lat = position.coords.latitude;
           //13.43
        })
    }else {
        h1. textContent = 'hey, not working, i dont know why(( Sorry'
    }
})