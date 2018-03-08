//   running time: O(n)
//   space: O(1)

function Node(val){
  this.val = val;
  this.next = null;
}

var deleteDupsFromSortedList = function(head){

  if(!head){
    return head
  }

   var current = head;
   var prev;

   while(current && current.next){
     if(current.val === current.next.val){
       prev = current.next.next;
       current.next = prev;
     }
     else{
       current = current.next;
     }

   }
   return head;
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("B");
var d = new Node("B");
var e = new Node("D");
var f = new Node("D");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

//a.next = null;

console.log(JSON.stringify(deleteDupsFromSortedList(a), null, 3))
