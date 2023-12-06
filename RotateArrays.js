var rotate = function(nums, k) {
    
    const n = nums.length;
    k = k % n;
    //reverse the entire array
    reverse(nums, 0, n-1);

    //reverse the first k elements
    reverse(nums, 0, k-1)

    //Reverse the remaining elements
    reverse(nums, k, n-1)

};

// Helper function to reverse the entire array between start and end indices
function reverse(nums, start, end) {
    while(start < end ) {
        const temp = nums[start];
        nums[start] = nums[end]
        nums[end] = temp;
        start++;
        end--;
    }
}
