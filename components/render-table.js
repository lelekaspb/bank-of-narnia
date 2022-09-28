function renderTable(table) {
  const container = document.querySelector(".transactions");
  container.innerHTML = "";
  container.appendChild(table);
}
