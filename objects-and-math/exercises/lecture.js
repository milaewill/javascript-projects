// let gerard = ["Gerard", "Teacher", 32, true];

// let gerardObject = {
//     name: "Gerard",
//     occupation: "Teacher:",
//     age: 32,
//     isReallyTall: true,
//     // greet: function () {
//     // return `Hello ${this.name}!`;
//     //}
// };

// console.log(gerard[0]);
// console.log(gerardObject.name);
// console.log(gerardObject["name"]);

// //function greetFunction(name) {
// //  return `Hello, ${name}`
// //}

// //console.log(gerardObject.greet());

// for (let key in gerardObject) {   //key is variable
//     console.log(key);
//     console.log(gerardObject[key]);
//     console.log
//}






// let bananaCat = {
//     name: null,
//     species: "Banana Cat",
//     weight: null,
//     archNemesis: "Apple Dog",
//     specialTrait: "very yellow"
// };

// bananaCat.name = "Bananya"
// console.log(bananaCat.name)






// let output = [];
// let students = {
//     names: ["Gerrard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
//     scores: ["100", "95", "74", "83", "91"]
// };

// for (let i = 0; i < students["names"].length; i++) {
//     let output = "";

//     for (items in students) {
//         output += `${students[items][i]}:`
//     }
//     console.log(output.slice(0, -2));

// }

console.log(Math.PI)
console.log(Math.abs(-4))

console.log(Math.random())

for (let i = 0; i < 100; i++) {
    console.log(Math.random())
}


console.log(Math.round(1.4))
console.log(Math.floor(1.4))
console.log(Math.ceil(1.4))
console.log(Math.trunc(1.4))


function rolld20(numIterations) {
    for (let i = 0; i < numIterations; i++) {
        console.log(Math.ceil(Math.random) * 20);
    }
}

rolld20(11);