/**
 * This was my initial solution to the problem.
 * This solution has a time complexity of O(n^2), where n is the value of the numRows parameter.
 *
 * @param {number} numRows
 * @return {number[][]}
 */
export function generate(numRows) {
    let output = []

    let previousRow = [];
    let rowNum = 1

    while (rowNum <= numRows) {
        let row = [];

        for (let i = 0; i < rowNum; i++) {
            if (i === 0) {
                row.push(1);
            } else if (i === rowNum - 1) {
                row.push(1);
            } else {
                row.push(previousRow[i - 1] + previousRow[i])
            }
        }

        output.push(row);
        previousRow = row;
        rowNum += 1;
    }

    return output;
}