function toggleSidebar() {
  let sidebar = document.getElementById("sideBar");
  let menuIcon = document.getElementById("menu-icon");

  sidebar.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

// playlist organizer script
let row = 1;
let entry = document.getElementById("submit");

entry.addEventListener("click", displayDetails);

function displayDetails() {
  let name = document.getElementById("name").value;
  let artist = document.getElementById("artist").value;
  let song = document.getElementById("song").value;

  if (!name || !artist || !song) {
    alert("Please fill in all fields");
    return;
  }

  let display = document.getElementById("display");

  let newRow = display.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = artist;
  cell3.innerHTML = song;

  row++;

  // console.log(row);
}

// Play rock song button function

var rockAudio;
function playRockSong() {
  let randomArray = [
    "../media/sound/songs/rock/come_together_Beatles.wav",
    "../media/sound/songs/rock/dear_maria_count_me_in_All_Tim.wav",
    "../media/sound/songs/rock/simple_man_lynard_skynard.wav",
  ];

  let button = document.getElementById("rock-btn");

  if (!rockAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    console.log(randomSong);
    rockAudio = new Audio();
    rockAudio.src = randomSong;
  }

  if (rockAudio.paused) {
    rockAudio.play();
    button.innerHTML = "Pause";
  } else {
    rockAudio.pause();
    button.innerHTML = "Rock";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  rockAudio.addEventListener("play", function () {
    let songName = rockAudio.src.split("/").pop();
    songNameElement.textContent = songName;
  });
}

// Play pop song button function

var popAudio;
function playPopSong() {
  let randomArray = [
    "../media/sound/songs/pop/yourockmyworld-michaeljackson.wav",
    "../media/sound/songs/pop/big_girls_don't_cry_Fergie.wav",
  ];

  let button = document.getElementById("pop-btn");

  if (!popAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    console.log(randomSong);
    popAudio = new Audio();
    popAudio.src = randomSong;
  }

  if (popAudio.paused) {
    popAudio.play();
    button.innerHTML = "Pause";
  } else {
    popAudio.pause();
    button.innerHTML = "Pop";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  popAudio.addEventListener("play", function () {
    let songName = popAudio.src.split("/").pop();
    songNameElement.textContent = songName;
  });
}


