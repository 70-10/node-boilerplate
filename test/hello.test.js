const assert = require("assert");
const lib = require("../src/");

describe("hello", () => {
  it("hello", () => {
    assert(lib.hello() === "hello");
  });
});
