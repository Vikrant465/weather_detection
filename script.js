const button = document.getElementById("search-button")
const input = document.getElementById("city-name")
const cityloaction = document.getElementById("location")
const citytime = document.getElementById("localtime")
const citytemp = document.getElementById("temperature")
const lloc = document.getElementById("ll")


// city name
async function getData (cityName) {

    const promice = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b1aae9368d549988c2113558240706&q=${cityName}&aqi=no`)
    return await promice.json()
}
// lot,log
async function llocation(lat,log){
    const promice = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b1aae9368d549988c2113558240706&q=${lat},${log}&aqi=no`)
    return await promice.json()
}

async function getlocation(position){
    const result = await llocation(position.coords.latitude , position.coords.longitude)
    console.log(result);
    cityloaction.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
    citytime.innerText = `${result.location.localtime}`
    citytemp.innerText = `${result.current.temp_c}`
}
function failedtoget(){
    console.log("there was error");
}
lloc.addEventListener("click",async()=>{
    navigator.geolocation.getCurrentPosition(getlocation,failedtoget);
    // console.log(result1);
})

button.addEventListener("click", async()=>{
    const value = input.value;

    
    const result = await getData(value);
    console.log(result);
    cityloaction.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country} `;
    citytime.innerText = `${result.location.localtime}`
    citytemp.innerText = `${result.current.temp_c}`
})



// http://api.weatherapi.com/v1/current.json?key=3b1aae9368d549988c2113558240706&q=London&aqi=no