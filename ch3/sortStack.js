
function sortStack(stack){

  var temp = [];
  var count = 0

  while(!isEmpty(stack)){

     var r = stack.pop();

     while(!isEmpty(temp)> 0 && peek(temp) > r){
       stack.push(temp.pop())
       count++;
     }
     temp.push(r);
     for(var i = 0; i < count; i++){
       temp.push(stack.pop())
     }
  }

  while(!isEmpty(temp)){
    stack.push(temp.pop());
  }
  return stack;

}

function peek(stack){
  return stack[stack.length - 1];
}

function isEmpty(stack){
  return stack.length === 0
}
