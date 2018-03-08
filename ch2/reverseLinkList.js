//   running time: O(n)
//   space: O(1)

function Node(val){
  this.data = val;
  this.next = null;
}

function LinkedList (){
   this.head = null;
   this.tail = null;
   this.length = 0;
}
// push of O(n)
LinkedList.prototype.push = function(val){

    var newNode = new Node(val);

  // if the head doesn't exist, we create a new one
    if(!this.head){
      this.head = newNode;
      this.length++;
      return;
    }
  //if it exist, we add it at the end
    var currentNode = this.head;

    while(currentNode.next){
     currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.length++;
}

// running time: O(n)
// space: O(1)
LinkedList.prototype.reverse = function(head){

  var currentNode = this.head;
      this.tail = currentNode;

  var previousNode = null;
  var nextNode = null;

  while(currentNode){

    // save next or you lose it!!!
    nextNode = currentNode.next;

    //reverse the pointer
    currentNode.next = previousNode;

    // increment previous to current node
    previousNode = currentNode;

  // increment current node to next node or null at end of list
    currentNode = nextNode
    }
   this.head = previousNode
   //return previousNode
}


// running time: O(n)
// space: O(n)
LinkedList.prototype.reverseRecursion = function(head){

  if(head === null || head.next === null) return head; //can't just say return.

  var current = reverseRecursion(head.next);

  head.next.next = head;

  head.next = null;

  return current;

}

LinkedList.prototype.printForward = function(){
  var currentNode = this.head;

  while(currentNode){
    console.log(currentNode.data);
    currentNode = currentNode.next
  }
}

var list = new LinkedList();

list.push(5);
list.push(12);
list.push(78);
console.log('These are the Added items O(1)')
list.printForward();
console.log('------------------------------------')
list.reverse()
list.printForward();
console.log(list)
console.log('------------------------------------')

class Node1{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList1{
  constructor(){
   this.head = null;
   this.length = 0;
  }

  push(val){

    var newNode = new Node(val);

  // if the head doesn't exist, we create a new one
    if(!this.head){
      this.head = newNode;
      this.length++;
      return;
    }
  //if it exist, we add it at the end
    var currentNode = this.head;

    while(currentNode.next){
     currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  reverse(){
       var currentNode = this.head;
        var previousNode = null;
        var nextNode = null;

        while(currentNode){

          // save next or you lose it!!!
          nextNode = currentNode.next;

          //reverse the pointer
          currentNode.next = previousNode;

          // increment previous to current node
          previousNode = currentNode;

        // increment current node to next node or null at end of list
          currentNode = nextNode
          }

         this.head = previousNode
    }

    printForward(){
      var currentNode = this.head;

      while(currentNode){
        console.log(currentNode.data);
        currentNode = currentNode.next
      }
    }

}

var list = new LinkedList1();

list.push(5);
list.push(12);
list.push(78);
console.log('These are the Added items O(1)')
list.printForward();
console.log('------------------------------------')
list.reverse()
list.printForward();

console.log(JSON.stringify(list, null, 4))
