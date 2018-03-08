// * N = dimension of matrix
// * Time: O(N^2)
// * Additional space: O(1)
function rotateImage(a) {

  if(a.length === 0 || a.length !== a[0].length) return false;

  var arr = [];

    for(var i = 0; i < a.length; i++){

      var newArr = [];

        for (var j = 0; j < a[i].length; j++) {
          //console.log(a[j][i])
          newArr.push(a[j][i]);
        }
        arr.push(newArr.reverse());
    }
    return arr;
}
console.log(rotateImage([[1, 2, 3],[4, 5, 6], [7, 8, 9]]))
console.log(rotateImage([
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
]))
