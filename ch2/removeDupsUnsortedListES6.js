function Node(val){
  this.val = val;
  this.next = null;
}

const deleteDupsFromUnortedheadES6 = function(head){

  let current = head,
         seen = new Set(),
         prev = null;

   if(!head) return head;

   while(current){
     if(seen.has(current.val)){
       prev.next = current.next
     }else{
       seen.add(current.val);
        prev = current;
     }
     current = current.next;
   }
   return head;
}

  var a = new Node("A");
  var b = new Node("B");
  var c = new Node("D");
  var d = new Node("C");
  var e = new Node("D");
  var f = new Node("A");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

//a.next = null;

console.log(JSON.stringify(deleteDupsFromUnortedheadES6(a), null, 3))
console.log('-----------------------')

const deleteDupsFromUnortedheadES6b= function(head){
  let current = head,
      seen = new Set(),
      prev = null;

  if(!head) return head;

  while(current){
    if(!seen.has(current.val)){
      seen.add(current.val);
      prev = current;
    }else{
      prev.next = current.next;
    }
    current = current.next
  }
   return head
}

console.log(JSON.stringify(deleteDupsFromUnortedheadES6b(a), null, 3))
