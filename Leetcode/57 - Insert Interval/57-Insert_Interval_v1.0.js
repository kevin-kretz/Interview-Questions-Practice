/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    function mergeVariables(a, b) {
        return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
    }

    let i = 0;
    let result = [];
    
  
    while (i < intervals.length && newInterval[0] > intervals[i][1]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval = mergeVariables(newInterval, intervals[i]);
        i++;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++
    }

    console.log(result)
    return result;
}

insert([[1,3],[6,9]], [2,5]);