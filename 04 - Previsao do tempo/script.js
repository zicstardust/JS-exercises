$(document).ready(function() {

    //botao
    $('#getWeatherBtn').on('click', function(){
        var city = $('#cityInput').val();
        var apiKey = $('#weatherAPI').val();
        if (city.trim() !== '' || apiKey.trim() !== ''){
           getWeather(city, apiKey)
        }
    });

    //API
    function getWeather(city, apiKey){
        //var apiKey = '907ec29ba8c06b31fc41f29bdb1700eb';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            data: {
                q: city,
                appid: apiKey,
                units: 'metric',
                lang: 'pt_br',
            },
            success: function (data) {
                console.log(data);
                displayWeather(data);
            },
            error: function (error) {
                showError(error);
                console.error(error);
            }
        })
    }

    function displayWeather(data){
        var weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperatura: ${data.main.temp}</p>
        <p>Condição: ${data.weather[0].description}</p>
        <p>Humidade: ${data.main.humidity}%</p>
        `;
        $('#weatherInfo').html(weatherInfo);
    }

    function showError(error){
        $('#weatherInfo').html(`
            <p>Ocorreu um erro ao obter a previsão do tempo</p>
            <p>Erro: ${error.responseJSON.cod}</p>
            <p>${error.responseJSON.message}</p>  
        `);
    }

});