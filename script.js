function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  panes.forEach(pane => {
    pane.classList.add("hidden");
  });

  document.querySelector(`#${tabId}`).classList.remove("hidden");
  event.target.classList.add("active");
}
