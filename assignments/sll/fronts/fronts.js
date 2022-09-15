class Node {
  constructor(data){
      this.data=data;
      this.next=null;
  }
};

class SLL {
  constructor() {
      this.head = null;
      this.size = 0;
  }
  
  addFront(val) {
    // Creating a new node object with the value provided
    let new_node = new Node(val);
    // Checking to see if the current list does not have a head node (if the list is empty)
    // If the list is empty, place the new node as the head 
    if(!this.head) {
        this.head = new_node;
        return this;
    }
    // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head;
    // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    this.size++;
    return this;
  }

  removeFrom(index) {
    let curr = this.head;
    let prev = curr;
    let it = 0;
    if (index === 0) {
      this.head = curr.next;
    } else {
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.nextl
    }
    this.size--;
    return(curr);
  };

  front() {
    return(this.head.data);
  };

};

console.log(SLL1 = new SLL());

console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));

console.log(SLL1);

console.log(SLL1.removeFrom(0));
console.log(SLL1.removeFrom(0));

console.log(SLL1);

console.log(SLL1.front());