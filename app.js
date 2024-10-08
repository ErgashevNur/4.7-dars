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
// function num(a, b, amal) {
//   if (amal == "+") {
//     console.log(a + b);
//   } else if (amal == "-") {
//     console.log(a - b);
//   } else if (amal == "*") {
//     console.log(a * b);
//   } else if (amal == "/") {
//     console.log(a / b);
//   }
// }
// console.log(num(10, 20, "+"));

// 32
// function num() {
//   let a = prompt("Son kiriting");
//   let b = prompt("Son kiriting");

//   if (a + b == 10) {
//     console.log("True");
//   } else if ((a = 10)) {
//     console.log("True");
//   } else if ((b = 10)) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   return a, b;
// }
// console.log(num());

// 33
// function kilometr() {
//   let km = prompt("Son kiriting");

//   return km * 10;
// }
// console.log(kilometr());

// 34
// function num() {
//   let a = prompt("Son kiriting");
//   let b = prompt("Son kiriting");

//   if (a < b) {
//     console.log(b, "Shu son kotta");
//   } else if (a > b) {
//     console.log(a, "Ushbu son kattaroq");
//   } else {
//     console.log("Ikkala son ham teng");
//   }
// }
// console.log(num());

// 35
// function num() {
//   let a = prompt("Son kiriting");
//   let b = prompt("Son kiriting");

//   return [a, b];
// }
// console.log(num());

// 36
// function str() {
//   let a = prompt("String kiriting");
//   let b = prompt("String kiriting");

//   return a.length === b.length;
// }
// console.log(str());

// 37
// function str() {
//   let a = prompt("String kiriting");

//   return a === "";
// }
// console.log(str());

// 38
// function num() {
//   let a = prompt("Son kiriting");

//   return a % 5 == 0;
// }
// console.log(num());

// 39
// function num() {
//   let a = prompt("Son kiriting");

//   return a % 100 == 0;
// }
// console.log(num());

// 40
// function str() {
//   let a = prompt("String kiriting");

//   return a.length;
// }
// console.log(str());

// 41
// function num() {
//   let a = prompt("Son kiriting");
//   let b = prompt("Son kiriting");
//   return a % b == 0;
// }
// console.log(num());

// 42
// function num() {
//   let a = prompt("Son kiriting");

//   return parseInt(a);
// }
// console.log(num());

// 43
// function num() {
//   let boyi = prompt("Bo'yini kiriting");
//   let eni = prompt("Enini kiriting");

//   if (boyi <= 0 || eni <= 0) {
//     return -1;
//   }

//   return boyi * eni;
// }
// console.log(num());

// 44
// function nam() {
//   let ism = prompt("Ismingizni kiriting ");
//   let fam = prompt(" Familiyangizni kiriting");

//   return "Salom " + fam + " " + ism;
// }
// console.log(nam());

// 45
// function str(soz) {
//   if (soz) {
//     return "sad days";
//   } else {
//     return "it's a good day";
//   }
// }
// console.log(str(true));
// console.log(str(false));

// 46
// function num(massiv, son) {
//   if (son >= 0 && son <= massiv.length) {
//     return massiv.slice(son);
//   }
// }
// console.log(num([1, 2, 3, 4, 5], 2));
// console.log(num(["a", "b", "c", "d"], 1));
// console.log(num([10, 20, 30, 40], 0));

// 47
// function voice() {
//   let up = prompt("Nechi kishi ovoz berdi");
//   let down = prompt("Nechi kishi ovoz bermadi");

//   return up - down;
// }
// console.log(voice());

// 48
// function num() {
//   let son = prompt("Son kiriting");

//   return -Math.abs(son);
// }
// console.log(num());

// 49
// function num() {
//   let a = prompt("Son kiriting");

//   for (let i = a; i >= 0; i--) {
//     console.log(i);
//   }
// }
// console.log(num());

// 50
// function kino() {
//   let yosh = prompt("Yoshingiz nechida");
//   let parents = prompt("Ota-Onangiz bilan birgamisiz");

//   if ((yosh >= 15 && parents == "Ha") || "ha" || "HA") {
//     return "True";
//   } else {
//     return "False";
//   }
// }
// console.log(kino());

// 51
// function num(arr) {
//   return arr.map(function (element) {
//     return element + 1;
//   });
// }
// console.log(num([0, 1, 2, 3, 4]));

// 52
// function fName() {
//   let fname = prompt("Ismingizni kiriting");

//   return `\`${fname}\``;
// }
// console.log(fName());

// 53

// 54
// function uzun() {
//   let a = prompt("String kiriting");
//   if (a.length % 2 == 0) {
//     return "True";
//   } else {
//     return "False";
//   }
// }
// console.log(uzun());
