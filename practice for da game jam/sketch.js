

class Player {

}



const ROOMDATA = fetch('https://github.com/Consumerofbread56/Practice-for-Gamejam/blob/b14ad7c8ea6cba92fe3527f17b046e07379807e5/practice%20for%20da%20game%20jam/roomData.txt')

.then((response) => {
  if (!response.ok) {
    console.log("There was an error with fetching room data.");
  }
  console.log(response);
   return response.text();
   
  })
 



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
}

function loadRoom() {
 
}