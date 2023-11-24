/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    mergedArray = [...nums1, ...nums2]
    sortedMergedArray = mergedArray.sort((a, b) => {
        return a - b;
    })

    if(sortedMergedArray.length % 2 === 0) {
        const middle1 = sortedMergedArray[(sortedMergedArray.length / 2) - 1]
        const middle2 = sortedMergedArray[(sortedMergedArray.length / 2)]
        const median = (middle1 + middle2) / 2
        return median.toFixed(5)
    }
    else {
        const median = sortedMergedArray[Math.floor(sortedMergedArray.length / 2)]
        return median.toFixed(5)

    }
};
