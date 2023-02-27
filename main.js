
document.querySelector("button").addEventListener("click", getVehicle)

function getVehicle(){

let makeId = Number(document.querySelector("input").value)

fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}