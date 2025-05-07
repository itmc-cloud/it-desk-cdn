function createFloatingIcon({
    icon = "❓",
    position = "bottom-right",
    link = null,
    tooltip = "Click me!",
  }) {
    const iconElement = document.createElement("div");
    iconElement.className = `floating-icon ${position}`;
    iconElement.innerHTML = `<span title="${tooltip}">${icon}</span>`;
  
    iconElement.onclick = () => {
      if (link) {
        window.open(link, "_blank"); // Opens in a new tab
      } else {
        alert("Floating icon clicked!");
      }
    };
  
    document.body.appendChild(iconElement);
  }
  