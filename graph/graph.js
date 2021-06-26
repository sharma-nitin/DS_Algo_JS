// Undirected Graph using Adjacency List

class Graph{
    constructor(){
        this.adjacencylist={};
    }

     addvertex(vertex) {
         if(!this.adjacencylist[vertex]) {
             this.adjacencylist[vertex] = [];
         }
     }

     addEdge(v1,v2) {
        this.adjacencylist[v1].push(v2);
        this.adjacencylist[v2].push(v1);
     }

     removeEdge( v1,v2){
         this.adjacencylist[v1]= this.adjacencylist[v1].filter((v)=>v!=v2);
         this.adjacencylist[v2]= this.adjacencylist[v2].filter((v)=>v!=v1);
     }

     removeVertex(vertex) {
         while(this.adjacencylist[vertex].length) {
             const adjacencyVertex = this.adjacencylist[vertex].pop();
             this.removeEdge(vertex,adjacencyVertex);
         }
         delete this.adjacencylist[vertex];
     }

     depthfirstrecursive(start) {
         const result=[];
         const visited={};
         const adjacencylist = this.adjacencylist;
         (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex]=true;
            result.push(vertex);
            adjacencylist[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
         })(start);
         return result;
     }

     depthfirstiterative(start) {
         const stack = [start];
         const result =[];
         const visited = {};
         let currentvertex;
         visited[start]=true;
         while(stack.length){
             currentvertex=stack.pop();
             result.push(currentvertex);
             this.adjacencylist[currentvertex].forEach((neighbour)=>{
                 if(!visited[neighbour]){
                     visited[neighbour]=true;
                     stack.push(neighbour);
                 }
             })
         }
         return result;
     }

     breadthfirst(start) {
        const queue = [start];
        const result =[];
        const visited = {};
        let currentvertex;
        visited[start]=true;
        while(queue.length){
            currentvertex=queue.shift();
            result.push(currentvertex);
            this.adjacencylist[currentvertex].forEach((neighbour)=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
     }
}

let graph = new Graph();
graph.addvertex(1);graph.addvertex(2);graph.addvertex(3)
graph.addEdge(1,2);graph.addEdge(1,3);graph.addEdge(2,3);
graph.removeEdge(2,3);
console.log(graph.depthfirstiterative(1));
graph.removeVertex(2);
console.log(graph)
