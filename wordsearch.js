
const wordSearch = (letters, word) => {
  //combines arrays horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // callback
  // adds vertically
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) { // grab the length of the first row, it will give us column legnth since it's the same
    let c = []; // here's where we will store our column values
    for (let r = 0; r < matrix.length; r++) { // going through rows
      c.push(matrix[r][i]); // push rows into column
    }
    result.push(c); // column into result
  }
  return result;
};


module.exports = wordSearch;