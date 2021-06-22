//work by selecting one element called pivot and find index where pivot should end up
// place element into its correct place and return its index
// the process can be repeated from 0 to pivotindex-1 and from pivotindex+1 to end.
//complexity O(n2).

function pivot(arr,start=0,end=arr.length-1) {
    let pivot = arr[start];
    let swapidx = start;
    const swap = (arr,idx1,idx2) =>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    for(let i=start+1;i<=end;i++) {
        if(pivot > arr[i]) {
            swapidx++;
            swap(arr,swapidx,i)
        }
    }
    swap(arr,start,swapidx)
    return swapidx;
}

function quicksort(arr, left=0,right=arr.length-1) {
    if(left<right) {
        let pivotidx = pivot(arr,left,right) // will return pivotindex, whose left will have all small and right will have all larger ones
        //left
        quicksort(arr,left,pivotidx-1);
        //right
        quicksort(arr,pivotidx+1,right);
    }
    return arr;
}

console.log(quicksort([2,7,3,9,5,8,6]));