let themeToggler = document.getElementById("theme-toggler");

themeToggler.onclick = () => {
  if (themeToggler.classList.contains("fa-moon")) {
    themeToggler.classList.remove("fa-moon");
    themeToggler.classList.add("fa-sun");
  } else {
    themeToggler.classList.remove("fa-sun");
    themeToggler.classList.add("fa-moon");
  }

  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
