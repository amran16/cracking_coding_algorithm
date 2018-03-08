function Node(data){
  this.data = data;
  this.next = null;
}


function pallindromLinkedList(list){

  var first = second = list, stack = [];

  while(first !== null && first.next !== null){
    stack.push(second.data);
    second = second.next;
    first = first.next.next;
  }

  if(first !== null){
    second = second.next;
  }

  while(second !== null){
    if(stack.pop() !== second.data){
      return false;
    }
     second = second.next;
  }

  return true;

}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("C");
var e = new Node("B");
var f = new Node("A");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(JSON.stringify(pallindromLinkedList(a), null, 3))


var isPalindrome = function(head){

  if(!head || !head.next) return true;

  var current = head;
  var stack = [];

  while(current !== null){
    stack.push(current.data)
    current = current.next;
  }

  current = head;
  while(current){
    if(stack.pop() !== current.data){
      return false;
    }
    current = current.next;
  }
  return true;
}
console.log(JSON.stringify(isPalindrome(a), null, 3))
