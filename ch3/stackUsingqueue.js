// T.C  :  Push : O(n)  Pop: O(1)  Top: O(1)  Getmin: O(1)
// S.C  :  O(1).

function Stack(){
 this.que = [];
}

Stack.prototype.push = function(val){
  var temp = [];

  this.que.push(val); //push to the que first

  while(this.que.length > 0){
    temp.push(this.que.pop());
  }

  while(temp.length > 0){
    this.que.push(temp.pop())
  }

}

Stack.prototype.pop = function(){

    return this.que.pop();
}

Stack.prototype.peek = function(){

    return this.que[this.que.length - 1]

}

Stack.prototype.isEmpty = function(){
  return this.que.length === 0;
}


var stack = new Stack();
console.log(stack.isEmpty())
stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack)
console.log(stack.pop());
console.log(stack.isEmpty())
console.log(stack.peek())
