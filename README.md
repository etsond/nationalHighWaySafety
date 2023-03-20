# Vehicle Data API
This code sends a GET request to the National Highway Traffic Safety Administration (NHTSA) API to retrieve vehicle data based on a given make ID entered by the user. The API returns an array of vehicle models that belong to the given make ID, and the code then displays information about each model on the webpage.

### How it works
The code listens for a click event on a button element. When the button is clicked, the getVehicle() function is called. This function retrieves the user's input (the make ID) from an input field, converts it to a number, and uses it to construct a URL to call the NHTSA API.

The fetch() method is used to make the API call. When the response is received, the res.json() method is called to convert the response to a JSON object. The code then iterates over the array of vehicle models returned by the API, displaying information about each model on the webpage. Specifically, for each model, the code displays the make ID, make name, and model name.

If there is an error during the API call, the code logs an error message to the console.

### Usage
To use this code, you need to have a valid make ID for a vehicle manufacturer. You can find a list of make IDs on the [NHTSA API documentation page](https://vpic.nhtsa.dot.gov/api/Home/Index/LanguageExamples). Enter a make ID in the input field provided and click the button to retrieve information about the vehicle models associated with that make ID.
