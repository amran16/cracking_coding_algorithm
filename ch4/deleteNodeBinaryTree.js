var deleteNode = function(root, key) {
    if(!root) return null;

    if(key < root.val){
      root.left = deleteNode(root.left, key);
    }else if (key > root.val){
      root.right = deleteNode(root.right, key);
    }
    else{
      // deleting root with no children
      if(!root.left && !root.right){
        return root = null;
      }

      // deleting root with one children
      if(!root.left){
        return root = root.right;
      }else if(!root.right){
         return root = root.left;
      }

      // Deleting root with two children
      var minNode = findMinroot(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, root.val);
      //root.right = deleteNode(root.right, minNode.val);
    }
    return root;
};

function findMinroot(root){

  if(!root) return null;

    while(root.left !== null){
      root = root.left;
    }
    return root;
}
