const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const change = document.body;

  change.classList.toggle("change");

  let theme;

  if (change.classList.contains("change")) {
    theme = "CHANGE";
  } else {
    theme = "ORIGINAL";
  }

  // Save to LocalStorge

  localStorage.setItem("PageTheme", JSON.stringify(theme));
});

let getTheme = JSON.parse(localStorage.getItem("PageTheme"));

if (getTheme === "ORIGINAL") {
  document.body.classList.remove("change");
} else {
  document.body.classList.add("change");
}
