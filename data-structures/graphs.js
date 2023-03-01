class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      let vertex2index = this.adjacencyList[vertex1].indexOf(vertex2);
      this.adjacencyList[vertex1].splice(vertex2index, 1);

      let vertex1index = this.adjacencyList[vertex2].indexOf(vertex1);
      this.adjacencyList[vertex2].splice(vertex1index, 1);
    }
  }

  removeVertex(vertex) {
    let edgeList = this.adjacencyList[vertex];
    let edgeListLength = edgeList.length + 1;
    console.log(edgeList);
    while (edgeListLength > 0) {
      this.removeEdge(vertex, edgeList[0]);
      edgeListLength--;
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(vertex, visited = {}) {
    let edgeList = this.adjacencyList[vertex];
    if (edgeList.length === 0) return;
    visited[vertex] = true;
    for (let i = 0; i < edgeList.length; i++) {
      if (!visited[edgeList[i]]) {
        visited[edgeList[i]] = true;
        this.DFSRecursive(edgeList[i], visited);
      }
    }
    return visited;
  }

  DFSIterative(vertex) {
    let edgeList = this.adjacencyList[vertex];
    let visited = {};
    let toVisitStack = [];
    edgeList.forEach((edge) => {
      toVisitStack.push(edge);
    });
    visited[vertex] = true;

    while (toVisitStack.length > 0) {
      let currentVertex = toVisitStack.pop();
      if (!visited[currentVertex]) {
        console.log('Visiting ' + currentVertex);
        console.log(visited);
        edgeList = this.adjacencyList[currentVertex];
        edgeList.forEach((edge) => {
          if (!visited[edge]) toVisitStack.push(edge);
        });
        visited[currentVertex] = true;
      }
    }
  }

  BFSIterative(vertex) {
    let edgeList = this.adjacencyList[vertex];
    let visited = {};
    let toVisitStack = [];
    edgeList.forEach((edge) => {
      toVisitStack.push(edge);
    });
    visited[vertex] = true;

    while (toVisitStack.length > 0) {
      let currentVertex = toVisitStack.pop();
      if (!visited[currentVertex]) {
        console.log('Visiting ' + currentVertex);
        console.log(visited);
        edgeList = this.adjacencyList[currentVertex];
        edgeList.forEach((edge) => {
          if (!visited[edge]) toVisitStack.unshift(edge);
        });
        visited[currentVertex] = true;
      }
    }
  }
}
