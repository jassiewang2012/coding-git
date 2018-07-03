// APIXU Info

const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements

const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4"),$("#weather5"),$("#weather6")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 // getForecast().then(forecast =>renderForecast(forecast));


// Add AJAX functions here:
const getForecast = async (trip) => {
  const urlToFetch =forecastUrl+apiKey+'&q='+trip+'&days=6&hour=11';
try{
  const response = await fetch(urlToFetch);
   if(response.ok){
     const jsonResponse = await response.json();
     const days = jsonResponse.forecast.forecastday;
     return days;
   }
}catch(error){
  console.log(error);
}
}


const renderForecast = (days) => {

  $weatherDivs.forEach(($day, index) => {
   
const currentDay = days[index];
    let weatherContent = createWeatherHTML(currentDay);
 
    $day.append(weatherContent);
  });
}

const createWeatherHTML = (currentDay) => {
  return `<h3> High: ${currentDay.day.maxtemp_c} C<sup>o</sup></h3>
    <h3> Low: ${currentDay.day.mintemp_c} C<sup>o</sup></h3>
    <img src="https://${currentDay.day.condition.icon}" class="weathericon" />
    <h3>${weekDays[(new Date(currentDay.date)).getDay()]}</h3>`;
}