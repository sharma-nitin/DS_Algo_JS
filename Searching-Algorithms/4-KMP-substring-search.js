//Knuth Morris Pratt Algo (substring search algo)
//We will find in substring if there is common prefix and suffix and calculate lps table
//lps-longest prefix suffix table
// 'a a b a a a c' - substr
//  0 1 0 1 2 2 0

function calculatelpstable(substr) {
   let i=1;
   let j=0;
   let lps = new Array(substr.length).fill(0); // [0,0,0,0,0,0,0]
   while(i<substr.length) {
     if(substr[i] === substr[j]){
         lps[i]=j+1;
         i++;j++;
     } else {
         if(j!==0){
             j=lps[j-1];
         } else{
             i++;
         }
     }
   }
   return lps;
}
//console.log(calculatelpstable('aabaaac'));

function searchsubstring(string,substr) {
    let count =0;
    let lps = calculatelpstable(substr);
    let i=0;
    let j=0;
    while(i< string.length) {
     if(string[i] === substr[j]) {
         i++;
         j++;
     } else {
         if(j!==0){
             j=lps[j-1];
         } else {
             i++;
         }
     }
     if(j===  substr.length) count++;
    }
    return count;
}

console.log(searchsubstring('washingtonas','as'));