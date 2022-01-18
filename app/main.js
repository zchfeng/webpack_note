// var greeter = require("./Greeter.js"); ES5
import greeter from "./Greeter.js"; //ES6
require("./main.css");
var img1 = document.createElement("img");
img1.src = require("./logo.jpg");
document.body.appendChild(img1);
document.getElementById("root").appendChild(greeter());
