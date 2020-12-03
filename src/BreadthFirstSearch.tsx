export const breadthFirstSearch = (tree, rootNode, searchValue) => {
  let queue = [rootNode];
  let bestPath = [];
  let currentNode;
  while (queue.length) {
    currentNode = queue.shift();
    bestPath.push(currentNode.value);
    if (currentNode.value === searchValue) {
      return bestPath;
    }
    if (currentNode.left) {
      queue.push(tree[currentNode.left]);
    }
    if (currentNode.right) {
      queue.push(tree[currentNode.right]);
    }
  }
  return null;
};
