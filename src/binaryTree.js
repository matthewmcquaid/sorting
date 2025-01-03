var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var root = new TreeNode("a");
root.left = new TreeNode("b");
root.right = new TreeNode("c");
root.left.left = new TreeNode("d");
root.left.right = new TreeNode("e");
root.right.left = new TreeNode("f");
console.log(root);
////////////////////////////////
// Depth First Values - Stack //
////////////////////////////////
var depthFirstValues = function (root) {
    if (root === null)
        return [];
    var stack = [root];
    var results = [];
    while (stack.length) {
        var node = stack.pop();
        results.push(node.value);
        console.log(node.value);
        if (node.right)
            stack.push(node.right);
        if (node.left)
            stack.push(node.left);
    }
    return results;
};
var depthFirstValuesRecursive = function (root) {
    if (root === null)
        return [];
    var leftValues = depthFirstValuesRecursive(root.left);
    var rightValues = depthFirstValuesRecursive(root.right);
    return __spreadArray(__spreadArray([root.value], leftValues, true), rightValues, true);
};
//////////////////////////////////
// Breadth First Values - Queue //
//////////////////////////////////
var breadthFirstValues = function (root) {
    if (root === null)
        return [];
    var queue = [root];
    var results = [];
    while (queue.length) {
        var node = queue.shift();
        results.push(node.value);
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
    return results;
};
var breadthFirstValuesRecursive = function (root) {
    if (root === null)
        return [];
    var queue = [root];
    var results = [];
    while (queue.length) {
        var node = queue.shift();
        results.push(node.value);
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
    return results;
};
var results1 = depthFirstValues(root);
var results2 = depthFirstValues(null);
var results3 = depthFirstValuesRecursive(root);
var results4 = depthFirstValuesRecursive(null);
var results5 = breadthFirstValues(root);
var results6 = breadthFirstValues(null);
var results7 = breadthFirstValuesRecursive(root);
var results8 = breadthFirstValuesRecursive(null);
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
