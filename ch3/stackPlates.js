class SetOfStacks{

  constructor(capacity){
    this.stackSet = [];
    this.capacity = capacity;
  }

  push(val){
    var last = this.stackSet.length - 1;

    if(this.stackSet.length === 0 || this.stackSet[last].length === this.capacity){
      var newStack = [];
      newStack.push(val);
      this.stackSet.push(newStack);
    }else{
      this.stackSet[last].push(val) //if the stack not full
    }
  }

  pop(){
    var last = this.stackSet.length - 1;

     if(this.Stack === 0){
       return null;
     }else if(this.stackSet[last].length === 0){
       this.stackSet.pop();
     }
      return this.stackSet[last].pop();
  }

  popAt(index){
    return this.stackSet[index].pop()
  }

  isEmpty(){
    return this.stackSet.length === 0;
  }

  peek(){
    var current = this.stackSet[this.stackSet.length - 1];
    return current[current.length -1]
  }

}

var stack = new SetOfStacks(3);

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(7)
stack.push(10)
stack.push(6)
stack.push(9)

console.log(stack.stackSet);
console.log(stack);
console.log(stack.isEmpty());
console.log('This is peek', stack.peek());
console.log('This is popA()', stack.popAt(1));
console.log('This is pop',stack.pop());
//console.log(stack.pop());
//console.log(stack.pop());
