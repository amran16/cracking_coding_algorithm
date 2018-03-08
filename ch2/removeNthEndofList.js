function LinkedListNode(val) {
      this.val = val;
      this.next = null;
}

function removeNthNodeEnd(head, n){

  var dummy = new LinkedListNode(0);
      dummy.next = head;

  var first = dummy;
  var second = dummy;

  if(!head) return null;

  for(var i = 0; i < n + 1; i++){
    first = first.next;
  }

  while(first !== null){
    first = first.next;
    second = second.next;
  }
   second.next = second.next.next;
   return dummy.next;
   //return dummy.next

}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(JSON.stringify(removeNthNodeEnd(a, 3), null, 4))
