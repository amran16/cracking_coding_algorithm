//   running time: O(n) -> Assuming Set is a HashSet structure with O(1) access times
//   space: O(n)

function Node(val){
  this.val = val;
  this.next = null;
}

function LinkedList (){
   this.head = null;
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
    this.length++;
}

LinkedList.prototype.removeDups = function(){

  if(!this.head){
    return;
  }

  var currentNode = this.head;
  var saveObj = {};
  var previousNode = null;

  while(currentNode){
    if(!saveObj[currentNode.val]){
      saveObj[currentNode.val] = true;
      previousNode = currentNode
    }else{
      previousNode.next = currentNode.next;
      this.length--;
    }
    currentNode = currentNode.next
  }
}


var list = new LinkedList();

list.push(5);
list.push(12);
list.push(78);
list.push(78);
list.push(5);
list.push(12);
list.push(78);
list.push(4);
list.push(12);

list.removeDups()

console.log(JSON.stringify(list,null,3))
console.log('------------------------------------')
