var preorderTraversal = function(root) {

    var stack = [];
    var result = [];

    //if(!root) return result;

    stack.push(root);

    while(stack.length !== 0){

      var node = stack.pop();

        if(node !== null){
          result.push(node.val);
          stack.push(node.right);
          stack.push(node.left);
        }

    }

    return result;
};
