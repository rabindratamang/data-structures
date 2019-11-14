
function bubbleSort(arr, len){
    for(let i = 0; i < len - 1; i++){
        for(let j = 0; j < len - i ; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}

let unsortedArray = [10,5,1,4,2,8];
let length = unsortedArray.length;
let sortedArray = bubbleSort(unsortedArray,length);

console.log(sortedArray);