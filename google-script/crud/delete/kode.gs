function deleteRow(sheet, id) {
  const targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet);
  const sheetData = getDataSheet(sheet);
  sheetData.forEach((item, index) => {
    if (id == item.id) {
      targetSheet.deleteRow(index + 2);
      return 200
    } else {
      400
    }
  });
}
