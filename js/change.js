function toggleTheme() {
    const container = document.querySelector(".container");
    const themeIcon = document.getElementById("theme-icon");
  
    if (container.classList.contains("dark-theme")) {
      container.classList.remove("dark-theme");
      container.classList.add("bright-theme");
      themeIcon.textContent = "wb_sunny"; // Change the icon to "wb_sunny"
    } else {
      container.classList.remove("bright-theme");
      container.classList.add("dark-theme");
      themeIcon.textContent = "brightness_2"; // Change the icon to "brightness_2"
    }
  }
  
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
  