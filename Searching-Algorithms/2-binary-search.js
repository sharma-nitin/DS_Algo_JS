// works on sorted array
//Based on divide and conquer rule by eliminating half items each time
// complexity O(logN) as for 16 items only 4 checks will be done and so on.

function binarysearch(arr,val) {
   let start =0;
   let end = arr.length-1;
   let middle = Math.floor((start+end)/2);
   while(arr[middle]!==val && start<=end) {
        if(val<arr[middle]) end=middle-1;
        else start = middle+1;
        middle = Math.floor((start+end)/2);
   }
  return arr[middle] === val ? middle : -1;
}

console.log(binarysearch([2,3,4,5,6,7,8],7));