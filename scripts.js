
var color = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = "";
for (var i = 0; i < reindeer.length; i++) {
    hohohoElement += color[i] + " " + reindeer[i] + "</br>";
}

document.getElementById("reindeer").innerHTML = hohohoElement;









