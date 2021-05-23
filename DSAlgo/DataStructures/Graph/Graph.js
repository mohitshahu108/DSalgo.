/**
 *  Implimenting the graph by using adjency list 
 *  it mean using hash tables.
 */

//creating graph class 
// we are Building an undirected graph.
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    /**
     *  Write a method callled addVertex, which accepts a name of a vertex
     * 
     * It should add akey tot he vertex and set its value to be an empty array.
     * 
     * if the there is graph  g 
     * 
     * then addVertex should be like these
     * g.aadVertex("Tokyo")
     * {
     *  "Tokyo": []
     * }
     * 
     */
    addVertx(vertex){
        this.adjacencyList[vertex]=[];
         
    }
    
}