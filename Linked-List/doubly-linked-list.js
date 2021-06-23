class Node{
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev=null;
    }
}

class doublylinkedlist {
 constructor(){
     this.head=null;
     this.tail=null;
     this.length=0;
 }

 push(val) {
     let newnode = new Node(val);
     if(this.length === 0){
         this.head = newnode;
         this.tail = this.head;
     } else {
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail=newnode;
     }
         this.length++;
         return this;
 }

 pop(){
   if(!this.head) return undefined;
   let poped = this.tail;
   if(this.length ===1){
    this.head=null;
    this.tail=null;
   } else {
    this.tail=poped.prev;
    this.tail.next=null;
    this.poped.prev=null;
  }
    this.length--;
    return poped;
 }

 shift() {
 if(this.length===0) return undefined;
 let oldhead = this.head;
 if(this.length ===1){
    this.head=null;
    this.tail=null;
   } else {
    this.head=oldhead.next;
    this.head.prev=null;
    oldhead.next=null;
  }
  this.length--;
  return oldhead;
 }

 unshift(val) {
     let newNode = new Node(val);
     if(this.length===0) {
         this.head=newNode;
         this.tail=this.head;
     } else {
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
     }
     this.length++;
     return this;
 }

 get(index) {
     if(index<0 || index>=this.length) return null;
     let count,current;
     if(index<=this.length/2) { // if index is in first half use next to find and start from head
        count=0;
        current=this.head;
        while(count!==index) {
           current=current.next;
           count++;
        }
     } else { // index is in second hald use prev and start from tail
       count=this.length-1;
       current = this.tail;
       while(count!==index) {
           current=current-prev;
           count--;
       }
     }
     return current;
 }

 set(index,val) {
    let nodetoset = this.get(index);
    if(nodetoset){
        nodetoset.value=val;
        return true;
    }
    return false; 
 }

 insert(index,val) {
    if(index<0 || index>this.length) return false;
    if(index===this.length) return !!this.push(val);
    if(index===0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prevNode = this.get(index-1);
    let nextNode = prevNode.next;
    prevNode.next=newNode;
    newNode.prev = prevNode;v
    newNode.next=nextNode;
    nextNode.prev=newNode;
    this.length++;
    return true;
 }

 remove(index) {
    if(index<0 || index>=this.length) return undefined;
    if(index===this.length-1) return this.pop();
    if(index===0) return this.shift();
    let prevNode = this.get(index-1);
    let removedNode = prevNode.next;
    prevNode.next=removedNode.next;
    removedNode.next.prev=prevNode;
    removedNode.next=null;
    removedNode.prev=null;
    this.length--;
    return removedNode;
 }

reverse() {
    let temp = null;
    let current = this.head;
    //swap next and prev for all nodes of doubly linked list
     while (current != null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    if (temp != null) {
     this.head = temp.prev;
     }
     return this;
}

}

let list= new doublylinkedlist();
list.push(12);list.push(20)
list.reverse();
console.log(list)