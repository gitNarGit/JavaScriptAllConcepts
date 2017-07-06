/*****************
 *		Stack 
 ******************/

function Stack() {
	var top = null;
	var count = 0;

	//Returns the number of items in the queue
	this.GetCount = function() {
		return count;
	}
	//Pushes the specified data into the Stack
	this.Push = function(data) {
		var node = {
			data : data,
			next : null
		};

		node.next = top;
		top = node;

		count++;
	}
	//Pops out data from the stack, returns null if stack is empty
	this.Pop = function() {
		if (top === null) {
			return null;
		} else {
			var out = top;
			top = top.next;

			if (count > 0) {
				count--;
			}

			return out.data;
		}
	}
	//Peeks at the item from the top of the stack
	this.Peek = function() {
		if (top === null) {
			return null;
		} else {
			return top.data;
		}
	}
	//Display all data from the stack
	this.DisplayAll = function() {
		if (top === null) {
			return null;
		} else {
			var arr = new Array();
			var current = top;

			for (var i = 0; i < count; i++) {
				arr[i] = current.data;
				current = current.next;
			}

			return arr;
		}
	}
}

/***********************
 *	Queue 
 *********************/


function Queue() {
	var count = 0;
	var head = null;
	var tail = null;

	//Returns the number of items in the queue
	this.GetCount = function() {
		return count;
	}
	//adds an item to the front of the list
	this.Enqueue = function(data) {
		var node = {
			data : data,
			next : head
		};

		if (head === null) {
			tail = node;
		}

		head = node;

		count++;
	}
	//removes an item to the end of the list
	this.Dequeue = function () {
		//if queue is empty, returns null
		if (tail === null) {
			return null;
		}
		else {
			var current = head;
			var previous = null;

			//while there is a next, it will advance the queue.
			//the idea is to have &quot;current&quot; at the end and &quot;previous&quot; as the one before last
			while (current.next) {
				previous = current;
				current = current.next;
			}

			//if there is more than 1 item, 
			//Removes the tail and decreases count by 1.
			if (count &gt; 1) {
				//Remove the reference to the last one.
				previous.next = null;
				
				//makes tail point to the previous node.
				tail = previous;
			}
			//resets the queue
			else {
				head = null;
				tail = null;
			}
		count--;
    }
	//Display all data from the queue
	this.DisplayAll = function() {
		if (head === null) {
			return null;
		} else {
			var arr = new Array();
			var current = head;

			for (var i = 0; i < count; i++) {
				arr[i] = current.data;
				current = current.next;
			}

			return arr;
		}
	}
	//Peeks at a specific index
	this.PeekAt = function(index) {
		//checks for out-of-bounds values
		if (index > -1 && index < count) {
			var current = head;

			//Navigates through the queue to find the item
			for (var i = 0; i < index; i++) {
				current = current.next;
			}

			return current.data;
		} else {
			return null;
		}
	}
}

/*********************
 *	Linked List 
 *********************/

function LinkedList() {
	var count = 0;
	var head = null;

	this.GetCount = function() {
		return count;
	}
	//Returns an array with the data or if empty it returns null
	this.DisplayAll = function() {
		if (head === null) {
			return null;
		} else {
			var arr = new Array();
			var current = head;
			for (var i = 0; i < count; i++) {
				arr[i] = current.data;
				current = current.next;
			}
			return arr;
		}
	}
	//display at a specific index or if out of bounds it return null
	this.DisplayAt = function(index) {
		//check for out-of-bounds values
		if (index > -1 && index < count) {
			var current = head;
			var i = 0;

			while (i++ < index) {
				current = current.next;
			}

			return current.data;
		} else {
			return null;
		}
	}
	//Adds to the front of the list
	this.AddFirst = function(data) {
		//creates a new node
		var node = {
			data : data,
			next : head
		};

		head = node;

		count++;
	}
	//Adds an item to the list at the specified position
	this.Add = function(data, index) {
		if (index === 0) {
			this.AddFirst(data);
		}
		//check for out-of-bounds values
		else if (index > -1 && index < count) {

			var node = {
				data : data,
				next : null
			};

			var previous;
			var current = head;
			var i = 0;

			//find the right location
			while (i++ < index) {
				previous = current;
				current = current.next;
			}

			previous.next = node;
			node.next = current;

			count++;
		} else {
			alert("out of range");
		}
	}
	//Removes the first item
	this.RemoveFirst = function() {
		if (head === null) {
			return null;
		} else {
			var out = head;
			head = head.next;

			if (count > 0) {
				count--;
			}

			return out.data;
		}
	}
	//Removes from a specific index
	this.RemoveAt = function(index) {

		if (index === 0) {
			return this.RemoveFirst(index);
		}
		//check for out-of-bounds values
		else if (index > -1 && index < count) {

			var current = head;
			var previous;
			var i = 0;

			//find the right location
			while (i++ < index) {
				previous = current;
				current = current.next;
			}

			//skip over the item to remove
			previous.next = current.next;

			//decrement the length
			count--;
		} else {
			return null;
		}

		//return the value
		return current.data;
	}
}

/*************************************
 Deque - linked List
 *************************************/

function Deque() {
	var count = 0;
	var head = null;
	var tail = null;

	//Allows to view the value stored on Head
	this.getHead = function() {
		if (head) {
			return head.data;
		}

		return null;
	}
	//Allows to view the value stored on Tail
	this.getTail = function() {
		if (tail) {
			return tail.data;
		}
		return null;
	}
	//Returns the number of items
	this.GetCount = function() {
		return count;
	}
	//Defines a node
	var Node = function(data) {
		this.data = data;
		this.next = null;
	}
	//Returns an array with the data from head to tail or if empty it returns null
	this.DisplayHeadToTail = function() {
		if (head != null) {
			var arr = new Array();
			var current = head;

			while (current) {
				arr.push(current.data);
				current = current.next;
			}

			return arr;
		} else {
			return null;
		}
	}
	//Returns an array with the data from tail to head or if empty it returns null
	this.DisplayTailToHead = function() {
		if (head != null) {
			//call DisplayHeadToTail() and reverse it.
			var arr = this.DisplayHeadToTail();
			return arr.reverse();
		} else {
			return null;
		}
	}
	//Adds to the front of the list
	this.AddHead = function(data) {

		var node = new Node(data);
		node.next = head;
		head = node;

		//if the list was empty
		if (!tail) {
			tail = head;
		}

		count++;
	}
	//Adds to the end of the list
	this.AddTail = function(data) {
		var node = new Node(data);

		if (!head) {
			head = node;
		} else {
			tail.next = node;
		}

		tail = node;
		count++;
	}
	//Removes the first item
	this.RemoveHead = function() {
		if (head) {
			//If it's the last item
			if (count === 1) {
				head = null;
				tail = null;
			} else {
				head = head.next;
			}

			count--;
		}
	}
	//Removes the first item
	this.RemoveTail = function() {
		if (head) {
			//If it's the last item
			if (count === 1) {
				head = null;
				tail = null;
			} else {
				var current = head;

				while (current.next.next) {
					current = current.next;
				}

				tail = current;
				tail.next = null;

			}

			count--;
		}
	}
}

/***********************
 *	Doubly linked list 
 ***********************/


function DoublyLinkedList() {
	var count = 0;
	var head = null;
	var tail = null;

	//Allows to view the value stored on Head
	this.getHead = function() {
		if (head) {
			return head.data;
		}

		return null;
	}
	//Allows to view the value stored on Tail
	this.getTail = function() {
		if (tail) {
			return tail.data;
		}
		return null;
	}
	//Returns the number of items
	this.GetCount = function() {
		return count;
	}
	//Returns an array with the data from head to tail or if empty it returns null
	this.DisplayAll = function() {
		if (head != null) {
			var arr = new Array();
			var current = head;
			for (var i = 0; i < count; i++) {
				arr[i] = current.data;
				current = current.next;
			}
			return arr;
		} else {
			return null;
		}
	}
	//Returns an array with the data from tail to head or if empty it returns null
	this.DisplayAllBackwards = function() {
		if (head != null) {
			var arr = new Array();
			var current = tail;
			for (var i = 0; i < count; i++) {
				arr[i] = current.data;
				current = current.previous;
			}
			return arr;
		} else {
			return null;
		}
	}
	//display at a specific index or if out of bounds it return null
	this.DisplayAt = function(index) {

		if (index > -1 && index < count) {
			var current = head;
			var i = 0;

			while (i++ < index) {
				current = current.next;
			}

			return current.data;
		} else {
			return null;
		}
	}
	//Adds to the front of the list
	this.AddFirst = function(data) {
		//creates a new node
		var node = {
			data : data,
			next : head,
			previous : null
		};

		head = node;

		//if the list was empty
		if (count === 0) {
			tail = head;
		} else {
			head.next.previous = head;
		}

		count++;
	}
	//Adds to the end of the list
	this.AddLast = function(data) {
		var node = {
			data : data,
			next : null,
			previous : tail
		}

		if (count === 0) {
			head = node;
		} else {
			tail.next = node;
		}

		tail = node;

		count++;
	}
	//Adds an item to the list at the specified position
	this.Add = function(data, index) {
		//check for out-of-bounds values
		if (index > 0 && index < count) {

			var node = {
				data : data,
				next : null,
				previous : null
			};

			var current = head;
			var i = 0;

			//find the right location
			while (i++ < index) {
				current = current.next;
			}

			current.previous.next = node;
			node.next = current;
			node.previous = current.previous;
			current.previous = node;

			count++;
		} else if (index < 1) {
			this.AddFirst(data);
		} else {
			this.AddLast(data);
		}
	}
	//Removes the first item
	this.RemoveFirst = function() {
		if (head != null) {

			head = head.next;
			count--;

			if (count === 0) {
				tail = null;

			} else {
				head.previous = null;

			}
		}
	}
	//Removes the first item
	this.RemoveLast = function() {
		if (head != null) {
			if (count == 1) {
				head = null;
				tail = null;
			} else {
				tail.previous.next = null;
				tail = tail.previous;
			}

			count--;
		}
	}
	//Removes from a specific index
	this.RemoveAt = function(index) {

		//check for out-of-bounds values
		if (index > 0 && index < count - 1) {

			var current = head;
			var i = 0;

			//find the right location
			while (i++ < index) {
				current = current.next;
			}

			current.previous.next = current.next;
			current.next.previous = current.previous;

			count--;
		} else if (index < 1) {
			this.RemoveFirst();
		} else {
			this.RemoveLast();
		}
	}
}