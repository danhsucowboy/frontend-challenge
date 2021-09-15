class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this._first = null;
        this._last = null;
    }

    push(inputValue) {
        let newNode = new Node(inputValue);
        if(!this._first){
            this._first = newNode;
            this._last = newNode;
        }
        else{
            let temp = this._first;
            this._first = newNode;
            this._first.next = temp;
        }
    }

    pop(){
        if(!this._first)
            return null;
        let temp = this._first;
        if(this._first === this._last)
            this._last = null;
        this._first = this._first.next;
        return temp.val;
    }

    size(){
        if(!this._first)
            return 0;

        let curr = this._first;
        let counts = 0;
        while(curr != null){
            curr = curr.next;
            counts++;
        }

        return counts;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop());
console.log(myStack.size());