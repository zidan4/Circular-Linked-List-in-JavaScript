class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Append a new node to the end
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }
        let temp = this.head;
        while (temp.next !== this.head) {
            temp = temp.next;
        }
        temp.next = newNode;
        newNode.next = this.head;
    }

    // Display the list
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let temp = this.head;
        do {
            process.stdout.write(temp.data + " -> ");
            temp = temp.next;
        } while (temp !== this.head);
        console.log("(back to head)");
    }

    // Delete a node by value
    delete(data) {
        if (!this.head) return;
        
        let temp = this.head, prev = null;

        // If the head is to be deleted
        if (temp.data === data) {
            if (temp.next === this.head) {
                this.head = null;
                return;
            }
            let last = this.head;
            while (last.next !== this.head) {
                last = last.next;
            }
            this.head = temp.next;
            last.next = this.head;
            return;
        }

        // Search for the node
        do {
            prev = temp;
            temp = temp.next;
        } while (temp !== this.head && temp.data !== data);

        if (temp.data === data) {
            prev.next = temp.next;
        }
    }

    // Detect Cycle (always true for circular lists)
    detectCycle() {
        return !!this.head;
    }
}

