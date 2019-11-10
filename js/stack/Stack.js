function Stack(capacity){
    this.stack = [];
    this.top = -1;
    this.capacity = capacity;
    //initially top is set -1 representing empty stack
}

Stack.prototype.push = function(value){
    if(this.top === this.capacity-1){
        console.log('Stack overflow');
    }else{
        this.stack[++this.top] = value;
    }
}

Stack.prototype.pop = function(){
    if(this.isEmpty()){
        console.log('Stack is empty.')
    }else{
        return this.stack[this.top--];
    }

}

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
