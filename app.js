
// Almacenamos la URL
const apiURL = "https://dummyjson.com/users"


//  Fase de sincronización
window.onload = () => {
    init();
};

//  Iniciación con espera
const init = async () => {
    
    const robots = await getRobots ();
    console.log(robots)
    mappedRobots(robots); 
};

// Convertir de crudo a json (transformación)
    const getRobots = async () => {
    const rawData = await fetch(apiURL);
    const jsonData = await rawData.json();
    return jsonData.users;
  };


  // Mapeo
  const mappedRobots = (robots) => {

    robots.map((robot) => {
      return printRobots({
        
        nombre: robot.firstName,
        imagen: robot.image,
        gender: robot.gender,
        age: robot.age,
        eyeColor: robot.eyeColor,
       

    });
});
};

const printRobots = (robot) => {

    let robotsContainer = document.querySelector('#robots-container');

    robotsContainer.innerHTML += `

    
    <div class="info-container">
    <h2>${robot.nombre}</h2>
    <img src="${robot.imagen}" alt="${robot.nombre}"/>
    <h3>${robot.gender}</h3>
    <p>Age:${robot.age}</p>
    <p>Eyes:${robot.eyeColor}</p>
    </div>
    `;
}


// parallax

$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  } 

/*.figure_container {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #bd0003;
  background-color: #f2d5d6;
  align-content: center;
  opacity: 90%;
  overflow: hidden;
  justify-content: center;
  box-shadow: 2px 2px 4px #bd0003;
  cursor: default;
  transition: all 400ms ease;
}

.figure_container:hover {
  box-shadow: 5px 5px 8px #bd0003;
  transform: translateY(-5%);
}

.figure_container img {
  width: 33%;
  margin-left: 30%;
}*/