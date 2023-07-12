export default function showModal() {
  document.getElementsByClassName("overlay").style.opacity = 0.7;
}
var btnclick = document.querySelector(".click");
btnclick.addEventListener("click", showModal);
