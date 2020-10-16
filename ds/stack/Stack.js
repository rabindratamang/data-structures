/**
 * Stack constructor
 * @param {number} capacity
 */
function Stack(capacity){
    this.stack = [];
    this.top = -1;//initially top is set -1 representing empty stack
    this.capacity = capacity;
}

/**
 * Pushes value to the Stack
 * 
 * @param {number} value
 */
Stack.prototype.push = function(value){
    if(this.top === this.capacity-1){
        console.log('Stack overflow');
    }else{
        this.stack[++this.top] = value;
    }
}

/**
 * Pops value from the Stack
 * 
 * @returns
 */
Stack.prototype.pop = function(){
    if(this.isEmpty()){
        console.log('Stack is empty.')
    }else{
        return this.stack[this.top--];
    }

}

/**
 * Returns value at top of stack
 * 
 * @returns
 */
Stack.prototype.peek = function(){
    if(this.isEmpty()){
        console.log('Stack is empty.')
    }else{
        return this.stack[this.top];
    }
}

Stack.prototype.isEmpty = function(){
    return this.top === -1;
}

Stack.prototype.display = function(){
    for(let i = 0; i <= this.top; i++){
        console.log(this.stack[i]);
    }
}

let stack = new Stack(4);

stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.pop();
stack.display();
