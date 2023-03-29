//Nav bar script

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
}
let input = document.getElementsByClassName("input").value;
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let audio = new Audio("../media/sound/sfx/vine_boomst.wav");
  console.log(input);
  if (input === "") {
    return false;
  } else {
    audio.play();
  }
});

// Play rock song button function
// TODO: get rid of the random array thing, just figure out how to just cycle through the array

var rockAudio;
function playRockSong() {
  let randomArray = [
    "../media/sound/songs/rock/come_together_Beatles.wav",
    "../media/sound/songs/rock/dear_maria_count_me_in_All_Tim.wav",
    "../media/sound/songs/rock/simple_man_lynard_skynard.wav",
    "../media/sound/songs/rock/some_version_of_Black_Betty-Ram_Jam.mp3",
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
  // on play , changes background to moving gradient
  rockAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  rockAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

//###################################### Play pop song button function #########################################################

var popAudio;
function playPopSong() {
  let randomArray = [
    "../media/sound/songs/pop/you_rock_my_world-michael_jackson.wav",
    "../media/sound/songs/pop/big_girls_don't_cry-Fergie.wav",
    "../media/sound/songs/pop/bad_guy-Billie_Eilish.mp3",
    "../media/sound/songs/pop/Mariah_Carey-Obsessed(sped_up_a_lil).mp3",
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

  popAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  popAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ##############################play hip hop song button function#####################################################
//hip hop
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
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
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

  hiphopAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  hiphopAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play"); // learned a new method here
    // I am enamored, somehow this actually worked first time trying it.
  });
}

//###################################### Play Jazz song button function #########################################################

var jazzAudio;
function playJazzSong() {
  let randomArray = [
    "../media/sound/songs/jazz/Chet_Baker_-_My_Funny_Valentine.mp3",
    "../media/sound/songs/jazz/Chet_Baker_-_My_Funny_Valentine.mp3",
    "../media/sound/songs/jazz/Chet_Baker_-_My_Funny_Valentine.mp3",
    "../media/sound/songs/jazz/Chet_Baker_-_My_Funny_Valentine.mp3",
  ];

  let button = document.getElementById("jazz-btn");

  if (!jazzAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    jazzAudio = new Audio();
    jazzAudio.src = randomSong;
  }

  if (jazzAudio.paused) {
    jazzAudio.play();
    button.innerHTML = "II";
  } else {
    jazzAudio.pause();
    button.innerHTML = "Jazz";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  jazzAudio.addEventListener("play", function () {
    let songName = jazzAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  jazzAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  jazzAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Classical song button function #########################################################

var classicalAudio;
function playClassicalSong() {
  let randomArray = [
    "../media/sound/songs/classical/Beethoven_-_Moonlight_Sonata.mp3",
    "../media/sound/songs/classical/Beethoven_-_Moonlight_Sonata.mp3",
    "../media/sound/songs/classical/Beethoven_-_Moonlight_Sonata.mp3",
    "../media/sound/songs/classical/Beethoven_-_Moonlight_Sonata.mp3",
  ];

  let button = document.getElementById("classical-btn");

  if (!classicalAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    classicalAudio = new Audio();
    classicalAudio.src = randomSong;
  }

  if (classicalAudio.paused) {
    classicalAudio.play();
    button.innerHTML = "II";
  } else {
    classicalAudio.pause();
    button.innerHTML = "Classical";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  classicalAudio.addEventListener("play", function () {
    let songName = classicalAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  classicalAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  classicalAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Country song button function #########################################################


var countryAudio;
function playCountrySong() {
  let randomArray = [
    "../media/sound/songs/country/Johnny_Cash_-_Ring_of_Fire.mp3",
    "../media/sound/songs/country/Johnny_Cash_-_Ring_of_Fire.mp3",
    "../media/sound/songs/country/Johnny_Cash_-_Ring_of_Fire.mp3",
    "../media/sound/songs/country/Johnny_Cash_-_Ring_of_Fire.mp3",
  ];

  let button = document.getElementById("country-btn");

  if (!countryAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    countryAudio = new Audio();
    countryAudio.src = randomSong;
  }

  if (countryAudio.paused) {
    countryAudio.play();
    button.innerHTML = "II";
  } else {
    countryAudio.pause();
    button.innerHTML = "Country";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  countryAudio.addEventListener("play", function () {
    let songName = countryAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  countryAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  countryAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Metal song button function #########################################################

var metalAudio;
function playMetalSong() {
  let randomArray = [
    "../media/sound/songs/metal/Metallica_-_Enter_Sandman.mp3",
    "../media/sound/songs/metal/Metallica_-_Enter_Sandman.mp3",
    "../media/sound/songs/metal/Metallica_-_Enter_Sandman.mp3",
    "../media/sound/songs/metal/Metallica_-_Enter_Sandman.mp3",
  ];
  
  let button = document.getElementById("metal-btn");

  if (!metalAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    metalAudio = new Audio();
    metalAudio.src = randomSong;
  }

  if (metalAudio.paused) {
    metalAudio.play();
    button.innerHTML = "II";
  } else {
    metalAudio.pause();
    button.innerHTML = "Metal";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  metalAudio.addEventListener("play", function () {
    let songName = metalAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  metalAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  metalAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play RnB song button function #########################################################

var rnbAudio;
function playRnBSong() {
  let randomArray = [
    "../media/sound/songs/rnb/Drake_-_Hotline_Bling.mp3",
    "../media/sound/songs/rnb/Drake_-_Hotline_Bling.mp3",
    "../media/sound/songs/rnb/Drake_-_Hotline_Bling.mp3",
    "../media/sound/songs/rnb/Drake_-_Hotline_Bling.mp3",
  ];

  let button = document.getElementById("rnb-btn");

  if (!rnbAudio) {
    let randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
    rnbAudio = new Audio();
    rnbAudio.src = randomSong;
  }

  if (rnbAudio.paused) {
    rnbAudio.play();
    button.innerHTML = "II";
  } else {
    rnbAudio.pause();
    button.innerHTML = "RnB";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  rnbAudio.addEventListener("play", function () {
    let songName = rnbAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  rnbAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  rnbAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Reggae song button function #########################################################












/* TODO: add rest of buttons and add css class function to make cool border animation when song is playing
         add js function to better display song names instead of the path names
*/




playlistForm.addEventListener("submit", function (event) {
  let arr = [
    "Love that song",
    "I guess",
    "interesting choice of music",
    "You like this song?",
    "This song is trash",
  ];
  let random = Math.floor((Math.random() * arr.length) % arr.length);
  alert(arr[random]);
});
