function MergeSort(arr = []){
    if(arr.length<2) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle)
    let right = arr.slice(middle+1,arr.length - 1);
    console.log(left)
    console.log(right)
}

MergeSort([1,4,5,3,2])