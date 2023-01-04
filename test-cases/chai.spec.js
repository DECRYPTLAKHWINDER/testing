const chai = require("chai");
const { stringify } = require("querystring");
const assert = chai.assert;

describe("-----------First Chai Test-case------------", function () {
  let userName = 125;
  let myList = {
    item: [
      {
        id: 1,
        name: "demo",
      },
      {
        id: 1,
        name: "demo",
      },
    ],
    title: "user list",
  };
  it("check number", function () {
    assert.typeOf(userName, "number");
  });
  it("check equal", function () {
    assert.equal(userName, 125);
  });
  it("length match", function () {
    assert.lengthOf(myList.item, 2);
  });
});
