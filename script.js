var user = {
  name: "Aaron",
  email: "amhayslip@gmail.com",
  family: ["Sarah", "Isaiah"],
  speak: function () {
    console.log("Hey! I'm Aaron!");
  }
}

user.family.push("yaya");
console.log(user.family[2]);

user.speak();

var person = {};
person.fName = "Yaniv";
person.lName = "Izaki";
person.greet = function () {
	console.log("Hey there!");
}
person.greet()