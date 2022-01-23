"use strict";

// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("Error");
// }

const num = 500;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("Mnogo");
// } else {
//   console.log("Ok!");
// }

// num === 50 ? console.log("Ok!") : console.log("Error");

switch (num) {
  case 49:
    console.log("No");
    break;
  case 100:
    console.log("No");
    break;
  case 50:
    console.log("good");
    break;
  default:
    console.log("No No No");
    break;
}
