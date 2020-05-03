class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
		//O(v + e) Time and Space is O(v)
   array.push(this.name);
		for (const child of this.children){
			child.depthFirstSearch(array);
		}
		return array;
	
	
	
	}
}
