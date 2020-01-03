/**
 * @returns {*[]}
 */
String.prototype.toArray = function(){
    let tempArray = [];
    for(let i = 0; i < this.length; i++){
        tempArray.push(this[i]);
    }
    return tempArray;
}

/**
 * @param {*} [permutationOptions=[]]
 * @param {*} [set=[]]
 * @param {*} [results=[]]
 * @returns
 */
function permute(permutationOptions = [], set=[], results=[]){
    if(!permutationOptions.length) results.push([...set]);
    for(let i = 0 ; i < permutationOptions.length; i++){
        const newPermutationOptions =  permutationOptions.filter((n,index)=> index!==i);
        set.push(permutationOptions[i]);
        permute(newPermutationOptions, set, results);
        set.pop();
    }
    return results;
}

// n! output in permutation
let permutationOptions = "ABCD";

if (typeof permutationOptions === "string")
    permutationOptions = permutationOptions.toArray();

let result = permute(permutationOptions)

console.log(result);

