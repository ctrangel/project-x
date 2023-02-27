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
    "../media/sound/songs/rock/some_version_of_Black_Betty-Ram_Jam.mp3"
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
    button.innerHTML = "II";
  } else {
    rockAudio.pause();
    button.innerHTML = "Rock";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  rockAudio.addEventListener("play", function () {
    let songName = rockAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });
}

// Play pop song button function

var popAudio;
function playPopSong() {
  let randomArray = [
    "../media/sound/songs/pop/you_rock_my_world-michael_jackson.wav",
    "../media/sound/songs/pop/big_girls_don't_cry-Fergie.wav",
    "../media/sound/songs/pop/bad_guy-Billie_Eilish.mp3",
    "../media/sound/songs/pop/Mariah_Carey-Obsessed(sped_up_a_lil).mp3"
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
    button.innerHTML = "II";
  } else {
    popAudio.pause();
    button.innerHTML = "Pop";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  popAudio.addEventListener("play", function () {
    let songName = popAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });
}

// play hip hop song button function

var hiphopAudio;
function playHipHopSong() {
  let randomArray = [
    "../media/sound/songs/hip-hop/mac_miller_100_grandkids.mp3",
    "../media/sound/songs/hip-hop/You_know_how_we_do_it-Ice_cube.mp3",
    "../media/sound/songs/hip-hop/Gangsta's_Paradise-Coolio.mp3",
    "../media/sound/songs/hip-hop/IGOR'S_THEME-Tyler_The_Creator.mp3",
    "../media/sound/songs/hip-hop/Big_Poppa-Notorious_B.I.G.mp3",
    

  ];

  let button = document.getElementById("hip-hop-btn");

  if (!hiphopAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    hiphopAudio = new Audio();
    hiphopAudio.src = randomSong;
  }

  if (hiphopAudio.paused) {
    hiphopAudio.play();
    button.innerHTML = "II";
  } else {
    hiphopAudio.pause();
    button.innerHTML = "Hip-Hop"; // btn label bug was here fixed it
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  hiphopAudio.addEventListener("play", function () {
    let songName = hiphopAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });
  
}
/* TODO: add rest of buttons and add css class function to make cool border animation when song is playing
         add js function to better display song names instead of the path names
*/

      
