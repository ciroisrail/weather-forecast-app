import './App.css';

function App() {
    const style = {
        background: 'rgba( 255, 255, 255, 0.5 )',
        backdropFilter: 'blur( 20px )',
        borderRadius: '10px',
        height: 'auto',
        padding: '2.5rem',
        width: '25rem'
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={YOUR API KEY}') //OpenWeatherMap API connected
    .then(response => response.json())
    .then(data => {
        let temp = Math.round(data['main']['temp']);
        let desc = data['weather'][0]['main']
        let min = Math.round(data['main']['temp_min']);
        let max = Math.round(data['main']['temp_max']);
        let humidity = data['main']['humidity'];
        let windSpeed = Math.round(data['wind']['speed']);
        if (windSpeed < 1) {
            windSpeed = `< 1`
        }
        let windDir = data['wind']['deg'];
        let sunrise = data['sys']['sunrise'];
        let srDate = new Date(sunrise * 1000);
        let srHrs = srDate.getHours();
        if (srHrs < 10) {
            srHrs = `0${srHrs}`;
        }
        let srMin = srDate.getMinutes();
        if (srMin < 10) {
            srMin = `0${srMin}`;
        }
        let sunset = data['sys']['sunset'];
        let ssDate = new Date(sunset * 1000);
        let ssHrs = ssDate.getHours();
        if (ssHrs < 10) {
            ssHrs = `0${srHrs}`;
        }
        let ssMin = ssDate.getMinutes();
        if (ssMin < 10) {
            ssMin = `0${ssMin}`;
        }
        let deg;
        if (windDir > 0 && windDir < 90) {
            deg = 'NE';
        } else if (windDir > 90 && windDir < 180) {
            deg = 'SE';
        } else if (windDir > 180 && windDir < 270) {
            deg = 'SW';
        } else {
            deg = 'NW';
        }
        document.getElementById('temp').innerText = `${temp}°`;
        document.getElementById('desc').innerText = desc;
        document.getElementById('max-min').innerText = `${max}° / ${min}°`;
        //
        document.getElementById('humidity').innerText = `${humidity}%`;
        document.getElementById('wind').innerText = `${windSpeed} m/s ${deg}`;
        document.getElementById('sunrise').innerText = `${srHrs}:${srMin}`;
        document.getElementById('sunset').innerText = `${ssHrs}:${ssMin}`;
    })
    return (
        <div className = 'd-flex' style = {style}>
            <div className = 'col-sm-6 d-flex align-items-start flex-column justify-content-center'>
                <h1 id = 'temp'></h1>
                <h2 id = 'desc'></h2>
                <h5 id = 'max-min'></h5>
            </div>
            <div className = 'col-sm-6 d-flex'>
                <div className = 'd-flex flex-column justify-content-evenly w-50'> 
                    <span>Humidity</span>
                    <span>Wind</span>
                    <span>Sunrise</span>
                    <span>Sunset</span>
                </div>
                <div className = 'd-flex align-items-end flex-column justify-content-evenly w-50'>
                    <span id = 'humidity'></span>
                    <span id = 'wind'></span>
                    <span id = 'sunrise'></span>
                    <span id = 'sunset'></span>
                </div>
            </div>
        </div>
    );
}

export default App;
