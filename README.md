# Data Structures and Argorithms

### _*Study material and code of Data Structures and Argorrithms use Java Script*_

---

## **_Data Structures:_**

```
- Arrays
- Stacks
- Queues
- Linked List
- Trees
- Graphs
- Hash Tables
```

## **_Argorithms:_**

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

## 1. Singly Linked List

### _Advantage_:

- it's a fairly simple implementation especially compared to the doubly one
- require less memory
- lil bit faster than doubly linked list

### _Disadvantage_:

- is that it cannot be iterated in reverse or traverse from back to front. If we ever lose the reference to this Dot had node of the list it can be lost in memory forever. So its only appropriate to use when you have less.

---

## 2.Double Linked List

### _Advantage_:

- can be iterated or traversed both from the front or from the back.
- if you need to delete a previous node you don't need to traverse from the head node and find what the previous notice which a singly list linked list has no concept of.
- good to use if you dont have limitation on memory or when you want good operation for searching for elements such as searching backwards instead of just fort's

### _Disadvantage_:

- complex to implement and requires more memory and storage then **_Singly Linked List_**
- need to do some extra performance on actual operation to make sure when we do `insert` or `delete` that the prev property is updated as well.

### _Wrap-up_:

| **_GOOD_**       | **_BAD_**      |
| ---------------- | -------------- |
| - Fast insertion | - Slow look up |
| - Fast deletion  | - More memory  |
| - Ordered        |
| - Flexible Size  |

---

## 3.Stacks:

**_Idea_**

- you store the previous state over your work and the memory in such an order that the last one appears first
- Stacks = LIFO -> Last in first out

**_Method_**

- `look up O(n)`
- `pop O(1)`
- `push O(1)`
- `peek O(1) - tell us what is the last item in the list`

---

## 4.Queues:

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

### _Wrap-up_:

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

## 6.Graph

| **_GOOD_**      | **_BAD_**         |
| --------------- | ----------------- |
| - Relationships | - Scaling is hard |

## NOTE :

### **_Question_**

### 1. Should we build stacks by arrays or linked list?

- **_`arrays`_** allow something called cache locality which makes them technically faster when accesing its items in memory because they are right next to each other versus a **_`linked list`_** that has them scattered all over memory and also **_`linked lists`_** have extra memory associated with them because we have to hold on to those pointers.

- **_`linked list`_** have more dynamic memory,we can keep adding things to the list versus an **_`arrays`_** where you have either a static array or a dynamic array that has certain amount of memory. And as soon as it's about to reach its limit it's going to have to double up their memory and create new space for it somewhere in memory.

- **_`JavaScript is a single threaded language that can be non-blocking ?`_**
  --> **_Single threaded_** means it has only one call stack, and one call stack only you can do one thing at a time, as we saw a call stack is FIRST IN LAST OUT ( the top the call stack gets run first then below that below that below that the call stack is empty )
