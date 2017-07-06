const assert = require("assert");
const hello = require("../src/hello.js");

describe("hello", () => {
  it("hello", () => {
    assert(hello() === "hello");
  });
});
