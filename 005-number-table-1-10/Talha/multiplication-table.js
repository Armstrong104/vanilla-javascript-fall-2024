const renderBtn = document.getElementById("generate");
const tableTopRow = document.getElementById("top-row");
const tableBottomRow = document.getElementById("bottom-row");

renderBtn.addEventListener("click", function () {
  cleanTable();
  for (let num = 1; num <= 10; num++) {
    const multiplicationTable = renderTable(num);
    if (num <= 5) {
      tableTopRow.appendChild(multiplicationTable);
    } else {
      tableBottomRow.appendChild(multiplicationTable);
    }
  }
});

function cleanTable() {
  tableTopRow.innerHTML = "";
  tableBottomRow.innerHTML = "";
}

function renderTable(num) {
  const tableContainer = document.createElement("table");
  tableContainer.className = "table-auto border border-slate-700 w-full";

  const tableBody = document.createElement("tbody");

  for (let row = 1; row <= 10; row++) {
    const tableRow = renderTableRow(num, row);
    tableBody.appendChild(tableRow);
  }
  tableContainer.appendChild(tableBody);

  return tableContainer;
}

function renderTableRow(num, row) {
  const cells = [];

  for (let cellNo = 0; cellNo < 5; cellNo++) {
    const cell = document.createElement("td");
    cells.push(cell);
  }

  cells[0].innerText = num;
  cells[1].innerText = " x ";
  cells[2].innerText = row;
  cells[3].innerText = " = ";
  cells[4].innerText = num * row;

  const tableRow = document.createElement("tr");

  for (let cellNo = 0; cellNo < cells.length; cellNo++) {
    tableRow.appendChild(cells[cellNo]);
  }

  return tableRow;
}
