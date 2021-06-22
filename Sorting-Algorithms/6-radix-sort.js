// works on numbers, never makes comparisons.
//group the numbers into buckets based on indeces based on right digit.
//process is repeated for second last digit and so on.
// process is repeated (max length number) times

// getDigit(num,i) helper method to return digit at particular index of a number to place it in suitable bucket.
// digitCount(num) returns number of digit in a number
// mostDigits() return max count of number
// radixsort(arr) find maxdigit(say k) loop k times and in each iteration place number in its kth index.
//replace existing array with value in bucket. return list at end

function getDigit(num,i) {
   return Math.floor(Math.abs(num)/ Math.pow(10,i)) %10;
}

function digitCount(num) {
    if(num ===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++) {
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}

function radixsort(nums) {
   let maxDigitCount = mostDigits(nums);
   for(let k=0;k<maxDigitCount;k++) {
       let digitBuckets = Array.from({length:10},()=>[])
       for(let i=0;i<nums.length;i++) {
        digitBuckets[getDigit(nums[i],k)].push(nums[i]); 
       }
       nums=[].concat(...digitBuckets);
   }
   return nums;
}

console.log(radixsort([2,7,3,9,5,8,6]));