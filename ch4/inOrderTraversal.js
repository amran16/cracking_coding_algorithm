var inorderTraversal = function(root) {

    var result = [];

    if(!root) return result;

     traverseHelper(root, result);

     return result;

};

function traverseHelper(root, result){

    if(!root) return;

    traverseHelper(root.left, result);
     result.push(root.val)
    traverseHelper(root.right, result);
}

// var inorderTraversal = function(root) {
    
//     if(!root) return;
    
//     var result = [];
//     var stack = [];
    
//     stack.push(root)
//     while(stack.length !== 0){
//       var node = stack.pop();
//         if(node !== null){
//           stack.push(node.left)
//           result.push(node.val);
//           stack.push(node.right);
//         }   
//     }
//     return result;
// };
