function sortedArrayToBST(nums){

  return createTree(nums, 0, nums.length-1);
  
}


function createTree (nums, start, end){

  if(start > end) return null;

  var mid = Math.floor((start + end)/2)

  var newNode = new TreeNode(nums[mid]);

  newNode.left = createTree(nums, start, mid - 1);
  newNode.right = createTree(nums, mid + 1, end);

  return newNode;
}
