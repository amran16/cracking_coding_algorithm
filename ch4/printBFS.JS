//102. Binary Tree Level Order Traversal

//    Input:
//       3
//      / \
//     9  20
//       /  \
//      15   7

// Output: [[3], [9, 20], [15, 7]]

// T.C  :  O(n),  where n is the number of nodes in the Tree
// S.C  :  O(w), where w is the width of the tree. w ~ n / 2 for a balanced tree.


var levelOrder = function(root){

  var que = [];
  var result = [];
  var cur = root;

  if(!cur) return [];

  que.push(cur);

  while(que.length > 0){

    queSize = que.length;
    var visited = [];

    for(var i = 0; i < queSize; i++){

      cur = que.shift();

      if(cur.left  !== null) que.push(cur.left);
      if(cur.right !== null) que.push(cur.right);

      visited.push(cur.val)
    }
    result.push(visited)
  }
  return result;
}

var levelOrderDFS = function(root){

   var result = [];

   levelOrderDFS(root, result, 0);

   return result;

}

function levelOrderDFS(root, result, depth){
  if(!root) return;
  if(depth === result.length) result.push(root.val);

  // var arr = result[depth]  //??????
  // arr.push(root.val);     //????

  levelOrderDFS(root, result, depth + 1);
  levelOrderDFS(root, result, depth + 1);

}
