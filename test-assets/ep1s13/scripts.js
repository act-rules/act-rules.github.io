class Tooltip {
    constructor(element) {
      this.element = element;
      this.button = element.querySelector("button");
      this.tooltip = element.querySelector("[role=tooltip]");
      this.bindEvents();
    }

    bindEvents() {
      this.element.addEventListener("mouseenter", this.open.bind(this));
      this.button.addEventListener("focus", this.open.bind(this));
      this.element.addEventListener("mouseleave", this.close.bind(this));
      this.button.addEventListener("blur", this.close.bind(this));
    }

    open() {
      this.showTooltip();
    }

    close() {
      this.hideTooltip();
    }
    showTooltip() {
      this.tooltip.removeAttribute("hidden");
    }

    hideTooltip() {
      this.tooltip.setAttribute("hidden", "hidden");
    }
  }

  Array.from(document.querySelectorAll(".tooltip-container")).forEach(
    (element) => new Tooltip(element)
  );
