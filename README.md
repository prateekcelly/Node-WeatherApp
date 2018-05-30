# Node-WeatherApp
## About
A simple weather app made using Node, Express and Open Weather Map API.
## Instructions to Run
Make sure that [Node](https://nodejs.org/en) and [Express](https://expressjs.com/) are installed in your computer.
### clone the repo
```bash
git clone https://github.com/prateekcelly/Node-WeatherApp.git
```
### Install the dependencies
```bash
cd Node-WeatherApp
npm install 
npm install --save ejs
```
### Create config file
In the Project directory create a new file named config.js which contains the your own API key.
( To get your own API key click [here](https://openweathermap.org/api)).
Your config file should look like this:
```javascript
// config.js
module.exports={
  apiKey: '',   // Insert API key
};
```
### Run the app
```
npm start
```
Now simply open a browser and type [localhost:3000](http://localhost:3000) 
