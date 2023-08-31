const ExcelJS = require("exceljs");

(async function () {
  const workbook = await new ExcelJS.Workbook();
  return await workbook.xlsx
    .readFile("cypress/fixtures/userData.xlsx")
    .then(function () {
      console.log(
        "test",
        workbook.getWorksheet("Sheet1").eachRow((row) => {
          console.log(row.eachCel);
        })
      );
      return workbook.getWorksheet("Sheet1");
    });
})();
