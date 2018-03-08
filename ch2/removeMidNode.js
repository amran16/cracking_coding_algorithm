function Node(data){
  this.data = data;
  this.next = null;
}

function removeMidNode(node){

   if(node === null || node.next === null) return null;

    node.data = node.next.data;

    node.next = node.next.next;

}
