
document.querySelector("button").addEventListener("click", getVehicle);
document.querySelector("input").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    getVehicle();
  }
});

function getVehicle() {
  let makeId = Number(document.querySelector("input").value);

  fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${makeId}?format=json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      if (data.Results.length === 0) {
        document.querySelector("p").innerText = "We do not have this current make Id. Please try another one.";

      } else {
        document.querySelector("p").innerText = "";
        data.Results.forEach(element => {
          console.log(element.Make_ID);
          document.querySelector("#id").innerText = `Make Id is ${element.Make_ID}`;
          console.log(element.Make_Name);
          document.querySelector("h4").innerText = `Make Name is ${element.Make_Name}`;
          console.log(element.Model_Name);
          document.querySelector("#modelName").innerText = `Model Name is ${element.Model_Name}`;
        });
      }
    })
    .catch(err => {
      console.log(`error ${err}`);
      document.querySelector("p").innerText = `Error: ${err.message}. Please try again later.`;
    });
}
