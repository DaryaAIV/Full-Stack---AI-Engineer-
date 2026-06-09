/* findNode method-that receives a value parameter and returns true or false if that value exists in your tree.*/
class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value) {
        if(value === this.value){
            return true;
        }
        else if(value < this.value){
            if(this.leftChild){
                return this.leftChild.findNode(value)
            }
            else{
                return false;
            }
        }
        else if(value > this.value){
            if(this.rightChild){
                return this.rightChild.findNode(value)
            }
            else{
                return false;
            }
        }
    }
}

const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bSTree = new BSNode();
letters.forEach(l => bSTree.insertNode(l));

//Use the following to test
console.log(bSTree.findNode("H"));// should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F")); // should print false
console.log(bSTree.findNode("y")); // should print false - we didn't make the tree case sensitive!
