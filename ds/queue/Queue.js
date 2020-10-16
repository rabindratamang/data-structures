function Queue(capacity){
    this.capacity = capacity;
    this.queue = [];
    this.front = this.rear = 0;
}

Queue.prototype.enqueue = function(x){
    if(this.capacity === this.rear){
        return 'queue full';
    }else{
        this.queue[this.rear] = x;
        this.rear ++;
    }
}

Queue.prototype.dequeue = function(){
    if(this.isEmpty()){
        return 'queue is empty';
    }else{
        for(let i = 0; i < this.rear - 1; i++ ){
            this.queue[i] = this.queue[i+1];
        }
        if(this.rear < this.capacity){
            this.queue[this.rear] = 0;
        }
        this.rear--;
    }
}

Queue.prototype.front = function(){
    if(this.isEmpty()){
        return null;
    }else{
        return this.queue[this.front];
    }
}

Queue.prototype.display = function(){
    if(this.isEmpty()){
        console.log('Queue is empty');
    } else {
        for( let i = this.front; i < this.rear -1; i++){
            console.log(this.queue[i]);
        }
    }
}

Queue.prototype.isEmpty = function(){
    return this.front === this.rear;
}


let q = new Queue(5);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(3);
console.log(q.enqueue(3));//queue full;

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();//queue is empty
q.display();