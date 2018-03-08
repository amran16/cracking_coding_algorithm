// time: O(n);
// space: O(H)

var hasPathSum = function(root, sum){

  if(!root) return false;

  if(!root.left && root.right){
     return root.val === sum;
  }

  var l = hasPathSum(root.left, sum - root.val);
  var r = hasPathSum(root.right, sum - root.val);

  return r || l;

}


//2nd way
var hasPathSum = function(root, sum){
  return pathSumHelper(root, sum, 0);
}

var pathSumHelper = function(root, sum, curSum){

  if(!root) return false;

  curSum += root.val;

  if(!root.left && !root.right){
    if(curSum === sum){
      return true;
    }
  }

  var l = pathSumHelper(root.left, sum, curSum);
  var r = pathSumHelper(root.right, sum, curSum)

  return l || r

}
