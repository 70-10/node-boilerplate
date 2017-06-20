const assert = require("assert");
const hello = require("../lib/hello.js");

describe("hello", () => {
  it("hello", () => {
    assert(hello() === "hello");
  });
});
