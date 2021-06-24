// Priority queue using min binary heap and linkedlist

class Node{
    constructor(val,priority){
        this.value=val;
        this.priority=priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleup();
    }

    bubbleup(){
        let idx= this.values.length-1;
        let element = this.values[idx];
        while(idx>0){
            let parentidx= Math.floor((idx-1)/2);
            let parent = this.values[parentidx];
            if(element.priority >=parent.priority) break;
            this.values[parentidx]= element;
            this.values[idx] = parent;
            idx=parentidx;
        }
      }

      dequeue(){ // remove node and insert last element at node then sink it down
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.sinkdown();
        }
        return min;
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
             if(leftchild.priority<element.priority){
                 swap=leftchildidx;
             }
            }
            if(rightchildidx<length){
                rightchild=this.values[rightchildidx];
                if(swap===null && rightchild.priority<element.priority ||
                    swap!==null && rightchild.priority<leftchild.priority){
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

let pq = new PriorityQueue();
pq.enqueue(5,3);pq.enqueue(10,1);pq.enqueue(7,2);pq.enqueue(8,4);
console.log(pq.dequeue())
console.log(pq)