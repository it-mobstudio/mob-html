function addLinkClass() {
    var link = document.getElementById("manage_role");
    link.classList.add("active");
  }

function countEntries() {
    var table = document.getElementById("dataTableid");
    var rowCount = table.rows.length - 1; // Exclude the header row
    var entryCountElement = document.getElementById("dataTableid_info");
    entryCountElement.textContent = "Showing 1 to " + rowCount + " of " + rowCount + " entries";
  }
  
countEntries();
