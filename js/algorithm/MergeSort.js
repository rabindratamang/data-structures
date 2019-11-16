function merge(left,right){
    console.log(left)
    console.log(right)    
}

function mergeSort(arr = []){
    if(arr.length<2) return arr;
    let middle = Math.floor(arr.length/2);
    console.log(middle)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
    console.log(left)
    console.log(right)
}

mergeSort([1,4,5,3,2])