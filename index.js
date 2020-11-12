window.onload = () => {
  const colors = ["crimson", "darkgreen", "orangered", "cyan", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const divs = document.getElementsByClassName("random");

  for (let i = 0; i < divs.length; i++) {
    divs[i].style.background = randomColor;
  }
};

const copyToClipboard = () => {
  /* create a fake input element */
  const input = document.createElement("input");
  input.value = "nancy.eckenthal@gmail.com";

  document.body.appendChild(input);

  /* Select the text field */
  input.select();
  input.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  document.body.removeChild(input);
};

const header = document.getElementById("sticky-header");

const getDistanceFromTop = () => header.offsetTop;

const stickPoint = getDistanceFromTop();

const addStickyHeader = () => {
  const distance = stickPoint - window.pageYOffset;
  const offset = window.pageYOffset;
  if (distance <= 0) {
    header.classList.add("sticky");
  } else if (offset <= stickPoint) {
    header.classList.remove("sticky");
  }
};

const topButton = document.getElementById("top-button");

const userDistanceFromTop =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : document.body.scrollTop;

const showBackToTopButton = () => {
  if (window.pageYOffset <= 10) {
    topButton.className = topButton.className.replace("show", "");
  } else {
    topButton.className = "show";
  }
};

document.querySelector("img.email").addEventListener("click", (e) => {
  copyToClipboard();
  const snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(
    () => (snackbar.className = snackbar.className.replace("show", "")),
    3000
  );
});

window.onscroll = () => {
  addStickyHeader();
  showBackToTopButton();
};
