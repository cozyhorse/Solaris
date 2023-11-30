
const planetName = document.querySelector("#planet-name");
const planetLatinName = document.querySelector(".planet-latin-name");
const planetDescription = document.querySelector(".description");
const planetCircumference = document.querySelector(".circumference");
const planetFromSun = document.querySelector(".from-sun");
const planetMaxTemp = document.querySelector(".max-temp");
const planetMinTemp = document.querySelector(".min-temp");
const planetMoonList = document.querySelector(".moons");
const planetBackBtn = document.querySelector("#back")
const sidePlanet = document.querySelector(".sideplanet")
let planetIndex = ""
console.log("planetIndex", planetIndex);

planetName.textContent = localStorage.getItem("planet-name")
planetLatinName.textContent = localStorage.getItem("planet-latin-name")
planetDescription.textContent = localStorage.getItem("planet-description")
planetCircumference.textContent = localStorage.getItem("planet-circumference")
planetFromSun.textContent = localStorage.getItem("planet-from-sun")
planetMaxTemp.textContent = localStorage.getItem("planet-max-temp")
planetMinTemp.textContent = localStorage.getItem("planet-min-temp")
planetMoonList.textContent = localStorage.getItem("planet-moons")
//convert to number
planetIndex = Number(localStorage.getItem("planet-index"));
console.log("planetIndexUpdate", planetIndex);

//Change color on "side planet" based on index number
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

//Change "side planet" function
changeColorOnPlanet(planetIndex);

//Go back to index.html and clear localStorage
planetBackBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "../index.html"
})
