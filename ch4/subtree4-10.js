//Given two non-empty binary trees s and t, check whether tree t has exactly
//the same structure and node targets with a subtree of s.
//572. Subtree of Another Tree

function isSubtree (s, t){

  if(!s) return false
  if(isSame(s, t)) return true

  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSame (s, t){
  if(!s && !t) return true;
  if(!s || !t) return false;
  if(s.val !== t.val) return false;

  return isSame(s.left, t.left) && isSame(s.right, t.right)
}
