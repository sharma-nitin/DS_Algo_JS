//Heaps are similar to bst except some diff rules
//in maxBH, parent node> child node
//in MinBH, parent node<child node
//Like bst heaps dont have any relationship between siblings
//used to implement priority queue
//for an element at index n, left child will be at 2n+1 and right child will be at 2n+2
//for a child node at index n, parent will be at Math.floor((n-1)/2)

class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }

    insert(element){
        this.values.push(element);
        this.bubbleup(); //insert at end then bubble up to correct place
    }

    bubbleup(){
      let idx= this.values.length-1;
      let element = this.values[idx];
      while(idx>0){
          let parentidx= Math.floor((idx-1)/2);
          let parent = this.values[parentidx];
          if(element<=parent) break;
          this.values[parentidx]= element;
          this.values[idx] = parent;
          idx=parentidx;
      }
    }

    extractmax(){ // remove node and insert last element at node then sink it down
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.sinkdown();
        }
        return max;
    }

    sinkdown(){
        let idx=0;
        let element=this.values[idx];
        const length=this.values.length;
        while(true){
            let leftchildidx=2*idx+1;
            let rightchildidx=2*idx+2;
            let leftchild,rightchild;
            let swap=null;
            if(leftchildidx<length){
             leftchild=this.values[leftchildidx];
             if(leftchild>element){
                 swap=leftchildidx;
             }
            }
            if(rightchildidx<length){
                rightchild=this.values[rightchildidx];
                if(swap===null && rightchild>element ||
                    swap!==null && rightchild>leftchild){
                    swap=rightchildidx;
                } 
            }
            if(swap===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap] = element;
            idx=swap;
        }
    }
}

let mbh = new MaxBinaryHeap();
mbh.insert(12);mbh.insert(5);mbh.insert(7);mbh.insert(8);
console.log(mbh.extractmax())
console.log(mbh)