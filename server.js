const express = require('express')
const request = require('request')
const path = require('path')
const config = require('./config')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.post('/',function(req,res){
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${config.apiKey}`
    request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    }
    else
    {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${(weather.main.temp-32)*5/9} degrees in ${weather.name}!`;
        res.render('index', {
          weather: weatherText,
           error: null
         });
      }
    }
  });
})


app.listen(3000,function(){
  console.log('App Started! TaDa!')
})
