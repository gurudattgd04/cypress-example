/// <reference types="cypress" />

const fs = require("fs");

it("upload file", () => {
  const data = new FormData();

  data.append("hasHeader", "true");
  data.append("name", "tst");
  cy.request({
    url: "https://api.upload.io/v1/files/form_data",
    method: "POST",
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=--------------------------015933885729886267988025",

      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
      Authorization: "Bearer free",
    },
  })
    .window()
    .then((res) => {
      cy.log(res);
    });

  cy.request({
    method: "POST",
    url: "https://api.upload.io/v1/files/form_data",
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=--------------------------015933885729886267988025",

      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
      Authorization: "Bearer free",
    },
  })
    .as("fileUpload")
    .window()
    .then((win) => {
      cy.readFile("selenium.png", "binary")
        .then((binary) => Cypress.Blob.binaryStringToBlob(binary))
        .then((blob) => {
          const xhr = new win.XMLHttpRequest();

          data.set("user-file", blob, "selenium.png");

          xhr.open("POST", "https://api.upload.io/v1/files/form_data");

          xhr.setRequestHeader("Authorization", `Bearer free`);

          xhr.send(data);
        });
    });
  cy.wait("@fileUpload").then((res) => {
    cy.log(res);
  });
});
