function home() {
  /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "home.html#cont", true);
  xhttp.send();*/
  location.reload();
}

function cloud() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "cloud.txt", true);
  xhttp.send();
}

function bigd() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "bigd.txt", true);
  xhttp.send();
}

function iot() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "iot.txt", true);
  xhttp.send();
}

function mobdev() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "mobdevp.txt", true);
  xhttp.send();
}

function ai() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("cont").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "ai.txt", true);
  xhttp.send();
}
