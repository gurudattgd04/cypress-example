const fs = require("fs");

(async function () {
  const data = fs.readFileSync(
    "/Users/gurudattsa/development-repo/PersonalRepo/cypress-dropdown-example/cypress-example/ImportTemplate.csv"
  );

  const fileBytes = [];
  console.log(data);
  const array = new Uint8Array(data);
  array.map((b) => fileBytes.push(b));
  console.log(fileBytes);
  fs.writeFileSync(
    "/Users/gurudattsa/development-repo/PersonalRepo/cypress-dropdown-example/cypress-example/ImportTemplate.txt",
    fileBytes.toLocaleString()
  );
})();
