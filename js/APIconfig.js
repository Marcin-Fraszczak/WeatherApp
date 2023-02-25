export {config}

const config =
    {
        url: (city = 'auto:ip', days = 6) =>
            `https://api.weatherapi.com/v1/forecast.json?key=46192b1a692f4486a0d181847232202&q=${city}&days=${days}`,
    }
