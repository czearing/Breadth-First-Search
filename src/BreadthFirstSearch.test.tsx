import { breadthFirstSearch } from "./BreadthFirstSearch";
import { testTree } from "./TestTree";

describe("BreadthFirstSearch", () => {
  it("returns the correct path", () => {
    expect(breadthFirstSearch(testTree, testTree[10], "12")).toStrictEqual([
      "10",
      "4",
      "17",
      "1",
      "9",
      "12"
    ]);
  });
  it("handles an item not in the tree", () => {
    expect(breadthFirstSearch(testTree, testTree[10], "122")).toStrictEqual(
      null
    );
  });
});
