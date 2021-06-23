class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        } else {
            let temp= this.first;
            this.first =newNode;
            this.first.next=temp;
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) return null;
        let temp=this.first;
        if(this.first===this.last) {
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.value;
    }
}

let list = new stack();
list.push(12);
list.push(20);
list.push(34);
console.log(list);
console.log(list.pop())