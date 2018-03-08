var mergeTwoListsRecursive = function(l1, l2) {

    if(!l1) return l2;

    if(!l2) return l1;

    // if(!l1 || !l2){
    //   return !l1 ? l2 : l1;
    // }

    if(l1.val < l2.val){
      l1.next = mergeTwoListsRecursive(l1.next, l2);
      return l1;
    }
    else{
      l2.next = mergeTwoListsRecursive(l2.next, l1);
      return l2;
    }

};


var mergeTwoListsIterative = function(l1, l2){
  var dummy = new ListNode(0);
  var fakehead = dummy;

  while(l1 && l2){
    if(l1.val < l2.val){
      dummy.next = l1;
       l1 = l1.next;
    }else{
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  dummy.next = l1 ? l1 : l2;

  return fakehead.next;

}
