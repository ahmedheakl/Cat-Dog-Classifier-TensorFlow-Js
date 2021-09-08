const run = () => {
  const img = document.querySelector(".image-view");
  const input = document.querySelector(".input-field");
  const form = document.querySelector("form");
  img.style.display = "none";
  form.addEventListener("submit", (w) => {
    w.preventDefault();
    img.style.display = "block";
    let reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
    form.style.display = "none";
  });
};

window.addEventListener("DOMContentLoaded", () => {
  run();
});
