//1. initialize two pointers (p1,p2)to the head
//2. move forward the 'p1' pointer by 'n - 1' positions
//3. move forward both pointers by 1 position till (p1.next = null)

//O(n) time && O(1) space.
function LinkedListNode(data){
  this.data = data;
  this.next = null;
}

// n = count it from the last
//if length is known we iterate thru the linkedList and find the element.

function returnKthToLast(head, k){

  if(!head || k < 1) return null;

  var first = head;
  var second = head;

  var count = 0;
  while(count < k - 1){
    if(first === null) return null;
      first = first.next;
      count++;
  }

  // for(var i = 0; i < k - 1; i++){
  //   if(first === null) return null;
  //   first = first.next
  // }

  while(first.next !== null){
    first = first.next;
    second = second.next;
  }
  return second.data;
  //return second;
}

var a = new LinkedListNode("A");
var b = new LinkedListNode("B");
var c = new LinkedListNode("C");
var d = new LinkedListNode("D");
var e = new LinkedListNode("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(JSON.stringify(returnKthToLast(a, -1), null, 3))
console.log(JSON.stringify(returnKthToLast(a, 3), null, 3))
//console.log(JSON.stringify(a,null,3))


function returnKthToLast1(head, k){

  if(!head || k < 1) return null;

  var length = 1;
  var currentNode = head;

  while(currentNode.next !== null){
    currentNode = currentNode.next;
    length++;
}

  if(k > length) return null;

  currentNode = head;
  for(var i = 0; i < length - k; i++){
    currentNode = currentNode.next;
  }
  return currentNode.data;

}

//Recursion
function returnKthToLast2(head, k){
  if(!head) return 0;

  var i = returnKthToLast2(head.next, k) + 1;

  if(i === k){
    console.log(head.target);
  }

  return i;

}
