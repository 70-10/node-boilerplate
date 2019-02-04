const lib = require("../src/");

describe("hello", () => {
  it("hello", () => {
    expect(lib.hello()).toBe("hello");
  });
});
