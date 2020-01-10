const request = require("supertest");
const app = require('../server');


describe('CITIES', () => {
    it('SHOULD RETURN 48 CITIES', async () => {

        let response = await request(app).get('/cities')
        .set('Accept', 'application/json');

        expect(response.body.length).toBe(48);
    });

    it('SHOULD GET THE CITY VILLARICA', async () => {
        
        var response = await request(app).get('/cities').query({
            lon:'-72.227898',
            lat:'-39.28569'
        })
        .set('Accept', 'application/json');
        var city = response.body[0];
        expect(city.name).toBe('Villarrica');
    });
    
    it('SHOULD NOT RETURN ANY CITY', async () => {
        var response = await request(app).get('/cities').query({
            lon:'00000000',
            lat:'-39.28569'
        })
        .set('Accept', 'application/json');

        expect(response.status).toBe(204);
    });

    it('SHOULD RETURN JUST 2 CITIES WITH WEATHER', async () => {
        let response = await request(app).get('/cities/weather')
        .set('Accept', 'application/json');

        expect(response.body.length).toBe(2);
    });

    it('SHOULD GET THE CITY CASILDA', async () => {
        
        var response = await request(app).get('/cities/3862351')
        .set('Accept', 'application/json');
        console.log(response)

        var city = response.body[0];
        
        expect(city.name).toBe('Casilda');
    });

    it('SHOULD NOT RETURN ANY CITY', async () => {
        var response = await request(app).get('/cities/0000000')
        .set('Accept', 'application/json');

        expect(response.status).toBe(204);
    });
});