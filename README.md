# API WEATHER NOW

## Documentação

DOCUMENTAÇÃO NO POSTMAN <br>
[https://documenter.getpostman.com/view/442769/SWLiYkmj?version=latest](https://documenter.getpostman.com/view/442769/SWLiYkmj?version=latest) 
### Funcionalidades 
 -   Listar todas as cidades
 - Filtrar a lista de cidades por latitude e longitude
-   Listar de cidades que possuem um clima disponível com a informação do clima
-   Buscar cidade por ID com o seu clima
-   Buscar cidade por ID com o seu clima e filtrar o clima em um range de tempo Ex. (2017-03-12 até 2017-03-21)
## Requisições 
#### Listar todas as cidades 
* **URL**

  `http://localhost:3001/cities`

* **Method:**
  `GET`
  
 * **Responses:**
	  * **Code:** 200
	    **Content:** `Array with cities`
	 
	  * **Code:** 204
	    **Content:** `Empty array`
#### Listar cidade correspondente a LATITUDE e LONGITUDE filtradas
* **URL**

  `http://localhost:3001/cities?lat=<LATITUDE>&lon=<LONGITUDE> `

* **Method:**
  `GET`
 *  **URL Params**
 
	 **Required:**
			
		`lat=[float]`
		 lon=[float]`

 * **Responses:**
	  * **Code:** 200
	    **Content:** `Array with city`
	 
	  * **Code:** 204
	    **Content:** `Empty array`


#### Buscar cidades que possuem informações sobre o clima
* **URL**

  `<http://localhost:3001/cities/weather>`

* **Method:**
  `GET`
 *  **URL Params**

 * **Responses:**
	  * **Code:** 200
	    **Content:** `Array with cities`
	 
	  * **Code:** 204
	    **Content:** `Empty array`
	    
#### Buscar por ID cidade que possuem informações sobre o clima 
* **URL**

  `http://localhost:3001/cities/<id>`

* **Method:**
  `GET`
 *  **URL Params**
 
	 **Required:**
			
		`id=[integer]`

 * **Responses:**
	  * **Code:** 200
	    **Content:** `Array with `
	 
	  * **Code:** 204
	    **Content:** `Empty array`

#### Buscar por ID cidade que possuem informações sobre o clima filtrando resultados do clima por data (YYYY-MM-DD)
* **URL**

  `http://localhost:3001/cities/<id>`

* **Method:**
  `GET`
 *  **URL Params**			
		`start=[YYYY-MM-DD]`
		`end=[YYYY-MM-DD]`
 * **Responses:**
	  * **Code:** 200
	    **Content:** `Array with `
	 
	  * **Code:** 204
	    **Content:** `Empty array`
