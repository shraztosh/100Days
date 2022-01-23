const heading = ["Hii Babe!!","Hi Shradhanjali","Hi Shrazz","Hi Cutu","Hi Sexy","Hey Baby-dove","Hey Maya"];
var i = Math.floor(Math.random()*heading.length);
var greeting = heading[i];
i = 0;
function greet(){
    if (i < greeting.length) {
    document.getElementById("heading").innerHTML += greeting.charAt(i);
    i++;
    setTimeout(greet, 300);
    }
}
