/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    function pushRemainingIntervals(i) {
        while (i < intervals.length) {
            result.push(intervals[i])
            i++
        }
    }

    let result = [];

    if (intervals.length === 0) {
        return [newInterval];
    }

    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        return [...intervals, newInterval];
    }

    for (let i in intervals) {
        if (newInterval[0] > intervals[i][1]){
            result.push(intervals[i]);
        }

        else if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            pushRemainingIntervals(i);
            break
        }

        else {
            const startingDigit = Math.min(newInterval[0], intervals[i][0]);

            while (parseInt(i) + 1 < intervals.length && newInterval[1] >= intervals[parseInt(i) + 1][0]) {
                i++;
            }

            const endingDigit = Math.max(newInterval[1], intervals[i][1])
            result.push([startingDigit, endingDigit]);
            i++;
            pushRemainingIntervals(i);
            break
        }
    }

    return result;
};