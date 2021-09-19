const {xmasTree, generateLevel} = require('./index');

describe("xmas tree tests", () => {
  it("renders tree for depth of 2", () => {
    const res = xmasTree(2);
    expect(res).toEqual(['_#_', '###', '_#_', '_#_']);
  });

  it("renders tree for depth of 4", () => {
    const res = xmasTree(4);
    expect(res).toEqual(['___#___', '__###__', '_#####_', '#######', '___#___', '___#___']);
  });

  it("renders tree for depth of 6", () => {
    const res = xmasTree(6);
    expect(res).toEqual(['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____']);
  });

})


describe ("generateLevel tests", () => {
  it("generates a level 0 of length 3", () => {
    const level = generateLevel(5, 3); 
    expect(level).toStrictEqual("_###_");
  });

  it("generate a level of 1", () => {
    const level = generateLevel(3, 1); 
    expect(level).toStrictEqual("_#_");
  });

  it("generates a level 1 of length 3", () => {
    const level = generateLevel(9, 5); 
    expect(level).toBe("__#####__");
  });

})
