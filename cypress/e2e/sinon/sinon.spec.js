describe("sinon tests", () => {
  const obj = {};
  before(() => {
    obj.foo = function foo(a, b) {
      return a;
    };
  });
  it("sinon js tests stub", () => {
    const stub = cy.stub(obj, "foo");
    obj.foo.callThrough();
    // obj.foo("foo", "bar");
    // stub.onFirstCall().returns("a");
    expect(obj.foo("foo", "bar")).to.eq("foo");
    expect(stub).to.be.called;
    stub.withArgs("a", "b").callsFake(function foo(a, b) {
      return "blah";
    });

    expect(obj.foo("foo", "bar")).to.eq("foo");
    expect(obj.foo("a", "b")).to.eq("blah");
  });
});
