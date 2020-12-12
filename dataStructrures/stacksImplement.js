/*  Stack Implementation (Linked Lists) */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    // to see the very top element
    return this.top;
  }
  push(value) {
    //to add a node to the top of the stack
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    // let us remove from the top of the stack
    //isEmpty
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
// myStack.peek()
myStack.push("Google");
myStack.push("Udemy"); //Udemy come in last so Udemy locate on top of Google
myStack.push("Discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

//Discord
//Udemy
//google
