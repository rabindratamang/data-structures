function fibonacci(n){
    if(n < 2){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function fibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }
console.log(fibonacciIterative(8));