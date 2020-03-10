module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    let sortedArr = [];

    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? sortedArr.push(matrix[i]) : sortedArr.push(matrix[i].reverse());
    }
    
    return sortedArr.flat(Infinity);
}