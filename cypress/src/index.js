const path = require("path");
const fs = require("fs");
const babel = require("@babel/parser");
var Gherkin = require("@cucumber/gherkin");
var Messages = require("@cucumber/messages");
const parser = require("gherkin-parse");
const glob = require("glob");
const globby = require("globby");

const source = fs.readFileSync(
  "cypress/e2e/alias-example/alias.spec.js",
  "utf8"
);

const readFiles = () => {
  let arrayTest = [];
  const path = require("path");
  const files = glob.sync(path.resolve(__dirname, "../e2e/features/*.feature"));
  files.forEach((file) => {
    const jsonObject = parser.convertFeatureFileToJSON(file);
    console.log("Feature :", jsonObject.feature.name);

    jsonObject.feature.children.forEach((value, index, array) => {
      console.log("My value:", value);
      if (value.type.includes("Scenario")) {
        let tagList = [];
        value.tags.forEach((tag) => {
          tagList.push(tag.name);
        });
        const testObj = {
          feature: jsonObject.feature.name,
          scenario: value.name,
          tags: tagList.toString(),
        };
        console.log("value :", testObj);
        arrayTest.push(testObj);
      }
    });
  });
  //arrayTest.push("1");
  generateXls(arrayTest);
  return arrayTest;
};

function generateXls(arr) {
  var fs = require("fs");
  var NodeXls = require("node-xls");
  var data = [
    {
      foo: "aaa",
      stux: new Date(),
      boom: "boom",
    },
    {
      foo: "bbb",
      stux: new Date(),
      boom: "boom again",
    },
  ];
  var tool = new NodeXls();
  // columns will be ordered by ["stux", "foo", "boom"]; column "boom" will be named "hello"
  var xls = tool.json2xls(arr);
  fs.writeFileSync(
    path.resolve(__dirname, "../e2e/features/output.xlsx"),
    xls,
    "binary"
  );
}

// generateXls();
console.log("final output:", readFiles());
