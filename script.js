const toggleButton = document.getElementById("themeToggle");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
