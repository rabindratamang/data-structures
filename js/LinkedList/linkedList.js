function equal(x,y){
    return x === y;
}

/**
 * @param {*} value
 * @param {*} [next=null]
 */
function LinkedListNode(value, next = null){
    this.value = value;
    this.next = next;
}

function LinkedList(){
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.append = function(value){
    const newNode = new LinkedListNode(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        
        return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
}

LinkedList.prototype.prepend = function(value){
    const newNode = new LinkedListNode(value,this.head);
    this.head = newNode;
    if(!this.tail){
        this.tail = newNode;
    }
}



LinkedList.prototype.display =function(){
    let node =  this.head;
    while(node){
        console.log(node.value);
        node = node.next;
    }
}

LinkedList.prototype.delete = function (value){
    if(!this.head){
        return null;
    }

    let deletedNode = null;
    // If the head must be deleted then make next node that is differ
    // from the head to be a new head.
    while (this.head && equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if(equal(currentNode.next.value,value)){
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
        }else{
            currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
}


LinkedList.prototype.deleteTail = function (){
    const deletedTail = this.tail;

    //in case of onely one node
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        return deletedTail;
    }

    let currentNode = this.head;

    while(currentNode.next){
        //tail identified and set to null
        if(!currentNode.next.next){
            currentNode.next = null;
        }else{
            currentNode = currentNode.next;
        }
    }
    this.tail = currentNode;

    return deletedTail;
}

LinkedList.prototype.deleteHead = function(){
    if(!this.head){
        return null;
    }

    const deletedHead =  this.head;

    if(this.head.next){
        this.head = this.head.next;
    }else{
        this.head = null;
        this.tail = null;
    }

    return deletedHead;
}

LinkedList.prototype.find = function(value){
    if(!this.head){
        return null;
    }
    
    let currentNode = this.head;

    while(currentNode){
        if(equal(currentNode.value,value)){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.reverse = function(){

    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
}

LinkedList.prototype.arrayToLinkedList = function( data = []){
    data.forEach(value=>{
        this.append(value);
    })
    return this;
}

LinkedList.prototype.linkedListToArrayNodes = function(){
    let currentNode = this.head;
    let nodes = [];
    while(currentNode){
        nodes.push(currentNode);
        currentNode = currentNode.next;
    }
    return nodes;
}

LinkedList.prototype.linkedListToArrayData = function(){
    let currentNode = this.head;
    let nodes = [];
    while(currentNode){
        nodes.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return nodes;
}

/**
 * @todo reverse link list
 */

const list = new LinkedList();
list.append(8)
list.append(9)
list.append(7)
// list.arrayToLinkedList([10,11,12])
list.display();
list.reverse();
list.display();

console.log(list.linkedListToArrayNodes())
