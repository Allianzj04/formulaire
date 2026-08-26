// À coller dans Extensions > Apps Script de ton Google Sheet.
// Ce script reçoit les données POST envoyées par script.js
// et ajoute une ligne dans la feuille active.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nom,
    data.email,
    data.sujet,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
