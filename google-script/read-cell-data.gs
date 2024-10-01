function getDataSheet(sheetName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var values = sheet.getDataRange().getValues();
  var headers = values.shift();
  
  return values.map(row => headers.reduce((obj, header, i) => {
    obj[header] = header.toLowerCase() === 'date' ? convertDate(row[i]) : row[i];
    return obj;
  }, {}));
};
