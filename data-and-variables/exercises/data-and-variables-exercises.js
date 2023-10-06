// Declare and assign the variables below
let shuttleName = "Determination"
let shuttleSpeed = 17500
let distanceToMars = 225000000
let distanceToMoon = 384400
const milesPerKilos = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilos);

// Calculate a space mission below
let milesToMars = (distanceToMars * milesPerKilos);
let hoursToMars = (milesToMars / shuttleSpeed);
let daysToMars = (hoursToMars / 24);

console.log(daysToMars); //332.67857142857144

// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${daysToMars} days to get to Mars.`)

// Calculate a trip to the moon below
let milesToMoon = (distanceToMoon * milesPerKilos);
let hoursToMoon = (milesToMoon / shuttleSpeed)
let daysToMoon = (hoursToMoon / 24)

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} days to get to the Moon.`)