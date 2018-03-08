// Fib(n){
//   F0, F1, F2, F3, .... Fn
//   if(n <= 1) return n;
//   if(Fn is in the memory) return Fn;
//   else{
//     Fn <- Fib(n-1) + Fib(n-2)
//     Save Fn in the memory
//     return Fn;
//   }
// }

function tripleStep (n, memo={}){

  if(n <= 1) return n;

  if(memo[n]) return memo[n]   //if n is in the memory return it

  memo[n] = tripleStep (n - 1, memo) + tripleStep (n - 2, memo) + tripleStep (n - 3, memo)
  //else calculate it and save it in the memory

  return memo[n];  //return it

}
console.log(tripleStep(7))
console.log('------------------')


function tripleStep0 (n){

  if (n <= 1) return n;

  return tripleStep0 (n - 1) + tripleStep0 (n - 2);


}
console.log(tripleStep0(6))
//console.log(tripleStep0(40)) //This takes long time
