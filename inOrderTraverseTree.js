/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];

    function inOrderTraverse(node) {
        if(node === null) {
            return;
        }

        inOrderTraverse(node.left) // traverse the left node
        result.push(node.val) // visit the root
        inOrderTraverse(node.right) // Traverse the right node
    }

    inOrderTraverse(root);
    return result;
};
