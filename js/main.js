// var number = prompt("sonni kiriting");
// if (number % 2 == 0) {
//     console.log("Juft");
// }
// else {
//     console.log("Toq");
// }
var elgender = document.querySelector(".gender ");
var elName = document.querySelector(".name");

var userGender = prompt("Gender kiriting (male/famale):");
var userName = prompt("Ismingizni kiriting");
if (userGender == "male")
{
    elgender.textContent = "Janob"

}
    else
{
   elgender.textContent = "Xonim"
}
elName.textContent = userName;

