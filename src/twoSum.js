function twoSum(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in hash) {
            return [i, hash[diff]]
        }
        else {
            hash[nums[i]] = i
        }
    }

}


if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: [0,1]");
    console.log("=>", twoSum([3, 5, 6, 12], 8) );
  
    console.log("");
  
    console.log("Expecting: [0,3]");
    console.log("=>", twoSum([3, 5, 6, 12], 15));

  }

module.exports = twoSum