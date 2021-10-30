const object = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${object.name} from the ${object.campus} campus !`,
    e: "oO",
    T: "U ",
  })
);
