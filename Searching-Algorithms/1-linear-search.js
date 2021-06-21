
// Iterate over entire list. complexity O(N).

function linearsearch(arr,val) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

console.log(linearsearch([2,3,5,4,7,6],4));