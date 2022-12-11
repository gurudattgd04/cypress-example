it("JSON schema validator", () => {
  const schema = {
    title: "Test Schema v1",
    type: "object",
    required: ["postId", "id", "name", "email"],
    properties: {
      postId: {
        type: "number",
        minimum: 1,
      },
      id: {
        type: "number",
        minimum: 1,
      },
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      body: {
        type: "string",
      },
    },
  };
  const expectedValue = [
    {
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus",
    },
  ];

  console.log(expectedValue.length);
  expect(expectedValue[0]).to.be.jsonSchema(schema);
});
