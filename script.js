let pageLoad = new XMLHttpRequest();
pageLoad.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let einstein = JSON.parse(this.responseText);
        document.getElementById("einsteinName").innerHTML = "<p>Name: " + einstein.name + "</p>";
        document.getElementById("einsteinBirthDay").innerHTML = "<p>Birthdate: " + einstein.birthday + "</p>";
    }
}
pageLoad.open("GET", "einstein.json", true);
pageLoad.send();

function loadBio() {   
    let loadBio = new XMLHttpRequest();
    loadBio.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let einstein =  JSON.parse(this.responseText);
            document.getElementById("einsteinBio").innerHTML = "<p>" + einstein.bio + "</p>";
            document.getElementById("learn").innerHTML = "";
        } else {
            document.getElementById("einsteinBio").innerHTML = "Error";
        }
    }
    loadBio.open("GET", "einstein.json", true);
    loadBio.send();
}