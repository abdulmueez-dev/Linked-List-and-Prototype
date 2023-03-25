class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Size Track
  incrementSize() {
    this.size++;
  }
  decrementSize() {
    this.size--;
  }

  /*Insert First Node*/
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.incrementSize();
  }

  /*Insert Last Node*/
  insertLast(data) {
    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      // Setting variable to keep track of current node
      let current;
      // If head is not empty then assign head to current variable to start traversing
      current = this.head;

      while (current.next) {
        // finding last node with next as null
        current = current.next;
      }

      // Creating a new Node and storing it in node var
      let node = new Node(data);
      // assigning node var as next of the last node i.e, which has next assigned as head
      current.next = node;
    }

    this.incrementSize();
  }

  //   Insert At Index
  insertAt(data, index) {
    // If index is out of range
    if (index < 0 || index > this.size) {
      return;
    }
    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    // If last index
    if (index === this.size) {
      this.insertLast(data);
      return;
    }

    // Set current to to head of the list
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      // the loop will run until the count is equal to given index giving us the node before index and on index
      previous = current; // Node before index
      count++;
      current = current.next; // Node on index
    }

    const node = new Node(data);
    // Sets the next of the given node to the one which is currently at index index
    node.next = current;
    // Sets the next of the previous node to the previous node on the index to the one we just created
    previous.next = node;

    this.incrementSize();
  }

  //   get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log("The element at your index is", current.data);
      }
      count++;
      current = current.next;
    }
    return;
  }

  //   Remove at index
  removeAt(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    // Removee First
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        // ABCD
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.decrementSize();
  }

  //   Clear List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //   Print Data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const linkedList = Object.create(LinkedList.prototype);

const linkedList = {};
linkedList.__proto__ = LinkedList.prototype;

// You can now use the methods of LinkedList on linkedList
linkedList.insertFirst(2);
linkedList.insertFirst(1);
linkedList.insertAt(1, 1);
linkedList.insertAt(3, 3);
linkedList.insertAt(2, 2);
linkedList.insertAt(5, 5);
linkedList.getAt(4);
linkedList.removeAt(3);
linkedList.insertLast(999);
console.dir(linkedList, { depth: null });
console.dir(linkedList, { depth: null });
linkedList.printListData();