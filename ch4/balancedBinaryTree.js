// time: O(n);
// space: O(H)
// The "height" of a node in a binary tree is the length of the longest path from that node to a leaf.
// People define the height of an empty tree to be (-1).
//The difference between two nodes can't be greater than 1.
//if any side is -1, that means it's not balanced.

var isBalanced = function(root){

  return findDepth (root) !== -1;
  // if(findDepth(root) === -1) return false;
  // return true;

}

var findDepth = function(root){

   if(root === null) return 0;

   var leftDepth  = findDepth(root.left);
   var rightDepth = findDepth(root.right);

   if(leftDepth === -1 || rightDepth === -1) return -1

   if(Math.abs(leftDepth - rightDepth) > 1) return -1;

   return Math.max(left, right) + 1;
}

//            A  (Height = 2)
//          /   \
// (height =-1)  B (Height = 1) <-- Unbalanced because 1-(-1)=2 >1
//                \
//                 C (Height = 0)

// A Balanced Tree Example:
//
//          A (h=3)
//       /    \
//  B(h=1)      C (h=2)
// /          /   \
// D (h=0)  E(h=0)  F (h=1)
//                /
//               G (h=0)




// var isBalanced = function(root){
//
//
//      return findDepth(root) === -1 ? false : true;
//
//      // if(findDepth(root) === -1) return false;
//      // return true;
//
//     // if(findDepth(root) > -1) return true
//     // return false;
// }
