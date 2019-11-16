/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let maxArr = [];
    for(let i=0; i<= nums.length - k; i++){
        
        let max = nums[i];
        for(let j=i;j<i+k;j++){
            if(nums[j]>max){
                max = nums[j];
            }
        }
        maxArr.push(max);
    }
    
    return maxArr;
};

console.log(maxSlidingWindow([1,6,7,8,9,4,3],2));