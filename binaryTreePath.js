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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = []

    // perform pre order traversal to find paths
    function preOrder(node, currPath) {
        // if no node value return; at the start
        if (!node) return;

      // push the current node
        currPath.push(node.val)
      // if there is not left and right (leaf node) then join ->
        if (!node.left && !node.right) {
            paths.push(currPath.join("->"))
            return;
        }
        
        preOrder(node.left, [...currPath])
        preOrder(node.right, [...currPath])

    }

    preOrder(root, [])

    return paths;
};
