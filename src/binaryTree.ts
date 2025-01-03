
class TreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: string) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode("a");
root.left = new TreeNode("b");
root.right = new TreeNode("c");
root.left.left = new TreeNode("d");
root.left.right = new TreeNode("e");
root.right.left = new TreeNode("f");

console.log(root);

////////////////////////////////
// Depth First Values - Stack //
////////////////////////////////
const depthFirstValues = (root: TreeNode | null): string[] => {
    if (root === null) return [];

    const stack: TreeNode[] = [root];
    const results: string[] = [];
    
    while (stack.length) {
        const node = stack.pop()!;
        results.push(node.value);
        console.log(node.value);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return results;
};

const depthFirstValuesRecursive = (root: TreeNode | null): string[] => {
    if (root === null) return [];

    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);

    return [root.value, ...leftValues, ...rightValues];
};

//////////////////////////////////
// Breadth First Values - Queue //
//////////////////////////////////

const breadthFirstValues = (root: TreeNode | null): string[] => {
    if (root === null) return [];

    const queue: TreeNode[] = [root];
    const results: string[] = [];

    while (queue.length) {
        const node = queue.shift()!;
        results.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return results;
};

const breadthFirstValuesRecursive = (root: TreeNode | null): string[] => {
    if (root === null) return [];

    const queue: TreeNode[] = [root];
    const results: string[] = [];

    while (queue.length) {
        const node = queue.shift()!;
        results.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return results;
};

let results1 = depthFirstValues(root);
let results2 = depthFirstValues(null);
let results3 = depthFirstValuesRecursive(root);
let results4 = depthFirstValuesRecursive(null);
let results5 = breadthFirstValues(root);
let results6 = breadthFirstValues(null);
let results7 = breadthFirstValuesRecursive(root);
let results8 = breadthFirstValuesRecursive(null);

//////////////////////////////////
// OUTPUT RESULTS               //
//////////////////////////////////
console.log("RESULTS - 1 : " + results1);
console.log("RESULTS - 2 : " + results2);
console.log("RESULTS - 3 : " + results3);
console.log("RESULTS - 4 : " + results4);
console.log("RESULTS - 5 : " + results5);
console.log("RESULTS - 6 : " + results6);
console.log("RESULTS - 7 : " + results7);
console.log("RESULTS - 8 : " + results8);