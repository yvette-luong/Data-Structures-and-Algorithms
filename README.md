# Data Structures and Argorithms

### _*Study material and code of Data Structures and Argorithms use Java Script*_

---

## **_Data Structures_**


- Arrays
- Stacks
- Queues
- Linked List
- Trees
- Graphs
- Hash Tables


## **_Argorithms_**

- Sorting `reference to` Arrays and Trees
- Dynamic Programming `reference to` Hash Table
- BFS(Breadth First Search) + DFS(Depth First Search) (Searching) `reference to` Graphs and Trees
- Recursion `reference to` Trees

## **_Relationship of DS and Argorithms:_**

| **_GOOD_**  | **_BAD_**        |
| ----------- | ---------------- |
| - Sorting   | - Array & Trees  |
| - Dynamic   | - Hash Tables    |
| - BFS & DFS | - Graphs & Trees |
| - Recursion | - Trees          |

---
## **_Big O Notation_** 

- when we talk about Big O and scalability of code we simply mean when we grow bigger and bigger with our ***`input`***, how much does the ***`algorithm`*** slow down the less it slows down or the slower it slows down the better it is.

### ***Big O Cheat Sheet:***

**`-- Big Os -- `** 
- *`O(1) Constant Time`* - no loops - does not matter how big our inputs are, we always do the constant amount of time on the function
```
Example:

function compressFirstBox(boxes) {
  console.log(boxes[0]);
} //ES5

 ```
- *`O(log N) Logarithmic`* - usually searching 
algorithms have log n if they are sorted (Binary Search)

- *`O(n) Linear Time`* - for loops, while loops through n items

```
Example: 

const compressAllBoxes = boxes =>{
  boxes.forEach(box => console.log(box));
} //ES6

```

- *`O(n log(n)) Log Liniear`* - usually sorting operations

- *`O(n^2) Quadratic`* - every element in a collection needs to be compared to ever other element. Two nested loops

- *`O(2^n) Exponential`*- recursive algorithms that solves a problem of size N

- *`O(n!) Factorial`* - you are adding a loop for every element


*` - Iterating through half a collection is still O(n)`*

*`- Two separate collections: O(a * b)`*


**`-- What can cause time in a function? -- `**

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

**`-- Rule Book --`**

- Rule 1: Always worst Case
- Rule 2: Remove Constants

```
function compressBoxesTwice(boxes) {
  boxes.forEach(function(boxes) {
    console.log(boxes)
  });

  boxes.forEach(function(boxes) {
    console.log(boxes);
  })
}

-> O(2n) but Drop the Constant -> O(n)
```
- Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
  + for steps in order
  + for nested steps

- Rule 4: Drop Non-dominant terms

**`-- What causes Space complexity? --`**

- Variables
- Data Structures
- Function Call
- Allocations
---
## ***A. D a t a S t r u c t u r e s***

---


## 1. Singly Linked List

### _Advantage_

- it's a fairly simple implementation especially compared to the doubly one
- require less memory
- lil bit faster than doubly linked list

### _Disadvantage_

- is that it cannot be iterated in reverse or traverse from back to front. If we ever lose the reference to this Dot had node of the list it can be lost in memory forever. So its only appropriate to use when you have less.

---

## 2.Double Linked List

### _Advantage_

- can be iterated or traversed both from the front or from the back.
- if you need to delete a previous node you don't need to traverse from the head node and find what the previous notice which a singly list linked list has no concept of.
- good to use if you dont have limitation on memory or when you want good operation for searching for elements such as searching backwards instead of just fort's

### _Disadvantage_

- complex to implement and requires more memory and storage then **_Singly Linked List_**
- need to do some extra performance on actual operation to make sure when we do `insert` or `delete` that the prev property is updated as well.

### _Wrap-up_

| **_GOOD_**       | **_BAD_**      |
| ---------------- | -------------- |
| - Fast insertion | - Slow look up |
| - Fast deletion  | - More memory  |
| - Ordered        |
| - Flexible Size  |

---

## 3.Stacks

**_Idea_**

- you store the previous state over your work and the memory in such an order that the last one appears first
- Stacks = LIFO -> Last in first out

**_Method_**

- `look up O(n)`
- `pop O(1)`
- `push O(1)`
- `peek O(1) - tell us what is the last item in the list`

---

## 4.Queues

**_Idea_**

- Queues = FIFO : first in first out - the first item in the queue gets

access first that is first.

**_Methods_**

- `look up O(n)`
- `enqueue O(1) - add to the queue`
- `dequeue O(1) - remove the first queue`
- `peek O(1) - tell us what the first item in the list`

---

## 5.Trees

### **I/ Binary Tree**

**_Idea_**

- If we know how many levels are binary tree is we can find out how many total nodes there (**`Height`** starts from count of 1) : **2^h -1**

is important.

**_Method_**

- `lookup O(log N)` - **_divide & conquer_** - like looking through a phone book.
- `insert O(log N)`
- `delete O(log N)`

### _Wrap-up_

| **_GOOD_**         | **_BAD_**            |
| ------------------ | -------------------- |
| - Better than O(n) | - No O(1) operations |
| - Ordered          |
| - Flexible Size    |

### **II/ Binary Heaps**

**_Idea_**

- **Binary Heap** : in a binary heap every node on the top level has a
  greater value than every node on the next level down and a heap can be used in any algorithm where ordering is important
- Binary heaps are really great at doing comparative operations

**_Method_**

- `lookup O(log N)` - iterating through an array.
- `insert O(log N)`
- `delete O(log N)`

---

## 6.Graphs 

| **_GOOD_**      | **_BAD_**         |
| --------------- | ----------------- |
| - Relationships | - Scaling is hard |


---

## 7.Hash Tables

***Idea***
-  a way hash table works is we have the key and this key is used as the index of where to find the value in memory ( instead of using index number like in Arrays ) 
--> `Hash Function` - is the black box that decide where to put the data in our memories in our computers
- `Hash Function` is a function that generate a value of fixed length for each input that gets.
- `Idempotent` : "A FUNCTION GIVING AN INPUT ALWAYS OUTPUT THE SAME OUTPUT" - example: hashing "Hello" string to hashed characters, however we have no idea how to convert those hashed characters into "Hello" 
- `Collison`  - differents valie are inserted in the same memory place. Collision slow down our ability to access or insert information 


**_Methods_**
- `insert O(1)` - hash the `key` through the `hash function` and place it automatically into the address space that it comes up with.
- `lookup O(n)` - access the property that it is going to get hashed and direct us exactly to the address to find the values.
- `delete O(1)` - we simply use the key right away because we know where to delete the item from and because it isn't ordered.
- `search O(1)` 

### _Wrap-up_

| **_GOOD_**      | **_BAD_**         |
| --------------- | ----------------- |
|-Fast data access|- Scaling is hard |


#### ***Side-note***
- SHA-256 has generator take a really long time to generate a hash and it is an overly complex hashing function that is used

---
## ***B. A l g o r i t h m s***
---
## :one: Recursion:



---
## NOTE :

### **_Question_**

### 1. Should we build stacks by arrays or linked list?

- **_`arrays`_** allow something called cache locality which makes them technically faster when accesing its items in memory because they are right next to each other versus a **_`linked list`_** that has them scattered all over memory and also **_`linked lists`_** have extra memory associated with them because we have to hold on to those pointers.

- **_`linked list`_** have more dynamic memory,we can keep adding things to the list versus an **_`arrays`_** where you have either a static array or a dynamic array that has certain amount of memory. And as soon as it's about to reach its limit it's going to have to double up their memory and create new space for it somewhere in memory.

- **_`JavaScript is a single threaded language that can be non-blocking ?`_**
  --> **_Single threaded_** means it has only one call stack, and one call stack only you can do one thing at a time, as we saw a call stack is FIRST IN LAST OUT ( the top the call stack gets run first then below that below that below that the call stack is empty )
