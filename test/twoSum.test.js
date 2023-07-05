const twoSum = require('../src/twoSum.js');
const expect = require('chai').expect;

function sortedArr(arr, k){
    res = twoSum(arr, k)
    return res.sort((a,b) => a - b)
}


describe('Testing the Two Sum algorithm solution', function(){
    it('It can handle an array with only two integers', function(done){
        expect(sortedArr([1,2], 3)).to.eql([0,1]);
        done();
    })

    it('The solution can handle an array with many integers, but only one solution', function (done){
        expect(sortedArr([1, 2, 3, 6, 8, 5, 10, 20, 21], 41)).to.eql([7,8]);
        done();
    })
})