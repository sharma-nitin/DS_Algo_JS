//insertion O(logn), searching O(logn)

class Node{
    constructor(val) {
        this.value=val;
        this.left=null;
        this.right=null;
    }
}

class Binarysearchtree{
    constructor(){
        this.root=null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root===null){
            this.root=newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value===current.value) return this; // if vlaue  exists return
            if(value<current.value) {
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            } else {
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                current=current.right;
            }
        }
    }

    find(value) {
        if(this.root===null) return false;
        let current=this.root;
        let found=false;
        while(current && !found){
            if(value<current.value){
                current=current.left;
            } else
            if(value>current.value){
                current=current.right;
            } else {
                found=true;
            }
        }
        return found;
    }
// Traverse each level from left to right then move to next level
    bfs(){
        let node = this.root;
        let data=[];
        let queue=[];
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    //start from node. Traverse left side entirely. Then traverse right side entirely
    dfspreorder(){
        let data =[];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

        //Traverse all way to left then all way to right then node.
        dfspostorder(){
            let data =[];
            function traverse(node){
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                data.push(node.value);
            }
            traverse(this.root);
            return data;
        }

    //Traverse all way to left then node then all way to right
         dfsinorder(){
            let data =[];
             function traverse(node){
               if(node.left) traverse(node.left);
               data.push(node.value);
               if(node.right) traverse(node.right);
             }
           traverse(this.root);
           return data;
        }
}

let bst = new Binarysearchtree();
bst.insert(4);bst.insert(2);bst.insert(7);bst.insert(5);
console.log(bst.bfs())
console.log(bst.dfspreorder())
console.log(bst.dfspostorder())
console.log(bst.dfsinorder())

