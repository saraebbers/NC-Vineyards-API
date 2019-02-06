# API ENDPOINTS

#### Vineyards
```
GET /api/v1/vineyards // get all vineyards
--> returns an array of vineyard objects

GET /api/v1/vineyards${queryString}
queryString: ?region=[Mountains OR Coast OR Piedmont] --> returns all vineyards associated with given region.
queryString: ?name=[Enter given name with %20 between each word] --> returns an array of one vineyard object with a matching name.

GET /api/v1/vineyards/:id // get a specific vineyard
--> returns a specific vineyard object

POST /api/v1/vineyards  // create a new vineyard
--> required parameters: 'name'(string), 'address'(string), 'phone'(string in format '(XXX) XXX-XXXX'), 'region'(string), and 'region'(string of either 'Coast', 'Mountains', or 'Piedmont')

PUT /api/v1/vineyards/:id  // edit a given vineyard with corrected information for any one(or multiple) parameter(s) required in the POST vineyards endpoint directly above excluding the id (primary key).

DELETE /api/v1/vineyards/:id  // delete a specific vineyard and all wines associated with specified vineyard
```
#### Wines
```
GET /api/v1/wines // get all wines
--> returns an array of all wine objects

GET /api/v1/wines/:id // get a specific wine
--> returns a specific wine object

POST /api/v1/wines // create a new wine
--> required parameters: 'name'(string), 'color'(string), 'type'(string), 'vineyard_id'(number, this is to be associated with the primary key id of the associated vineyard)

PUT /api/v1/wines/:id  // edit a given wine with corrected information for any one(or multiple) parameter(s) required in the POST wines endpoint directly above excluding the id (primary key).

DELETE /api/v1/wines/:id  // delete a specific wine

```
### Screenshots of various requests to the server utilizing the POSTMAN application.
#### Screenshot of a GET request to the vineyards database.
![screen shot 2019-01-31 at 12 51 39 pm](https://user-images.githubusercontent.com/40974490/52081920-a493a500-2558-11e9-8118-7bb01cedcadb.png)

#### Screenshot of a GET request to the wines database.
![screen shot 2019-01-31 at 12 52 18 pm](https://user-images.githubusercontent.com/40974490/52081966-cab94500-2558-11e9-866c-5287f3ce9d9f.png)

#### Screenshot of a QUERY GET request as well as the response.
![screen shot 2019-01-31 at 12 54 15 pm](https://user-images.githubusercontent.com/40974490/52082031-f0464e80-2558-11e9-8e6a-f1265dd095bc.png)

![screen shot 2019-01-31 at 12 54 25 pm](https://user-images.githubusercontent.com/40974490/52082156-3ef3e880-2559-11e9-907f-028ce17f2dbf.png)

#### Screenshot of a POST request to the vineyards database as well as the response.
![screen shot 2019-01-31 at 12 57 25 pm](https://user-images.githubusercontent.com/40974490/52082335-c3df0200-2559-11e9-97d8-a96736f808f2.png)

#### Screenshot of a PUT request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 21 pm](https://user-images.githubusercontent.com/40974490/52082691-b7a77480-255a-11e9-875e-7e772e799aba.png)

#### Example of a DELETE request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 48 pm](https://user-images.githubusercontent.com/40974490/52082768-e32a5f00-255a-11e9-99f5-7fcab4bde177.png)

[BACK TO README](https://github.com/Cody-Price/BYOB)

[TO GETTING_STARTED](https://github.com/Cody-Price/BYOB/blob/master/GETTING_STARTED.md)

[TO CONTRIBUTIONS](https://github.com/Cody-Price/BYOB/blob/master/CONTRIBUTING.md)
