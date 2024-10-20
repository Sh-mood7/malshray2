document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});

function m (img){
  phones.style.width='450px';
}
function mm(img){
  phones.style.width='300px';
}

