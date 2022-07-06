function getSecondLargest(nums) {
    // Complete the function
    nums=nums.sort((a,b) => {
        return a-b;
    });
    let lastIdx=nums.length-2;
    console.log(nums[nums.length-1])
    while (nums[lastIdx]==nums[nums.length-1]) {
        console.log(nums[lastIdx] + " " + nums[nums.length-1])
        lastIdx--;
    }
    return nums[lastIdx];
}

let nums=[1,2,3,4,5,6,7,8,9,10]
console.log(getSecondLargest(nums))