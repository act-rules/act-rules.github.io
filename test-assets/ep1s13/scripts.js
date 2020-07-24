function bindEvents(bind) {
    let container;
    if (bind.tooltipRemains)
        container = document.querySelector(".tooltip-container");
    else
        container = document.querySelector("button");
    container.addEventListener("mouseenter", () => {
        showTooltip();
    });
    container.addEventListener("mouseleave", () => {
        hideTooltip();
    });
}

function showTooltip() {
    const tooltip = document.querySelector("[role=tooltip]");
    tooltip.removeAttribute("hidden");
}

function hideTooltip() {
    const tooltip = document.querySelector("[role=tooltip]");
    tooltip.setAttribute("hidden", "hidden");
}
