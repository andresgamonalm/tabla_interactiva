function sortTable(columnIndex) {
  const table = document.getElementById("dataTable");
  const rows = Array.from(table.rows).slice(1);
  const isAscending = table.getAttribute("data-sort") !== "asc";
  rows.sort((a, b) => {
    const cellA = a.cells[columnIndex].innerText.toLowerCase();
    const cellB = b.cells[columnIndex].innerText.toLowerCase();
    return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
  });
  rows.forEach(row => table.tBodies[0].appendChild(row));
  table.setAttribute("data-sort", isAscending ? "asc" : "desc");
}

function filterTable() {
  const query = document.getElementById("filterInput").value.toLowerCase();
  const rows = document.querySelectorAll("#dataTable tbody tr");
  rows.forEach(row => {
    const isVisible = Array.from(row.cells).some(cell =>
      cell.innerText.toLowerCase().includes(query)
    );
    row.style.display = isVisible ? "" : "none";
  });
}

function toggleColumn() {
  const selectedColumn = document.getElementById("columnFilter").value;
  const columns = document.querySelectorAll("#dataTable td, #dataTable th");
  columns.forEach((cell, index) => {
    if (selectedColumn === "all" || cell.cellIndex == selectedColumn - 1) {
      cell.classList.remove("hidden");
    } else {
      cell.classList.add("hidden");
    }
  });
}