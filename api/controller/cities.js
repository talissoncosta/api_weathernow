
const Cities = require("../city_list.json");
const Weather = require("../weather_list.json");
const moment = require('moment');
var _ = require('lodash');

const get_all = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        var filteredCities = Cities;
        if(lat && lon){
            filteredCities = await Cities.filter(city => {
                return ( city.coord.lat == lat && city.coord.lon == lon);
            });
            if(filteredCities.length == 0){
                return res.status(204).json(filteredCities);
            }
        }
        return res.status(200).json(filteredCities);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const get_all_weather = async (req, res) => {
    try {
        const citiesWithWeather = await Cities.filter(city => {
            var cityWeather = Weather.find(w => w.cityId == city.id);
            return ( cityWeather ? cityWeather : false );
        });
        return res.json(citiesWithWeather);
    } catch (error) {
        return res.status(500).json(error)
    }

}
const get_by_id = async (req, res) => {
    try {
 
        const { id } = req.params;
        const { start, end } = req.query;
        if(!id){
            return res.status(400).json({
                error: "Invalid data"
            });
        } 

        const cityFound = await Cities.find(c => c.id == id);
        if(!cityFound){
            return res.status(204).json(cityFound);
        }
        if (!_.isEmpty(cityFound)) {
            var weather = await Weather.find(w => w.cityId == cityFound.id);
            
            cityFound.weather = weather.data;
            
            if(start && end){

                weather = await weather.data.filter(d => {
                    return (moment.unix(d.dt).isAfter(moment(start,"YYYY-MM-DD")) &&
                            moment.unix(d.dt).isBefore(moment(end, "YYYY-MM-DD")))
                })
                cityFound.weather = weather
            }
            if(!weather || weather === undefined || weather.length < 1){
                return res.json({
                    error: "The city that you chose does not have weather forecast."
                });
            }
        }          
        return res.json(cityFound);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }

}
module.exports = {
    get_all,
    get_all_weather,
    get_by_id
}