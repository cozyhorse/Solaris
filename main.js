const planetList = document.querySelector(".planets");
const planetWrapper = document.querySelector(".planetWrapper");
const planetName = document.querySelector(".planet-name");
const planetLatinName = document.querySelector(".planet-latin-name");
const planetDescription = document.querySelector(".description");
const circumference = document.querySelector(".circumference");
const fromSun = document.querySelector(".from-sun");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const moonList = document.querySelector(".moons");
const galaxyWrapper = document.querySelector(".galaxy-wrapper");
const infoWrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back")
const sidePlanet = document.querySelector(".blue-sun")


let planetNumber = 1

//Get the API key and place it in a variable
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
//We must resolve API_KEY first before we use it becuase API_KEY returns a promise.
//Pass key as an argument in the get planet function to initialize page
API_KEY.then(requestedKey => {
    console.log("requestedKey: ", requestedKey);
    //The "initialize" page happens here
    getPlanet(requestedKey);

})



//Function that creates and prints out the planets.
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
    const link = document.createElement("a")
    // const planetName = item.name
    // planet.append(planetName)
    planet.classList.add(`planet-${planetNumber++}`)
    planet.classList.add("planet")
    
    planetWrapper?.append(planet)

    planet.addEventListener("click", (event) => {
      console.log(event.target);

      planetName.textContent = "";
      planetLatinName.textContent = "";
      planetDescription.textContent = "";
      fromSun.textContent = "";
      circumference.textContent = "";
      maxTemp.textContent = "";
      minTemp.textContent = "";

      //Get info on planet based on clicked index
      getInfo(index, API_KEY);
      galaxyWrapper.classList.add("hide")
      infoWrapper.classList.remove("hide")
    });
    
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
    //set values
    planetName.textContent = `${data.bodies[index].name}`;
    planetLatinName.textContent = `${data.bodies[index].latinName}`;
    planetDescription.textContent = data.bodies[index].desc;
    fromSun.textContent = `${data.bodies[index].distance} KM`;
    circumference.textContent = `${data.bodies[index].circumference} KM`;
    maxTemp.textContent = `${data.bodies[index].temp.day}C`;
    minTemp.textContent = `${data.bodies[index].temp.night}C`;
    //Using set constructor to store unique values and stores it in "uniqueMoons" as a new array with doubles removed
    const uniqueMoons = [...new Set(data.bodies[index].moons)];
    console.log("dataMoons", uniqueMoons);
    
    moonList.textContent = uniqueMoons.join(" ").replaceAll(" ", ", ");
    //Changes color on the planet based on clicked index.
    changeColorOnPlanet(index);

}

//Change color on planet using switch-case
const changeColorOnPlanet = (index) => {

  switch(index){
    case 0:
      console.log("index", index);
      sidePlanet.style.background = "rgb(255, 208, 41, 0.94)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(255, 208, 41, 0.3)";
      break
    case 1:
      console.log("index", index);
      sidePlanet.style.background = "rgb(140, 138, 132)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgb(140, 138, 132, 0.3)";
      break
    case 2:
      console.log("index", index);
      sidePlanet.style.background = "rgb(231, 204, 203)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgb(231, 204, 203, 0.3)";
      break
    case 3:
      console.log("index", index);
      sidePlanet.style.background = "rgb(65, 142, 213)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(65, 142, 213, 0.3)";
      break
    case 4:
      console.log("index", index);
      sidePlanet.style.background = "rgb(239, 95, 95)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(239, 95, 95, 0.3)";
      break
    case 5:
      console.log("index", index);
      sidePlanet.style.background = "rgb(226, 148, 104)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(226, 148, 104, 0.3)";
      break
    case 6:
      console.log("index", index);
      sidePlanet.style.background = "rgb(199, 170, 114)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(199, 170, 114, 0.3)";
      break
    case 7:
      console.log("index", index);
      sidePlanet.style.background = "rgb(201, 212, 241)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(201, 212, 241, 0.3)";
      break
    case 8:
      console.log("index", index);
      sidePlanet.style.background = "rgb(122, 145, 167)";
      sidePlanet.style.boxShadow = "56px 0px 70px 100px rgba(122, 145, 167, 0.3)";
      break
  }



}

//Back button
backBtn.addEventListener("click", () => {
  galaxyWrapper.classList.remove("hide")
  infoWrapper.classList.add("hide")
})



