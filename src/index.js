
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  var newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    } newArr = newArr.concat(matrix[i]);
    
  }
  return newArr;
}
