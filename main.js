const planetList = document.querySelector(".planets")
const planetWrapper = document.querySelector(".planetWrapper")

let planetNumber = 1

//Hämtar nycklen och lägger den i en variabel
let API_KEY = fetch(
  "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
  {
    method: "POST",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("fetch data: ", data.key);
    return data.key
  });


//Pga att API_KEY returnerar en promise så måste vi resolve:a den först innan vi får nyckeln vilket vi kan göra med then.
//Sen placera in nyckeln som ett argument i funktionen där vi vill använda den.
API_KEY.then(requestedKey => {
    console.log("requestedKey: ", requestedKey);
    getPlanet(requestedKey);

})




const getPlanet = async (apiKey) => {
    const API_KEY = apiKey
    let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom':`${API_KEY}`}
})

const data = await resp.json()
console.log("planets", data.bodies);
//loop through key-value pair using .entries() on the array and assign them using "index" and "item"
for (const [index, item] of data.bodies.entries()) {
    console.log(`index: ${index}. Item: ${item.name}`);
    const planet = document.createElement("div")
    const planetName = item.name
    planet.append(planetName)
    planet.classList.add(`planet-${planetNumber++}`)
    planet.classList.add("planet")
    planetWrapper.append(planet)

    planet.addEventListener("click", (event) => {
        console.log(event.target);
        //Get info on planet based on clicked index
        getInfo(index,API_KEY)
    })
    
}
}

const getInfo = async (index, apikey) => {
    let response = await (fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
        method: 'GET',
        headers: {'x-zocom':`${apikey}`}
    }))

    const data = await response.json()
    console.log("Data.name", data.bodies[index].name);
    console.log("Data.temp", data.bodies[index].latinName);//latin namn
    console.log("Data.desc", data.bodies[index].desc);
    console.log("Data.distance", data.bodies[index].distance)
    console.log("Data.circumference", data.bodies[index].circumference);
    console.log("Data.Moons", data.bodies[index].moons);
    console.log("Data.temp", data.bodies[index].temp.day);//night
    console.log("Data.temp", data.bodies[index].temp.night);//night




}



