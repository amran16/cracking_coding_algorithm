var largesttargets = function(root) {

      var result = [];

      if(root === null) return result;

      largesttargetshelper(root, result, 0);

      return result;
};

var largesttargetshelper = function(root, result, depth){

      if(!root) return;

      if(depth === result.length){
         result.push(root.val);
      }else{
        result[depth] = Math.max(root.val, result[depth]);
      }

      largesttargetshelper(root.left, result, depth + 1);
      largesttargetshelper(root.right, result, depth + 1);
}
