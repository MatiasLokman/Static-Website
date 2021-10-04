const darkToggle = document.getElementById("chk");

if (localStorage.getItem("Lok") == "true") {
  document.body.classList.toggle("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("Lok", !(localStorage.getItem("Lok") == "true"));
});
