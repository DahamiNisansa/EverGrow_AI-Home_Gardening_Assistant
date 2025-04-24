
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.getElementById("startButton").addEventListener("click", function() {
  window.location.href = "home.html";
});

