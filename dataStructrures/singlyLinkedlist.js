// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };


// class Node {
//   constructor(value){
//     this.value = value; 
//     this.next = null;
//   }
// }


class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) { //add to the tail
      //Code here
      const newNode = {
        value: value, 
        next: null,
        prev: null
      };
      // const newNode = new Node(value)
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this; //reference to the class, return 'this' to get back our LinkedList
    }//close for append
  
    prepend(value){ //add to the head
      const newNode = {
        value: value, 
        next: null
      }; 
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this
    }
    printList(){
      const array = [];
      let currentNode = this.head //first item in the list
      while (currentNode !==null) {
        // while current node doesnt equal to null 
        // in that case just add to the current array the current node value
        array.push(currentNode.value); //just push to the array the value
        currentNode = currentNode.next //update the current node to equal the currentNode.next and it heep updating until the new node == null 
      }
      return array 
    }                 
  
    insert(index, value) {
      //check params 
      if (index >= this.length){
        return this.append(value);  
      }
      const newNode = {
        value: value, 
        next: null
      }
      const leader = this.traverseToIndex(index - 1)
      const holdingPointer = leader.next;
      leader.next = newNode
      newNode.next = holdingPointer;
      this.length++;
      return this.printList()
    }
    traverseToIndex(index){
      // check params
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index ) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    
    remove(index){
      //check params
      const leader = this.traverseToIndex(index-1) //get the pointer to the leader
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next; 
      this.length--;
      return this.printList();
    }
  }
  
  let myDoublyLinkedList = new DoublyLinkedList(10);
  // console.log(myLinkedList)
  myDoublyLinkedList.append(5);
  myDoublyLinkedList.append(16);
  // myLinkedList.prepend(2);
  // // myLinkedList.printList(); //output: => [ 2, 10, 5, 16 ]
  // myLinkedList.insert(2,99);
  // myLinkedList.insert(20,69);
  // myLinkedList.printList();
  // myLinkedList.remove(2)
  // myDoublyLinkedList.printList()
  
  
  