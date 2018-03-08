function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTreeSearch(){
  this.root = null;
}


BinaryTreeSearch.prototype.returnMax = function(root){
  var result = [];
  var queue = [];

  if(root === null) return result;

   queue.push(root);

  while(queue.length > 0){

    var max = Number.MIN_SAFE_INTEGER;

    var queSize = queue.length;

    for(var i = 0; i < queSize; i++){

      var current = queue.shift();

      max = Math.max(current.val, max)

      if(current.left !== null){
         queue.push(current.left);
      }

      if(current.right !== null){
        queue.push(current.right);
      }

    }
    result.push(max)
  }

  return result;
}
