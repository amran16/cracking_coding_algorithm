//107. Binary Tree Level Order Traversal II

//    Input:
//       3
//      / \
//     9  20
//       /  \
//      15   7

// Output: [[15, 7], [9, 20], [3]]

// T.C  :  O(n),  where n is the number of nodes in the Tree
// S.C  :  O(w), where w is the width of the tree. w ~ n / 2 for a balanced tree.


var levelOrder = function(root){

  var que = [];
  var result = [];
  var cur = root;

  if(!cur) return [];

  que.push(root);

  while(que.length > 0){
    var queSize = que.length;
    var visited = [];

    for(var i = 0; i < queSize; i++){
      cur = que.shift();

      if(cur.left !== null) que.push(cur.left);
      if(cur.right !== null) que.push(cur.right);
      visited.push(cur.val);
    }
    result.push(visited);
  }
  result.reverse();
  return result;
}
