// Instructions
// - Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
// - Have a prompt that adds your last name to the array
// - Have an output that sorts the names alphabetically
// - Have an output that tells you what is the position of your name in the sorted array
// - Have an output that Uppercase's all names

const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];

const myname = "May";

const addmyname = names.push(myname);

const console.log(names);

const orderedAlphabetically = names.sort();

console.log('Names ordered alphabetically :):' names);

let positionOfMyName = null;

for (let i = 0; i < orderedAlphabetically.length; i++) {
    if (orderedAlphabetically[i] === myname) {
        positionOfMyname = i;
    }
}

console.log('{myname} is index ${positionOfMyName}');








// for (let i = 0; i < array.length; i++) {
//   const element = array[i]

//   // Write code here
// } 

// const listOfDestinations [Paris, Rome, London, Madrid, New York]

// const listOfNames [Mason, Marcora, Rico, Neves, Ivanov]

// const myName = "May"

// const addMyName = listOfNames.push('myName')
// console.log(`Here's the list of names with my name added: $(addMyName)`)

// const orderAZ = listOfNames.sort()

// console.log(`Here's the list of names ordered alphabetically: $(orderAZ)`)

// let positionOfMyName = null

// for (let i=0; i < orderAZ.length; i++) {
//     if (orderAZ[i] === myName)
//     positionOfMyName = i;

// }



