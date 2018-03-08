// T.C  :  Push : O(n)  Pop: O(1)  Top: O(1)  Getmin: O(1)
// S.C  :  O(1)

function myQueue(){
  this.stack = [];
}

myQueue.prototype.push = function(val){
  var temp = [];

  while(this.stack.length > 0){
    temp.push(this.stack.pop());
  }
  this.stack.push(val);
  
  while(temp.length > 0){
    this.stack.push(temp.pop());
  }
}

myQueue.prototype.pop = function(){
  return this.stack.pop();
}

myQueue.prototype.peek = function(){
    return this.stack[this.stack.length - 1];
}

myQueue.prototype.isEmpty = function(){
   return this.stack.length === 0;
}

var Q = new myQueue();
Q.push("A");
Q.push("B");
Q.push("C");

console.log(Q)
console.log((Q.pop()));
console.log(Q.isEmpty());
console.log((Q.pop()));
Q.push("D");
console.log(Q)
