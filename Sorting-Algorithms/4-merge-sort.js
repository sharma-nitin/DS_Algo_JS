//Faster sort complexity O(nlogn)
//Based omn divide and conquer
// merge function will merge two sorted arrays

function merge(arr1,arr2) {
    let results=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i]>arr2[j]) {
            results.push(arr2[j]);
            j++;
        } else{
            results.push(arr1[i]);
            i++;
        }
    }
    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergesort(arr) {
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    return merge(left,right);
}

console.log(mergesort([2,7,3,9,5,8,6]));
