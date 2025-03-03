const tabPanels = Array.from(document.querySelectorAll(".tab-panels > div"));
const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContainer = document.querySelector(".tab-menu");

tabPanels.forEach((tab, index) => {
    if (index > 0) tab.setAttribute("hidden", "");
});

const switchTab =(e) => {
    // Find the clicked tab
    const clickedTab = e.target.closest("li");
    if (!clickedTab) return;

    // Remove the "active" class from all Tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add the "active" class to a clicked Tab
    clickedTab.classList.add("active");

    // Get the associated PANEL for the clicked Tab
    const activePanelId = clickedTab.children[0].getAttribute("href");
    const activePanel = document.querySelector(activePanelId);

    // Hide all tab panels
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", "");
    });

    // Show the panel associated with the clicked tab
    activePanel.removeAttribute("hidden", "");
};

tabsContainer.addEventListener("click", switchTab);