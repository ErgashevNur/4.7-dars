// UYGA VAZIFA

// 26
// function num(a, b, c) {
//   if (a == 4) {
//     console.log("Folse");
//   } else {
//     console.log("True");
//   }
//   if (b == 9) {
//     console.log("Folse");
//   } else {
//     console.log("True");
//   }
//   if (c == 7) {
//     console.log("True");
//   } else {
//     console.log("Folse");
//   }
//   return a, b, c;
// }
// console.log(num(4, 9, 7));

// 27
// function num() {
//   let a = prompt("Son kiriting");
//   let b = prompt("Son kiriting");

//   if (a == b) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   return a, b;
// }
// console.log(num());

// 28
// function booleanString(string) {
//   return string.toString();
// }
// console.log(booleanString(true));
// console.log(booleanString(false));

// 29
// const num = (qiymat) => qiymat;
// console.log(num(10));

// 30
// const Frame = (minut, frame) => minut * 60 * frame;
// console.log(Framerame(5, 24));

// 31
function num(a, b, amal) {
  if (amal == "+") {
    console.log(a + b);
  } else if (amal == "-") {
    console.log(a - b);
  } else if (amal == "*") {
    console.log(a * b);
  } else if (amal == "/") {
    console.log(a / b);
  }
}
console.log(num(10, 20, "+"));
