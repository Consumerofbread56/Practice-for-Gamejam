

class Player {

}

let roomData;
let array = [];

fetch('https://raw.githubusercontent.com/Consumerofbread56/Practice-for-Gamejam/refs/heads/main/practice%20for%20da%20game%20jam/roomData.txt')
    .then(response => {
    if (!response.ok) {
      console.log("There was an error with fetching room data.");
    }
    
    return response.text();

    })
    .then(data => {
      roomData = data;
    })

   .catch (error => {
    console.log("There was a separate error or sm idk");
  })

  roomData = roomData.split('\n');


 



function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(roomData);
}

function draw() {
  background(220);
}

function loadRoom() {
 
}
