//Time: O(n)
//Space: O(n)
var pathSum = function(root, sum) {

     var result = [], paths = [];

     pathSumHelper(root, sum, paths, result);

     return result;

}

 var  pathSumHelper = function(root, sum, paths, result){

      if(!root) return false;

      paths.push(root.val)

     if(!root.left && !root.right){
        if(root.val == sum){
            result.push(paths.slice());
        }
    }

    var l = pathSumHelper(root.left, sum - root.val, paths, result);
    var r = pathSumHelper(root.right, sum - root.val, paths, result);

    paths.pop();

};

//2nd Way

var pathSum = function(root, sum){

  var result = [], path = [];

  pathSumHelper(root, sum, path, result, 0);

  return result;

}

var pathSumHelper = function(root, sum, path, result, curSum){

  if(!root) return false;

   path.push(root.val);

   curSum += root.val;

  if(!root.left && !root.right){
    if(curSum === sum){
      result.push(path);
    }
  }

  var l = pathSumHelper(root.left, sum, path.concat(), result, curSum);
  var r = pathSumHelper(root.right, sum, path.concat(), result, curSum)

}
