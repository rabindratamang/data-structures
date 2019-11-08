/**
 *
 *
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

LinkedList.prototype.display = function(){
    let node =  this.head;
    while(node){
        console.log(node.value);
        node = node.next;
    }
}


const list = new LinkedList();
list.append(8)
list.prepend(9)
list.append(7)
list.display();