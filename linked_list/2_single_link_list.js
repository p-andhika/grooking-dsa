class Node {
	constructor(data) {
		this.val = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
			this.head = null; // Initialize the head of the list to null
	}

	// Function to insert a new node at the beginning of the list
	insert(val) {
			let newNode = new Node(val); // Create a new node with the given val
			newNode.next = this.head; // Point the new node's next to the current head
			this.head = newNode; // Update the head of the list to the new node
	}

	// Function to insert a new node after a given node (prev_node)
	insertAfter(prev_node, val) {
			if (prev_node === null) {
					console.log("The given previous node must be in LinkedList.");
					return;
			}
			let newNode = new Node(val); // Create a new node with the given val
			newNode.next = prev_node.next; // Update the new node's next to prev_node's next
			prev_node.next = newNode; // Update prev_node's next to the new node
	}

	// Function to delete the first occurrence of a key in the list
	delete(key) {
			let temp = this.head, prev = null;
			// If the head node holds the key to be deleted
			if (temp !== null && temp.val === key) {
					this.head = temp.next; // Change the head of the list
					return;
			}
			// Search for the key to be deleted
			while (temp !== null && temp.val !== key) {
					prev = temp; // Keep track of the previous node
					temp = temp.next; // Move to the next node
			}
			// If key was not present in the list
			if (temp === null) return;
			// Unlink the node from the list
			prev.next = temp.next;
	}

	// Function to search for a key in the list. Returns true if found, otherwise false
	search(key) {
			let current = this.head; // Initialize current to head
			while (current !== null) {
					if (current.val === key) // If the key is found, return true
							return true;
					current = current.next; // Move to the next node
			}
			return false; // Key not found, return false
	}
}

const linkedList = new LinkedList();

linkedList.insert(2);
linkedList.insert(5);
linkedList.insertAfter(linkedList.head, 7);

console.dir(linkedList, { depth: null });

linkedList.delete(7);

console.dir(linkedList, { depth: null });
