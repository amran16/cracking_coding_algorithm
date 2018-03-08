// 4.8 First Common Ancestor
//236. Lowest Common Ancestor of a Binary Tree

// returns p, if the root's subtree includes p (and not q)
// returns q, if the root's subtree includes q (and not p)
// returns null, if neither p nor q are in the root's subtree
// else, returns the common ancestor pf p and q.

var firstCommonAncestor = function(root, p, q){

   if(!root) return null;

   if(root === p || root === q) return root;

   var left = firstCommonAncestor(root.left, p, q);
   var right = firstCommonAncestor(root.right, p, q);

   if(left && right) return root;
   if(!left && !right) return null;

   return left || right;

}
