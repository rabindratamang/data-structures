/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arraryReverse(arr = []){
    
    let left = 0;
    let right = arr.length;
    
    //swapping until both indexes are in the middle
    while(left < right){
        let temp = arr[left] ;
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

let reverse = arraryReverse([1,2,4,5,6]);
console.log(reverse);
