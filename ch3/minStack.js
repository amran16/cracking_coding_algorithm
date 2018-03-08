// T.C  :  Push : O(1)  Pop: O(1)  Top: O(1)  Getmin: O(1)
// S.C  :  O(n). If all the elements are in decreasing order, Aux stack = Main Stack
class minStack{

  constructor(){
    this.arr = [];
    this.minList = [];
  }

  push(val){
    this.arr.push(val);

    if(this.minList.length === 0 || val <= this.minList[this.minList.length - 1]){
        this.minList.push(val);
    }
  }

  pop(){
    if(this.arr[this.arr.length - 1] === this.minList[this.minList.length - 1]){
      return this.minList.pop();
    }

    return this.arr.pop();
  }

  top(){
    return this.arr[this.arr.length - 1]
  }

  getMin(){
    return this.minList[this.minList.length - 1]
  }

}

var stackmin = new minStack();
stackmin.push(10);
stackmin.push(7);
stackmin.push(15);
stackmin.push(9);
stackmin.push(5);
stackmin.push(22);

console.log(stackmin)
console.log(stackmin.getMin())
console.log(stackmin.pop())
console.log(stackmin.top())
console.log('\n')

var MinStack = function() {
    this.arr = [];
    this.minList = [];

};

MinStack.prototype.push = function(x) {

    this.arr.push(x);

    if(this.minList.length === 0 || x <= this.minList[this.minList.length - 1]){
       this.minList.push(x);
    }
};

MinStack.prototype.pop = function() {

    if(this.arr[this.arr.length - 1] === this.minList[this.minList.length -1]){
      this.minList.pop();
    }

    this.arr.pop();
};

MinStack.prototype.top = function() {

  return this.arr[this.arr.length - 1];

};

MinStack.prototype.getMin = function() {
    return this.minList[this.minList.length - 1];
};

var obj = new MinStack();
obj.push(77);
obj.push(88);
obj.push(99);
obj.push(66);
console.log(obj)
