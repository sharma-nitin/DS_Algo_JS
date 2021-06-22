//Taking one element and putting it at its right sorted place
// complexity O(n2)

function insertionsort(arr) {
        for (let i=1; i<arr.length; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j >=0) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}

console.log(insertionsort([2,7,3,9,5,8,6]));