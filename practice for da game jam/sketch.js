

class Player {

}

roomVals = getRoomData();

async function getRoomData() {
  try {
    const response = fetch('https://raw.githubusercontent.com/Consumerofbread56/Practice-for-Gamejam/refs/heads/main/practice%20for%20da%20game%20jam/roomData.txt')
    if (!response.ok) {
      console.log("There was an error with fetching room data.");
    }
  
    console.log(response.text());
    const ROOMDATA = await response.text();
    return ROOMDATA;

  } catch (error) {
    console.log("There was a separate error or sm idk");
  }
    
}







 



function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(roomVals);
}

function draw() {
  background(220);
}

function loadRoom() {
 
}