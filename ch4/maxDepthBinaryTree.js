function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}


var maxDepth = function(root){

   if(root === null) return 0;  //if(!root) return 0;
   if(root.left === null && root.right === null) return 1; //if(!root.left && !root.right) return 1;

   var leftDepth = maxDepth(root.left);
   var rightDepth = maxDepth(root.rigth);

   return Math.max(leftDepth, rightDepth) + 1;

}
