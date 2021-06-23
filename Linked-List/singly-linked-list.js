class Node{
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class singlylinkedlist {
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
        this.tail=newnode;
     }
         this.length++;
         return this;
 }

 pop(){
   if(!this.head) return undefined;
   let current = this.head;
   let newtail = current;
   while(current.next){
       newtail=current;
       current=current.next;
   }
   this.tail = newtail;
   this.tail.next=null;
   this.length--;
   if(this.length ===0){
       this.head=null;
       this.tail=null;
   }
   return current;
 }

 shift() {
 if(!this.head) return undefined;
  let currenthead = this.head;
  this.head = currenthead.next;
  this.length--;
  if(this.length===0){
      this.tail=null;
  }
  return currenthead;
 }

 unshift(val) {
     let newNode = new Node(val);
     if(!this.head) {
         this.head=newNode;
         this.tail=this.head;
     } else {
         newNode.next= this.head;
         this.head=newNode;
         this.length++;
     }
     return this;
 }

 get(index) {
     if(index<0 || index>=this.length) return null;
     let counter=0;
     let current=this.head;
     while(index!==counter){
         current=current.next;
         counter++;
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
    newNode.next=nextNode;
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
    this.length--;
    return removedNode;
 }

 reverse() {
     let prev = null;
     let next = null;
     let current = this.head;
     while(current!=null){
         next=current.next;
         current.next=prev;
         prev=current;
         current=next;
     }
     return this;
 }

}

let list= new singlylinkedlist();
list.push(12);list.push(20);list.push(22);list.push(30);list.push(32);
list.insert(4,31);
console.log(list)