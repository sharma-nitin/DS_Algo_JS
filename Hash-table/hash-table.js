class HashTable{
    constructor(size=53) {
        this.keyMap= new Array(size);
    }

    hash(key) {
        let total=0;
        let some_prime=31;
        for(let i=0;i<Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total=(total*some_prime+value)%this.keyMap.length;
        }
        return total;
    }

    set(key,value) {
        let index = this.hash(key); //hash key to find index to store this element in keymap
        if(!this.keyMap[index]){
            this.keyMap[index]=[];
        }
        this.keyMap[index].push([key,value]);
    }

    get(key) {
        let index=this.hash(key); //find index where key is stored using hash
        if(this.keyMap[index]){  // if index exists
           for(let i=0;i<this.keyMap[index].length;i++){
               if(this.keyMap[index][i][0] === key) {
                   return this.keyMap[index][i][1];
               }
           }
        }
        return undefined; // index doestnt exist on keymap
    }

    // to get all non repeating keys from a hash table
    keys(){
       let keysarr=[];
       for(let i=0;i<this.keyMap.length;i++){ //iterate over keymap
           if(this.keyMap[i]) {  //if something at that index
                for(let j=0;j<this.keyMap[i].length;j++) { // iterate over each index completely
                   if(!keysarr.includes(this.keyMap[i][j][0])){
                       keysarr.push(this.keyMap[i][j][0]);
                   }
                }
           }
       }
       return keysarr;
    }

        // to get all non repeating values from a hash table
        values(){
            let valuesarr=[];
            for(let i=0;i<this.keyMap.length;i++){ //iterate over keymap
                if(this.keyMap[i]) {  //if something at that index
                     for(let j=0;j<this.keyMap[i].length;j++) { // iterate over each index completely
                        if(!valuesarr.includes(this.keyMap[i][j][1])){
                            valuesarr.push(this.keyMap[i][j][1]);
                        }
                     }
                }
            }
            return valuesarr;
         }
}

let ht = new HashTable();
ht.set('color','red');
ht.set('name','iphone');
ht.set('price','1000');
console.log(ht.get('color'));
console.log(ht.keys());
console.log(ht.values());