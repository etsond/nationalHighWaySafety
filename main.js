
document.querySelector("button").addEventListener("click", getVehicle)

function getVehicle(){

let makeId = Number(document.querySelector("input").value)

fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("h1").innerText = data.Message
        console.log(data.Message)
        console.log(data.Results)
        document.querySelector("p").innerText = data.Results[0].Make_Name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}