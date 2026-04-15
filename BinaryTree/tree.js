class TreeNode{
    constructor(val){
        this.val= val;
        this.left= null;
        this.right=null;
    }
}

let rootNode= new TreeNode(5);
rootNode.left= new TreeNode(6);
rootNode.right= new TreeNode(7);
rootNode.left.left= new TreeNode(8);
rootNode.left.right= new TreeNode(9);
rootNode.left.right.left= new TreeNode(1);
console.log(rootNode)

class binary_tree{
    constructor(val){

    }
}