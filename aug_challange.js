const assert = require('assert')
/*
Author: AeronChamara
Requirements: 
Create a function that takes a string as an input, 
removes duplicates repeating characters
 and returns a data structure as follows 

# Assumptions & Improvements:
- Used the node.js assert for testing the outcome
- I have used the EC5 features. 
- Using Typescript will help for type safety


# Reference: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

*/

const testDataset_1 = {
    input: 'aaabbbcccdddddddddeeefggggghhh',
    output: 'abcdefgh',
    charactersRemoved: 22
}

const testDataset_2 = {
    input: 'aaabbbaaa',
    output: 'aba',
    charactersRemoved: 6
}

// test against the test data.
assert.deepStrictEqual(produceJSONData(testDataset_1.input), testDataset_1)
assert.deepStrictEqual(produceJSONData(testDataset_2.input), testDataset_2)


/*
- Efficienty - big-O O(N) 
- Memory usage- 2 array object
*/
function produceJSONData(inputString) {

    if (typeof inputString === "string") {

        // convert input string into an array
        const inputArray = inputString.split('')

        // reducer function to remove repeating/duplicate characters 
        const removeDuplicates = (accumulator, currentValue) => {
            // removing duplicates
            //return accumulator.includes(currentValue) ? accumulator : accumulator.concat(currentValue)

            // removing repeating characters 
            return accumulator[accumulator.length - 1] === (currentValue) ? accumulator : accumulator.concat(currentValue)
        }

        // declared to calculate the number of charactes removed
        const outputArray = inputArray.reduce(removeDuplicates, [])

        // produce the output JSON data structure
        const jsonOutput = {
            input: inputString,
            output: outputArray.join(''),
            charactersRemoved: inputArray.length - outputArray.length
        }
        console.debug(`printing the output : ${JSON.stringify(jsonOutput)}`)
        return jsonOutput
    } else {
        console.error("invalid input, value should be string!")
    }
}
