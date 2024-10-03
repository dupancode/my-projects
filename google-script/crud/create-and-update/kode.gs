let SHEET_NAME = "";

function insertDataBot(dataUpdate) {
  const data = getDataSheet(SHEET_NAME);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  let dataUpdates;

  switch (SHEET_NAME) {
    case "pending":
      dataUpdates = [
        dataUpdate.order_id,
        dataUpdate.date,
        dataUpdate.symbol,
        dataUpdate.price,
        dataUpdate.qty
      ];
      break;
    case "investment":
      dataUpdates = [
        "=ROW() -1",
        dataUpdate.symbol,
        dataUpdate.date,
        dataUpdate.priceIdr,
        dataUpdate.priceUsdt,
        dataUpdate.qty,
        dataUpdate.amount,
        dataUpdate.type
      ];
      break;
  }

  const keys = Object.keys(data[0]);
  const existingItemIndex = data.findIndex(item => item.id === dataUpdate.id);
  
  if (existingItemIndex !== -1) {
    Object.entries(dataUpdate).forEach(([key, value]) => {
      if (key !== "id") {
        const columnIndex = keys.indexOf(key) + 1;
        if (columnIndex > 0) {
          sheet.getRange(existingItemIndex + 2, columnIndex).setValue(value);
        }
      }
    });
    return 200;
  } else if (dataUpdate.id === "tambah") {
    sheet.appendRow(dataUpdates);
    return 200;
  } else {
    return 404;
  }
};
