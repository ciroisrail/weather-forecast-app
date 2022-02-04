function Forecast() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={}&appid={YOUR API KEY}') //OpenWeatherMap API connected (One call API)
    .then(response => response.json())
    .then(data => {
        const Array = [];
        for (let i = 1; i < 6; i++) {
            let div = document.getElementById('forecast');
            let max = Math.round(data['daily'][i]['temp']['max']);
            let min = Math.round(data['daily'][i]['temp']['min']);
            let weather = data['daily'][i]['weather'][0]['main'];
            let dt = data['daily'][i]['dt'];
            const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const date = new Date(dt * 1000);
            let weekDay = daysArray[date.getDay()];
            let dayNum = date.getDate();
            let month = monthsArray[date.getMonth()];
            let time = `${weekDay}, ${dayNum} ${month}`;
            let txt = `<div class = 'forecast-div'>
                <h6> ${time} </h6>
                <h3> ${max}° / ${min}° </h3>
                <h5> ${weather} </h5>
            </div>`;
            Array.push(txt);
            div.innerHTML = Array;
        }
    })
    return(
        <div id = 'forecast' className = 'd-flex align-items-center justify-content-evenly w-100'></div>
    )
}
export default Forecast