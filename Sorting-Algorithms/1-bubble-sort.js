//Largest value bubble up to top in each iterarion
//complexity O(n2)
// if there is no swap in any iteration we can break from loop ast that part of array will already be sorted.

function bubblesort(arr) {
    let noswapdone;
    const swap = (arr,idx1,idx2) =>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    for(let i=arr.length;i>0;i--){
        noswapdone=true;
        for(let j=0;j<i-1;j++) {
            if(arr[j] >arr[j+1]) {
                swap(arr,j,j+1);
                noswapdone=false;
            }
        }
        if(noswapdone) break;
    }
    return arr;
}

console.log(bubblesort([2,7,3,9,5,8,6]));