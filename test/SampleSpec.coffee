assert = require "power-assert"

Sample = require "../src/Sample"

describe "Sample Spec", ->
  describe "double", ->
    it "2 double = 4", ->
      result = Sample.double 2
      assert result is 4
