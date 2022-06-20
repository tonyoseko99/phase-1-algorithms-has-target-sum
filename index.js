function hasTargetSum(array, target) {
  sumIsTarget = false;

  // For each item in array
  for (let i = 0; i < array.length; i++) {

    // For each item in array (ii) after the compared item in array (i)
    // Numbers behind i are not compared with i, for optimization
    for (let ii = i + 1; ii < array.length; ii++) {
      // Sets sumIsTarget to true forever if sum of numbers matches target at
      // least once.
      sumIsTarget = array[i] + array[ii] === target || sumIsTarget;
    }
  }
  return sumIsTarget;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
