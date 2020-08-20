class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        this.size += 1;
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
        this.size += 1;
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
        this.size -= 1;
    }
}

function size(list) {
    return list.size
}

function isEmpty(list) {
    return !list.head;
}

function display(list) {
    let currNode = this.head;

    while(currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
}

function findPrevious(list, item) {
    let currNode = list.head;
    while((currNode !== null) && (currNode.next.value !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

function findLast(list) {
    if(list.head === null) {
        return 'list is empty';
    }

    let tempNode = list.head;

    while(tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    return tempNode;
}

/* +++++++++++++++++++++++++++++++++++++++++++++++
Mystery program
Analyze the following function (without running it in an IDE) to determine 
what problem it is trying to solve. What is the runtime of this algorithm?
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
//Answer: This program removes duplicates from a linked list. It will remove the 2nd and 
//later occurances of the linked list - will not presenve the order of the list
*/


// recursive
function reverseList(node) {
    if(node === null) {
      return null;
    }
  
    if(node.next === null) {
      return node;
    }
  
    const secondElem = node.next;
    node.next = null;
    const reverseRest = reverseList(secondElem);
    secondElem.next = node;
    return reverseRest;
  }
  
  // iterative
  function reverse(list) {
    let reversedPart = null;
    let current = list.head;
  
    while(current !== null) {
      let savedNode = current.next;
      current.next = reversedPart;
      reversedPart = current;
      current = savedNode;
    }
  
    list.head = reversedPart;
  
    return list;
  }
  
  function thirdFromEnd(list) {
    let thirdEnd = list.head;
    let end = list.head.next.next.next;
    while(end !== null) {
      thirdEnd = thirdEnd.next;
      end = end.next;
    }
    return thirdEnd.value;
  }
  
  function middOfList(list) {
    let end = list.head;
    let middle = list.head;
  
    while(end !== null && end.next !== null) {
      end = end.next.next;
      middle = middle.next;
    }
  
    return middle.value;
  }
  
  function hasCycle(list) {
    let flag = Math.random();
    let current = list.head;
    while(current !== null) {
      if(current.value === flag) {
        return true;
      }
      current.value = flag;
      current = current.next;
    }
    return false;
  }
  
  function findCycle(list) {
    let fast = list.head;
    let slow = list.head;
    while(slow !== null && fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) {
        console.log('Found CYCLE!');
        return;
      }
    }
    console.log('NO Cycle Found');
  }
  
  function main() {
    let sll = new LinkedList();
    sll.insertLast('Apollo');
    sll.insertLast('Boomer');
    display(sll);
    sll.insertLast('Helo');
    sll.insertLast('Husker');
    sll.insertLast('Starbuck');
  
    sll.insertLast('Tauhida');
  
    sll.remove('Squirrel');
  
    sll.insertBefore('Boomer', 'Athena');
  
    sll.insertAfter('Helo', 'Hot dog');
  
    sll.insertAfter('Boomer', 'Flat top');
  
    sll.insertAt(3, 'Kay');
  
    sll.remove('Tauhida');
  
    display(sll);
  
    //console.log(size(sll));
  
    //console.log(isEmpty(sll));
  
    let prevNode = findPrevious(sll, 'Kat');
    //console.log(prevNode.value);
  
    let lastNode = findLast(sll);
    //console.log(lastNode.value);
  
    //console.log(reverseList(sll.head));
    //display(reverse(sll));
  
    //console.log(thirdFromEnd(sll));
  
    //console.log(middleOfList(sll));
  
    findCycle(sll);
    console.log(hasCycle(sll));
  
    sll.head.next.next = sll.head;
    findCycle(sll);
    console.log(hasCycle(sll));
  }
  
  main();