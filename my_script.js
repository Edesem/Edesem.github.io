
const imageUrls = [
    "images/busó.jpg",
    "images/Christos.jpg",
    "images/chadmonk.png",
    "images/croppeddarth.png",
];

currentIndex = 0;

const image = document.querySelector("#main-picture");
image.addEventListener("click", () => {

if (currentIndex > imageUrls.length - 1) {
    currentIndex = 0;
}

image.addEventListener("animationend", () => {
    image.classList.remove("fade-in");
  }, { once: true });

image.classList.add("fade-in");
image.src = imageUrls[currentIndex];


currentIndex++;

});

