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

    // interval === intervals[i]
    // interval[1] === interval[i][1]
    for (let [i, interval] of intervals.entries()) {

        if (newInterval[0] > interval[1]){
            result.push(interval);
        }

        else if (newInterval[1] < interval[0]) {
            result.push(newInterval);
            pushRemainingIntervals(i);
            break
        }

        else {
            const startingDigit = Math.min(newInterval[0], interval[0]);

            while (i + 1 < intervals.length && newInterval[1] >= intervals[i + 1][0]) {
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

insert([[1,3],[6,9]], [2,5]);