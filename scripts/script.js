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


