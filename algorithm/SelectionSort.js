function selection_sort(array, len)  
{ 
    for(let i = 0; i < len ; i++) 
    { 
        let low = i;
        for(let j = i + 1; j < len ; j++) 
        { 
            if (array[j] < array[low]) 
            { 
                low = j; 
            } 
        } 
          
        if (array[i] > array[low]) 
        { 
            let tmp = array[i]; 
            array[i] = array[low]; 
            array[low] = tmp; 
        } 
    }
    
    return array;
} 

let numbers = [5,6,4,2,7,1]; 
let sortedArray = selection_sort(numbers, numbers.length);
console.log(sortedArray)