const test = require("ava");
const hello = require("../lib/hello.js");

test("hello", t => {
  t.true(hello() === "hello");
});
