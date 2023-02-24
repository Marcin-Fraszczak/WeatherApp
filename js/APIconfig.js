export {config}

const config =
    {
        key: '46192b1a692f4486a0d181847232202 ',
        city: 'auto:ip',
        days: 6,
        url: (key, city, days) =>
            `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}`,
    }
