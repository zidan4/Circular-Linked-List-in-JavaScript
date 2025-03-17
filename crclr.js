const cll = new CircularLinkedList();

cll.append(10);
cll.append(20);
cll.append(30);
cll.append(40);

console.log("Circular Linked List:");
cll.display(); // Output: 10 -> 20 -> 30 -> 40 -> (back to head)

console.log("\nDeleting node 20...");
cll.delete(20);
cll.display(); // Output: 10 -> 30 -> 40 -> (back to head)

console.log("\nCycle detected:", cll.detectCycle()); // Output: true

