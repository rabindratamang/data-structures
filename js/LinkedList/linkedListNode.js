class LinkedListNode{

    /**
     *Creates an instance of LinkedListNode.
    * @param {number} value
    * @param {LinkedListNode} [next=null]
    */
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

    toString(callback){
        return callback?callback(this.value): `${this.value}`;
    }
    
}