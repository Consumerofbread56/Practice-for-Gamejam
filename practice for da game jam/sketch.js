

class Player {

}

let roomData;
let decompedRooms;
let roomsReady = false;
let cellSize;
let heightOfScreen;


  fetch('https://raw.githubusercontent.com/Consumerofbread56/Practice-for-Gamejam/refs/heads/main/practice%20for%20da%20game%20jam/roomData.txt')
    .then(response => {
    if (!response.ok) {
      console.log("There was an error with fetching room data.");
    }
    
    return response.text();

    })
    .then(data => {
      roomData = data;
      roomData = roomData.split("|");
      console.log(roomData);
      decompileRoomData();
    })

   .catch (error => {
    console.log("There was a separate error or sm idk", error);
  })


  


 



function setup() {
  createCanvas(windowWidth, windowHeight);
  heightOfScreen = windowHeight;

  
  
  
  
  
}

function draw() {
  if (roomsReady === true) {

  }

}

function drawCurrentRoom(roomID) {
  cellSize = heightOfScreen/decompedRooms.length;
  for (let x = 0; x < decompedRooms.length; x++) {
    for (let y = 0; y < decompedRooms[roomID].length; y++) {
      let colourChosen;
      if (decompedRooms[roomID])
      square
    }
  }
}

function loadRoom() {
 
}

function decompileRoomData(){
  let newRooms = [];
  let newChar;
  
  for (let x = 0; x < roomData.length; x++) {
    
    let newRoom = [];
    for (let y = 0; y < roomData[x].length; y++) {
      newChar = (roomData[x][y]);
      if (newChar === "1" || newChar === "0" || newChar === "2") {
        newRoom.push(Number(newChar));
      }
    }
    newRooms.push(newRoom);
  }
  roomsReady = true;
  decompedRooms = newRooms;
}