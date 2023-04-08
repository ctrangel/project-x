//Nav bar script

function toggleSidebar() {
  let sidebar = document.getElementById("sideBar");
  let menuIcon = document.getElementById("menu-icon");

  sidebar.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

//Lil night mode script

function nightMode() {
  let nightMode = document.getElementById("night-mode-btn");
  let body = document.getElementsByTagName("body");

  nightMode.classList.toggle("night-mode");
  body.classList.toggle("night-mode");
}

// #####################################playlist organizer script ###############################################
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

// #####################################-Start of Music Files play functions-###############################################

// TODO: I'm sure we can take out all the song functions and make one more dynamic play function I'll start it here
var audio = new Audio();
function playSong(buttonId, songArrayGenre, genreTag) {
  
  
  // let audio = new Audio();
  // console.log(audio);
  let currentGenreTag = genreTag;
  console.log(currentGenreTag);
  let is_playing = false;
  console.log(is_playing);
  // let track_index = 0;

  

// ***************************************ALL SONGS AND GENRES OBJECT****************************************************************
  let musicData = {
    rock: [
      "../media/sound/songs/rock/come_together_Beatles.wav",
      "../media/sound/songs/rock/dear_maria_count_me_in_All_Tim.wav",
      "../media/sound/songs/rock/simple_man_lynard_skynard.wav",
      "../media/sound/songs/rock/some_version_of_Black_Betty-Ram_Jam.mp3",
    ],
    pop: [
      "../media/sound/songs/pop/you_rock_my_world-michael_jackson.wav",
      "../media/sound/songs/pop/big_girls_don't_cry-Fergie.wav",
      "../media/sound/songs/pop/bad_guy-Billie_Eilish.mp3",
      "../media/sound/songs/pop/Mariah_Carey-Obsessed(sped_up_a_lil).mp3",
    ],
    hipHop: [
      "../media/sound/songs/hip-hop/mac_miller_100_grandkids.mp3",
      "../media/sound/songs/hip-hop/You_know_how_we_do_it-Ice_cube.mp3",
      "../media/sound/songs/hip-hop/Gangsta's_Paradise-Coolio.mp3",
      "../media/sound/songs/hip-hop/IGOR'S_THEME-Tyler_The_Creator.mp3",
      "../media/sound/songs/hip-hop/Big_Poppa-Notorious_B.I.G.mp3",
    ],
    jazz: [
      "../media/sound/songs/jazz/Moods - New Horizon (New Horizons EP Out Now).mp3",
      "../media/sound/songs/jazz/Phony Ppl - End Of The Night (Louis Futon Remix) [Free Download].mp3",
      "../media/sound/songs/jazz/Say It.mp3",
    ],
    classical: [
      "../media/sound/songs/classical/Serenade Melancolique - Tchaikovsky.mp3",
      "../media/sound/songs/classical/Tchaikovsky - Andante from Symphony no. 5.mp3",
      "../media/sound/songs/classical/Waltz Of The Rain.mp3",
    ],
    country: [
      "../media/sound/songs/country/E.mp3",
      "../media/sound/songs/country/Kiss My Country Ass.mp3",
      "../media/sound/songs/country/Old Town Road (I Got The Horses In The Back) [Prod YoungKio].mp3",
    ],
    metal: [
      "../media/sound/songs/metal/Slayer - Bloodline.mp3",
      "../media/sound/songs/metal/SLAYER - WhenTheStillnessComes.mp3",
      "../media/sound/songs/metal/Slayer Black Magic.mp3",
    ],
    rnb: [
      "../media/sound/songs/rnb/Grateful.mp3",
      "../media/sound/songs/rnb/SoulFly.mp3",
      "../media/sound/songs/rnb/What You Did (feat Ella Mai).mp3",
    ],
    reggae: [
      "../media/sound/songs/reggae/J Boog - Lets Do It Again.mp3",
      "../media/sound/songs/reggae/Simple Love Song.mp3",
      "../media/sound/songs/reggae/Wade In Your Water.mp3",
    ],
    soul: [
      "../media/sound/songs/soul/A Day To Remember - Since youve Been Gone.mp3",
      "../media/sound/songs/soul/I Never Loved a Man (The Way I Love You).mp3",
      "../media/sound/songs/soul/Lets Stay Together.mp3",
    ],
    funk: [
      "../media/sound/songs/funk/MC Luan Da BS - Quer Acabar Comigo.mp3",
      "../media/sound/songs/funk/Funk_Song.mp3",
      "../media/sound/songs/funk/Funk_Song.mp3",
    ],
    disco: [
      "../media/sound/songs/disco/Glenn Frey - Lovers Moon.mp3",
      "../media/sound/songs/disco/Simpleng Tao -Gloc 9.mp3",
      "../media/sound/songs/disco/So Many Questions (Side A).mp3",
    ],
    spongecore: [
      "../media/sound/songs/spongecore/spongecore_breakpants.mp3",
      "../media/sound/songs/spongecore/Robot_krabs.mp3",
      "../media/sound/songs/spongecore/Look_at_it.mp3",
      "../media/sound/songs/spongecore/Imagination.mp3",
      "../media/sound/songs/spongecore/Boating_school_blues.mp3",
    ],
    dnb: [
      "../media/sound/songs/dnb/Brion Moore - Get Liff.mp3",
      "../media/sound/songs/dnb/FIGHT! (PROD BRAHMAN).mp3",
      "../media/sound/songs/dnb/You Lift Me Higher.mp3",
    ],
    funk_mtg: [
      "../media/sound/songs/funk-mtg/MTG - PRIMEIRA DO ANO Ft MC GOMES BH-- [@djgb031] UDM.mp3",
      "../media/sound/songs/funk-mtg/MTG - TU SENTANDO EU BOLADÃO (DJ AZIN & DJ NEGUIN).mp3",
      "../media/sound/songs/funk-mtg/MTG PILOTO DE FUGA 001- DjLUIZCS(MCS - FABINOSKMC SACIMC G15MC BIANO DO IMPERA).mp3",
    ],
  };

  let songs = musicData[songArrayGenre];
  console.log(songs);
  let button = document.getElementById(buttonId);
  
  let setList = {}; 
  for (let track in songs) { // creates a setlist object with all the loaded songs from the given genre
    setList[track] = songs[track];
  }
  console.log(setList);

  let songNumber = Math.floor(Math.random() * songs.length); // picks a random song from the setlist
  console.log(songNumber);

  let nextBtn = document.getElementById("next-btn");
  nextBtn.onclick = function() {
    songNumber++;
    if (songNumber > songs.length - 1) {
      songNumber = 0;
    }
  }

  audio = new Audio(songs[songNumber]);
  console.log(audio);

  if (audio.paused) {
    audio.play();
    button.innerHTML = "II";
    console.log("it's playing")
  } else {
    audio.pause();
    button.innerHTML = songArrayGenre;
    console.log("it's paused")
  }


  
  






  
  



  






  // console.log(audio);





  // if (!audio || genreTag != currentGenreTag) {
  //   if (songArray && songArray.length > 0 && currentAudio == null) {
  //     audio = new Audio();
  //     audio.src = songArray[Math.floor(Math.random() * songArray.length)];
  //     // console.log(audio.src);
  //     // console.log(songArray);
  //     console.log("is this running?")
  //   } else {
  //     // Reset audio object
  //     audio.pause();
  //     audio.currentTime = 0;
  //   }
  // }

  // // console.log(audio.genre);
  //  currentAudio = audio;

  // if (currentAudio.paused) {
  //   currentAudio.play();
  //   button.innerHTML = "II";
  //   console.log("it's playing")
  // } else if (!currentAudio.paused) {
  //   console.log("it's paused")
  //   currentAudio.pause();
  //   button.innerHTML = songArrayGenre;
  // } else {
  //   currentAudio.pause();
  //   button.innerHTML = songArrayGenre;
  // }

  //display current song file below                         ******This is fine it actually still works***&*&*&*&*
  let songNameElement = document.getElementById("song-name");

  audio.addEventListener("play", function () {
    let songName = audio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  // on play , changes background to moving gradient
  audio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  audio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// #####################################--- Play rock song button function---###############################################

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

  if (rockAudio) {
    if (rockAudio.paused) {
      rockAudio.play();
      button.innerHTML = "II";
    } else {
      rockAudio.pause();
      button.innerHTML = "Rock";
    }
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
    "../media/sound/songs/jazz/Moods - New Horizon (New Horizons EP Out Now).mp3",
    "../media/sound/songs/jazz/Phony Ppl - End Of The Night (Louis Futon Remix) [Free Download].mp3",
    "../media/sound/songs/jazz/Say It.mp3",
  ];

  let button = document.getElementById("jazz-btn");

  if (!jazzAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    jazzAudio = new Audio();
    jazzAudio.src = randomSong;
  }

  if (jazzAudio.paused) {
    jazzAudio.play();
    button.innerHTML = "II";
  } else {
    jazzAudio.pause();
    button.innerHTML = "Jazz"; // btn label bug was here fixed it
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
    "../media/sound/songs/classical/Serenade Melancolique - Tchaikovsky.mp3",
    "../media/sound/songs/classical/Tchaikovsky - Andante from Symphony no. 5.mp3",
    "../media/sound/songs/classical/Waltz Of The Rain.mp3",
  ];

  let button = document.getElementById("classical-btn");

  if (!classicalAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
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
    "../media/sound/songs/country/E.mp3",
    "../media/sound/songs/country/Kiss My Country Ass.mp3",
    "../media/sound/songs/country/Old Town Road (I Got The Horses In The Back) [Prod YoungKio].mp3",
  ];

  let button = document.getElementById("country-btn");

  if (!countryAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
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
    "../media/sound/songs/metal/Slayer - Bloodline.mp3",
    "../media/sound/songs/metal/SLAYER - WhenTheStillnessComes.mp3",
    "../media/sound/songs/metal/Slayer Black Magic.mp3",
  ];

  let button = document.getElementById("metal-btn");

  if (!metalAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
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
    "../media/sound/songs/rnb/Grateful.mp3",
    "../media/sound/songs/rnb/SoulFly.mp3",
    "../media/sound/songs/rnb/What You Did (feat Ella Mai).mp3",
  ];

  let button = document.getElementById("rnb-btn");

  if (!rnbAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
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

var reggaeAudio;
function playReggaeSong() {
  let randomArray = [
    "../media/sound/songs/reggae/J Boog - Lets Do It Again.mp3",
    "../media/sound/songs/reggae/Simple Love Song.mp3",
    "../media/sound/songs/reggae/Wade In Your Water.mp3",
  ];

  let button = document.getElementById("reggae-btn");

  if (!reggaeAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    reggaeAudio = new Audio();
    reggaeAudio.src = randomSong;
  }

  if (reggaeAudio.paused) {
    reggaeAudio.play();
    button.innerHTML = "II";
  } else {
    reggaeAudio.pause();
    button.innerHTML = "Reggae";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  reggaeAudio.addEventListener("play", function () {
    let songName = reggaeAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  reggaeAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  reggaeAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Soul song button function #########################################################

var soulAudio;
function playSoulSong() {
  let randomArray = [
    "../media/sound/songs/soul/A Day To Remember - Since youve Been Gone.mp3",
    "../media/sound/songs/soul/I Never Loved a Man (The Way I Love You).mp3",
    "../media/sound/songs/soul/Lets Stay Together.mp3",
  ];

  let button = document.getElementById("soul-btn");

  if (!soulAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    soulAudio = new Audio();
    soulAudio.src = randomSong;
  }

  if (soulAudio.paused) {
    soulAudio.play();
    button.innerHTML = "II";
  } else {
    soulAudio.pause();
    button.innerHTML = "Soul";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  soulAudio.addEventListener("play", function () {
    let songName = soulAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  soulAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  soulAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Funk song button function #########################################################

var funkAudio;
function playFunkSong() {
  let randomArray = [
    "../media/sound/songs/funk/MC Luan Da BS - Quer Acabar Comigo.mp3",
    "../media/sound/songs/funk/Funk_Song.mp3",
    "../media/sound/songs/funk/Funk_Song.mp3",
  ];

  let button = document.getElementById("funk-btn");

  if (!funkAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    funkAudio = new Audio();
    funkAudio.src = randomSong;
  }

  if (funkAudio.paused) {
    funkAudio.play();
    button.innerHTML = "II";
  } else {
    funkAudio.pause();
    button.innerHTML = "Funk";
  }
  //display current song file below
  let songNameElement = document.getElementById("song-name");

  funkAudio.addEventListener("play", function () {
    let songName = funkAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  funkAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  funkAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Disco song button function #########################################################

var discoAudio;
function playDiscoSong() {
  let randomArray = [
    "../media/sound/songs/disco/Glenn Frey - Lovers Moon.mp3",
    "../media/sound/songs/disco/Simpleng Tao -Gloc 9.mp3",
    "../media/sound/songs/disco/So Many Questions (Side A).mp3",
  ];

  let button = document.getElementById("disco-btn");

  if (!discoAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    discoAudio = new Audio();
    discoAudio.src = randomSong;
  }

  if (discoAudio.paused) {
    discoAudio.play();
    button.innerHTML = "II";
  } else {
    discoAudio.pause();
    button.innerHTML = "Disco";
  }

  let songNameElement = document.getElementById("song-name");

  discoAudio.addEventListener("play", function () {
    let songName = discoAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  discoAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  discoAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play Spongecore song button function #########################################################

var spongecoreAudio;
function playSpongecoreSong() {
  let randomArray = [
    "../media/sound/songs/spongecore/spongecore_breakpants.mp3",
    "../media/sound/songs/spongecore/Robot_krabs.mp3",
    "../media/sound/songs/spongecore/Look_at_it.mp3",
    "../media/sound/songs/spongecore/Imagination.mp3",
    "../media/sound/songs/spongecore/Boating_school_blues.mp3",
  ];

  let button = document.getElementById("spongecore-btn");

  if (!spongecoreAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    spongecoreAudio = new Audio();
    spongecoreAudio.src = randomSong;
  }

  if (spongecoreAudio.paused) {
    spongecoreAudio.play();
    button.innerHTML = "II";
  } else {
    spongecoreAudio.pause();
    button.innerHTML = "Spongecore";
  }

  let songNameElement = document.getElementById("song-name");

  spongecoreAudio.addEventListener("play", function () {
    let songName = spongecoreAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  spongecoreAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  spongecoreAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play DnB song button function #########################################################

var dnbAudio;
function playDnbSong() {
  let randomArray = [
    "../media/sound/songs/dnb/Brion Moore - Get Liff.mp3",
    "../media/sound/songs/dnb/FIGHT! (PROD BRAHMAN).mp3",
    "../media/sound/songs/dnb/You Lift Me Higher.mp3",
  ];

  let button = document.getElementById("dnb-btn");

  if (!dnbAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    dnbAudio = new Audio();
    dnbAudio.src = randomSong;
  }

  if (dnbAudio.paused) {
    dnbAudio.play();
    button.innerHTML = "II";
  } else {
    dnbAudio.pause();
    button.innerHTML = "DnB";
  }

  let songNameElement = document.getElementById("song-name");

  dnbAudio.addEventListener("play", function () {
    let songName = dnbAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  dnbAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  dnbAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// ######################################### Play funk mtg song button function #########################################################

var funkMtgAudio;
function playFunkmtgSong() {
  let randomArray = [
    "../media/sound/songs/funk-mtg/MTG - PRIMEIRA DO ANO Ft MC GOMES BH-- [@djgb031] UDM.mp3",
    "../media/sound/songs/funk-mtg/MTG - TU SENTANDO EU BOLADÃO (DJ AZIN & DJ NEGUIN).mp3",
    "../media/sound/songs/funk-mtg/MTG PILOTO DE FUGA 001- DjLUIZCS(MCS - FABINOSKMC SACIMC G15MC BIANO DO IMPERA).mp3",
  ];

  let button = document.getElementById("funkmtg-btn");

  if (!funkMtgAudio) {
    let randomSong =
      randomArray[Math.floor(Math.random() * randomArray.length)];
    funkMtgAudio = new Audio();
    funkMtgAudio.src = randomSong;
  }

  if (funkMtgAudio.paused) {
    funkMtgAudio.play();
    button.innerHTML = "II";
  } else {
    funkMtgAudio.pause();
    button.innerHTML = "Funk MTG";
  }

  let songNameElement = document.getElementById("song-name");

  funkMtgAudio.addEventListener("play", function () {
    let songName = funkMtgAudio.src.slice(0, -4).split("/").pop();
    songNameElement.textContent = songName;
  });

  funkMtgAudio.addEventListener("play", function changeBackground() {
    let bckGround = document.getElementById("genre-list");
    bckGround.className = "on-play";
  });

  funkMtgAudio.addEventListener("pause", function revertBackground() {
    let originalBckGround = document.getElementById("genre-list");
    originalBckGround.classList.remove("on-play");
  });
}

// TODO: add volume slider

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
