const test = require("ava");
const hello = require("../lib/hello.js");

test("hello", t => {
  t.is(hello(), "hello");
});
