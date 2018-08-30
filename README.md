#Project has been developed with help facebook/create-react-app https://github.com/facebook/create-react-app,
#extended to include Redux and NodeJs

open-weather-app

Server side starts on port 8080 with
npm run start-babel

Client side starts on port 3000 with
npm run start

Once application started on the client side it will go directly to `/` route
and weather forecast for default city is retrieved.

Enter the city name to return forecast for that city
Search Pressure to get the average pressure for the next five days for default or specified city.

There is more work to be done to handle errors and display error component.

There are two routes on the server side
/weather/forecast = to return forecast
/weather/pressure?cityName=warsaw - to return average pressure

example: http://localhost:8080/weather/forecast
example: http://localhost:8080/weather/pressure?cityName=warsaw
