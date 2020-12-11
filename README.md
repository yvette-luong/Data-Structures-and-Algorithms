# Data Structures and Argorithms

### **_Study material and code of Data Structures and Argorrithms use Java Script_**:

## 1. Singly Linked List

### _Advantage_:

- it's a fairly simple implementation especially compared to the doubly one
- require less memory
- lil bit faster than doubly linked list

### _Disadvantage_:

- is that it cannot be iterated in reverse or traverse from back to front. If we ever lose the reference to this Dot had node of the list it can be lost in memory forever. So its only appropriate to use when you have less.

## 2.Double Linked List

### _Advantage_:

- can be iterated or traversed both from the front or from the back.
- if you need to delete a previous node you don't need to traverse from the head node and find what the previous notice which a singly list linked list has no concept of.
- good to use if you dont have limitation on memory or when you want good operation for searching for elements such as searching backwards instead of just fort's

### _Disadvantage_:

- complex to implement and requires more memory and storage then **_Singly Linked List_**
- need to do some extra performance on actual operation to make sure when we do `insert` or `delete` that the prev property is updated as well.

### _Wrap-up_:


| **_GOOD_** | **_BAD_** |
| ---------------- | -------------- |
| - Fast insertion | - Slow look up |
| - Fast deletion | - More memory |
| - Ordered |
| - Flexible Size |


## 3.Stacks:

 ***Idea***
- you store the previous state over your work and the memory in such an order that the last one appears first
- Stacks = LIFO -> Last in first out 


***Method*** 

- `look up O(n)`
- `pop     O(1)`
- `push    O(1)`
- `peek    O(1) - tell us what is the last item in the list`



### 4.Queues: 

***Idea***

- Queues = FIFO : first in first out - the first item in the queue gets

access first that is first.

***Methods***

- `look up O(n)`
- `enqueue O(1) - add to the queue`
- `dequeue O(1) - remove the first queue` 
- `peek O(1) - tell us what the first item in the list`


## NOTE :

- ***`arrays`*** allow something called cache locality which makes them technically faster when accesing its items in memory because they are right next to each other versus a ***`linked list`*** that has them scattered all over memory and also ***`linked lists`*** have extra memory associated with them because we have to hold on to those pointers.

- ***`linked list`*** have more dynamic memory,we can keep adding things to the list versus an ***`arrays`*** where you have either a static array or a dynamic array that has certain amount of memory. And as soon as it's about to reach its limit it's going to have to double up their memory and create new space for it somewhere in memory.