

fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })