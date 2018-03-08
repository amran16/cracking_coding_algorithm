var isValidBST = function(root) {
    return isBST(root, -Infinity, Infinity);
};

function isBST(root, min, max){

    if(!root) return true;

    if((min >= root.val) || (max <= root.val)) return false;

    var l = isBST(root.left, min, root.val);
    var r = isBST(root.right, root.val, max);

    return l && r

}
