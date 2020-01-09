/*

Lista de cidades
Lista de cidades que possuem um clima disponível com a informação do clima
Visualizar uma cidade X com o seu clima
Visualizar uma cidade X com o seu clima e filtrar o clima em um range de tempo Ex. (2017-03-12 até 2017-03-21)
*/

const Cities = require("../city_list.json");
const Weather = require("../weather_list.json");
const moment = require('moment');
const get_all = async (req, res) => {
    try {
        return res.status(200).json(Cities);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const get_all_weather = async (req, res) => {
    try {
 
        const filteredCities = await Cities.filter(city => {
            var d = Weather.find(w => w.cityId == city.id);
            if(d)
                return d;
            return false
        });

        return res.json(filteredCities);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }

}
const get_by_id = async (req, res) => {
    try {
 
        const { id } = req.params;
        const { start,end } = req.query;
        if(!id) 
            return res.status(400).json({
                error: "Invalid data"
            });  
        const filteredCities = await Cities.find(c => c.id == id);
        if (Object.entries(filteredCities).length !== 0) {
            var weather = await Weather.find(w => w.cityId == filteredCities.id);

            if(start && end){
                console.log(req.query,moment(weather.data[0].dt).format("DD/MM/YYYY"))

                weather = await weather.data.filter(d =>{
                    return (moment(weather.data[0].dt).isAfter(moment(start,"DD/MM/YYYY")) 
                            &&
                            moment(weather.data[0].dt).isBefore(moment(end, "DD/MM/YYYY")))
                })
            }
            if(!weather || weather === undefined || weather.length < 1)
                return res.json({
                    error: "The city that you chose does not have weather forecast."
                });
            filteredCities.weather = weather.data;
        }
            
            
        return res.json(filteredCities);
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