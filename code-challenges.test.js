// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item from the array and shuffles the remaining items.", () => {
        expect(shuffle(colors1)).not.toEqual(
            expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffle(colors2)).not.toEqual(
            expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
  //ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
//create a function shuffle that takes in an array
//remove first item form that array use shift method
//shuffle remaining items using Fisher-Yates Algo
//return the shuffled array

//--------------------------------------
//This is interesting the code passes eventhough the array isn't being shuffled. My test may not be set up right.

// const shuffle = (array) => {
//    const shuffledArray = array.shift()
//     return shuffledArray
// }
//----------------------------------------

const shuffle = (array) => {
    const newArray = array.shift()
    for(let i = newArray.length; i < 0; i--){
        var j = math.floor(Math.random() * (i + 1))
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
     return newArray
 }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tallyVotes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    it("that takes in an object that contains up votes and down votes and returns the end tally.", () => {
      expect(tallyVotes(votes1)).toEqual(11)
      expect(tallyVotes(votes2)).toEqual(-31)
    })
  })
  
//ReferenceError: tallyVotes is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
//Create a function tallyVotes that takes in an object
//Subtract downVotes form upVotes
//return the difference

const tallyVotes = (obj) => {
    const tally = obj.upVotes - obj.downVotes
    return tally
} 