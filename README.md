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
`
| **_GOOD_**       |   **_BAD_**    |
| ---------------- | -------------- |
| - Fast insertion | - Slow look up |
| - Fast deletion  | - More memory  |
| - Ordered        |
| - Flexible Size  |
