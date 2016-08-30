function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeWhenChunksArrive () {
}

function executeThisCodeAfterFileLoaded () {
  var data = JSON.parse(this.responseText);
  var badges = data.badges;
  var treehouseData = badges.map(function(badge) {
    return `<p>I earned ${badge.name} on ${badge.earned_date}</p>`;
  });
  var treehouseDiv = document.getElementById("treehouse_data");
  treehouseDiv.innerHTML = treehouseData.join("");
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myRequest.open("GET", "https://teamtreehouse.com/alexandersaber.json");
myRequest.send();