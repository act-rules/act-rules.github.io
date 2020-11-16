function bindEvents(bind) {
    let containers;
    if (bind.tooltipRemains)
        containers = document.querySelectorAll(".tooltip-container");
    else
        containers = document.querySelectorAll("button");
    for (const container of containers) {
        container.addEventListener("mouseenter", () => {
            console.log(container);
            showTooltip(container);
        });
        container.addEventListener("mouseleave", () => {
            hideTooltip(container);
        });
    }
}

function showTooltip(elem) {
    const tooltip = elem.querySelector("[role=tooltip]");
    console.log(tooltip);
    tooltip.removeAttribute("hidden");
}

function hideTooltip(elem) {
    const tooltip = elem.querySelector("[role=tooltip]");
    tooltip.setAttribute("hidden", "hidden");
}
