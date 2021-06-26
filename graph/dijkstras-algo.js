//find the shortest path between vertexes in a weighted graph

// lets build a simple priority queue to use in our algo.
// Instead of this we should use binary heap priority queue

class PriorityQueue{
   constructor(){
       this.values=[]
   }
   enqueue(val,priority) {
       this.values.push({val,priority});
       this.sort()
   }
   dequeue(){
       return this.values.shift();
   }
   sort(){
       this.values.sort((a,b)=>a.priority-b.priority);
   }
}

class Weightedgraph{
    constructor(){
        this.adjacencylist={}
    }
    addvertex(vertex) {
        if(!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = [];
        }
    }

    addEdge(v1,v2,weight) {
       this.adjacencylist[v1].push({node:v2,weight});
       this.adjacencylist[v2].push({node:v1,weight});
    }

    dijkstras(start,finish) {
      let nodes = new PriorityQueue();
      const distances={}; // to notes the shortest distance to diff node from start node
      const previous={}; // to note from where we came from to a particular node
      let path=[];
      let smallest;
      //build up initial state
      for(let vertex in this.adjacencylist) {
          if(vertex === start){
              distances[vertex]=0;
              nodes.enqueue(vertex,0)
          } else {
              distances[vertex]= Infinity;
              nodes.enqueue(vertex,Infinity)
          }
          previous[vertex]= null; // initialise previous with all vertex as null initially
      }
      //as long as there is something to visit
      while(nodes.values.length){
          smallest = nodes.dequeue().val;
          if(smallest === finish){
              // we are done. build up path to return
              while(previous[smallest]){
                  path.push(smallest);
                  smallest=previous[smallest];
              }
              break;
          }

          if(smallest || distances[smallest]!==Infinity){
              for(let neighbour in this.adjacencylist[smallest]){
                  //find neighbouring node
                  let nextnode = this.adjacencylist[smallest][neighbour];
                  //calculate new distance to neighbouring node
                 let candidate = distances[smallest]+ nextnode.weight;
                 if(candidate<distances[nextnode.node]){
                     //update new smallest distance
                     distances[nextnode.node]=candidate;
                     //update how we got to neighbor
                     previous[nextnode.node]=smallest;
                     //enqueue in PQ with new priority
                     nodes.enqueue(nextnode.node,candidate)
                 }
              }
          }
      }
      return path.concat(smallest).reverse();
    }
}

let graph = new Weightedgraph();
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addvertex("E")
graph.addvertex("F")

graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("E","F",1)
console.log(graph.dijkstras('A','E'))