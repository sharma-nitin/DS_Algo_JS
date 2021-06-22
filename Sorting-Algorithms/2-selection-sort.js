//First places smallest value in its sorted place and then proceed in this manner
//complexity- O(n2)

function selectionsort(arr) {
    const swap = (arr,idx1,idx2) =>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    for(let i=0;i<arr.length;i++) {
        let lowest =i;
        for(let j=i+1;j<arr.length;j++) {
            if(arr[lowest] > arr[j]){
                lowest = j;
            }
        }
        if(lowest!==i) swap(arr,i,lowest);
    }
    return arr;
}

console.log(selectionsort([2,7,3,9,5,8,6]));