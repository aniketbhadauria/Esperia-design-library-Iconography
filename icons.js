
  const icons = [
    { name: "aftermarket", path: "assets/aftermarketIcon.svg" },
    { name: "askMani", path: "assets/AskManiAi.svg" },
    { name: "chevronleft", path: "assets/ChevronLeft.svg" },
    { name: "clearIcon", path: "assets/Clear_icon.svg" },
    { name: "close", path: "assets/Close2.svg" },
    { name: "Close-red", path: "assets/Close_red.svg" },
    { name: "PN compare", path: "assets/CompareIcon.svg" },
    { name: "Construction-tab", path: "assets/ConstructiongridIcon.svg" },
    { name: "Cube", path: "assets/Cube.svg" },
    { name: "DoubleArrowDownIcon", path: "assets/documentationIcon.svg" },
    { name: "EBOM", path: "assets/EBOM.svg" },
    { name: "Exclamation", path: "assets/Error.svg" },
    { name: "Error", path: "assets/Error_red.svg" },
    { name: "ExportSparespng", path: "assets/ExportSpares.png" },
    { name: "Serial Card Expand", path: "assets/ExpandIcons.svg" },
    { name: "Existing Workspace", path: "assets/ExistingWorkspace.svg" },
    { name: "Filter", path: "assets/Filter.svg" },
    { name: "graph-file", path: "assets/graph-file.svg" },
    { name: "Download", path: "assets/Hexagon2.svg" },
    { name: "New Workspace", path: "assets/NewWorkspace.svg" },
    { name: "RepairBOM", path: "assets/RepairBOMIcon.svg" },
    { name: "TimeLineTab", path: "assets/TimelineIcon.png" },
    { name: "Recommended Spares Icon", path: "assets/tool.svg" },
    { name: "valveLink", path: "assets/valveLink.svg" },
    { name: "Add", path: "assets/add.svg" },
    { name: "Add Parts", path: "assets/addlayer.svg" },
    { name: "attribute Icon", path: "assets/attributeIcon.svg" },
    { name: "bar-chart", path: "assets/bar-chart.svg" },
    // { name: "Breadcrumb Separator", path: "assets/bc_separators.svg" },
    { name: "Drawings", path: "assets/brush1.svg" },
    { name: "Breadcrumb Home", path: "assets/breadcrumb_home.svg" },
    { name: "calendar", path: "assets/calendar.svg" },
    { name: "chevron-down", path: "assets/chevron-down.svg" },
    { name: "compare", path: "assets/CompareIcon.svg" },
    { name: "component Tag", path: "assets/launch1.svg" },
    { name: "configure", path: "assets/configure.svg" },
    { name: "constructionIcon", path: "assets/constructionIcon.svg" },
    { name: "documentationIcon", path: "assets/documentationIcon.svg" },
    { name: "download All", path: "assets/downloadAll.svg" },
    { name: "ebomIcon", path: "assets/ebomIcon.svg" },
    { name: "emptyDoc Image", path: "assets/emptyDoc.svg" },
    { name: "error yellow", path: "assets/errorYellow.svg" },
    { name: "lamp", path: "assets/lamp.svg" },
    // { name: "paint", path: "assets/paint.svg" },
    { name: "partlistIcon", path: "assets/partlistIcon.svg" },
    { name: "partsinventory", path: "assets/partsinventory.svg" },
    { name: "piechart", path: "assets/piechart.svg" },
    { name: "plusIcon", path: "assets/plusIcon.svg" },
    { name: "repairreportIcon", path: "assets/repairreportIcon.svg" },
    { name: "redWarningIcon", path: "assets/redWarningIcon.svg" },
    { name: "Search", path: "assets/search.svg" },
    { name: "settings", path: "assets/settings2.svg" },
    { name: "settings", path: "assets/settings2.svg" },
    { name: "shippedbomIcon", path: "assets/shippedbomIcon.svg" },
  { name: "shopping-bag", path: "assets/shopping-bag.svg" },
  { name: "size", path: "assets/size.jpg" },
  { name: "sparkIcon", path: "assets/sparkIcon.svg" },
  { name: "sparesIcon", path: "assets/sparesIcon.svg" },
  { name: "serialcard", path: "assets/serialcard.svg" },
  { name: "serialdownloadIcon", path: "assets/serialdownloadIcon.svg" },
  { name: "success", path: "assets/success.svg" },
//   { name: "updateIcon", path: "assets/updateIcon.svg" },
  { name: "valvePic", path: "assets/valvePic (1).svg" },
  { name: "x", path: "assets/x.svg" }
  ];

  const iconGrid = document.getElementById("iconGrid");
  const filterInput = document.getElementById("iconFilter");
  const darkModeToggle = document.getElementById("darkModeToggle");

  function renderIcons(filteredIcons = icons) {
    iconGrid.innerHTML = '';
    filteredIcons.forEach(icon => {
      const iconCard = document.createElement('div');
      iconCard.className = "icon-card group relative flex flex-col items-center justify-center rounded-md border border-border p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer";
      iconCard.innerHTML = `
        <img src="${icon.path}" alt="${icon.name}" class="w-8" />
        <span class="text-xs text-center font-mono mt-2">${icon.name}</span>
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
          <button class="copy-btn" title="Copy" data-name="${icon.name}">
            <i class="fas fa-copy text-xs"></i>
          </button>
          <button class="download-btn" title="Download" data-path="${icon.path}" data-name="${icon.name}">
            <i class="fas fa-download text-xs"></i>
          </button>
        </div>
      `;
      iconGrid.appendChild(iconCard);
    });
  }

  // Initial render
  renderIcons();

  // Copy to clipboard
  iconGrid.addEventListener("click", (e) => {
    if (e.target.closest(".copy-btn")) {
      const name = e.target.closest(".copy-btn").dataset.name;
      navigator.clipboard.writeText(name).then(() => alert(`Copied "${name}" to clipboard`));
    }
  });

  // Download asset
  iconGrid.addEventListener("click", (e) => {
    if (e.target.closest(".download-btn")) {
      const btn = e.target.closest(".download-btn");
      const link = document.createElement('a');
      link.href = btn.dataset.path;
      link.download = `${btn.dataset.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });

  // Filter functionality
  filterInput.addEventListener("input", () => {
    const value = filterInput.value.toLowerCase();
    const filtered = icons.filter(icon => icon.name.toLowerCase().includes(value));
    renderIcons(filtered);
  });

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
