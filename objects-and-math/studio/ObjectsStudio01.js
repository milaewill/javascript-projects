

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};





// Code your selectRandomEntry function here:


let finalCrew = [];

let idNumbers = [291, 414, 503, 599, 796, 890];

function selectedRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index]

}
selectedRandomEntry(idNumbers);


let crewIds = [];

while (crewIds.length < 3) {
  let selectedID = selectedRandomEntry(idNumbers)
  if (!crewIds.includes(selectedID)) {
    crewIds.push(selectedID);
  }
}


// Code your buildCrewArray function here:

function buildCrewArray(candidates, selectedID) {
  let selectedCrew = [];
  for (let i = 0; i < finalCrew.length; i++) {
    if (selectedIds.includes(candidates[i].astronautID)) {
      selectedCrew.push(candidates[i]);
    }
  }
  return selectedCrew;
}



// Here are the candidates and the 'animals' array:


// Code your template literal and console.log statements:
let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

let crew = buildCrewArray(animals, finalCrew)

let statement = `${crew[0]}, ${crew[1]} and ${crew[2]} are going to space!`
console.log(statement)