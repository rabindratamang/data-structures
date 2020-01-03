String.prototype.toArray = function(){
    return this.split("")
}

/**
 * @param {*[]} permutationOptions
 * @returns {*[]}
 */
function permute(permutationOptions = [], set=[], results=[]){
    if(!permutationOptions.length) results.push([...set])

    for(let i = 0 ; i < permutationOptions.length; i++){
        const newPermutationOptions =  permutationOptions.filter((n,index)=> index!==i);
        set.push(permutationOptions[i]);
        permute(newPermutationOptions, set, results)
        set.pop()
    }

    return results;
}


// n! output in permutation
let input = "ABC";

let permutationOptions = input.toArray()
let result = permute(permutationOptions)

