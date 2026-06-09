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

    removeNode(parent, valToDelete) {
        if(valToDelete < this.value){
            if(this.leftChild){
                this.leftChild.removeNode(this, valToDelete);
                return this;
            }
            else{
                return false;
            }
        }
        else if(valToDelete > this.value){
            if(this.rightChild){
               this.rightChild.removeNode(this, valToDelete);
               return this;
            }
            else{
                return false;
            }
        }
        //deleting the node
        else if(valToDelete === this.value){
            //case1
            if(!this.rightChild && !this.leftChild){
                if(parent.rightChild === this){
                    parent.rightChild = null;
                    return this;
                }
                else if(parent.leftChild === this){
                    parent.leftChild = null;
                    return this;
                }
            }
            //case2
            else if(this.rightChild && !this.leftChild){
                if(parent.rightChild === this){
                    parent.rightChild = this.rightChild;
                    return this;
                }
                else if(parent.leftChild === this){
                    parent.leftChild = this.rightChild;
                    return this;
                }
            }
            //case3
            else if(!this.rightChild && this.leftChild){
                if(parent.rightChild === this){
                    parent.rightChild = this.leftChild;
                    return this;
                }
                else if(parent.leftChild === this){
                    parent.leftChild = this.leftChild;
                    return this;
                }
            }
            //case4
            else{
                let minVal = this.findMin(this.rightChild);
                this.value = minVal;
                this.rightChild.removeNode(this, minVal);
                return this;
            }
        }
    }
    findMin(root){
        let curr = root;
        while(curr.leftChild){
            curr = curr.leftChild;
        }
        return curr.value
    }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 

