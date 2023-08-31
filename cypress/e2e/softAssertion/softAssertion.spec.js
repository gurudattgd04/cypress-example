const _ = require("lodash");
const jsonAssertion = require("soft-assert/index");

it("Let's test soft assertion", () => {
  jsonAssertion.softAssert("test", "tst", "assertion error for softAssert 1");
  jsonAssertion.softAssert("sbx", "sbx");
  jsonAssertion.softAssert(1, 2, "Number mismatch");
  jsonAssertion.softAssertAll();
});
