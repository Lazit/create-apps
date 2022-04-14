const images = ["0.jpg", "1.jpg", "2.jpg"]
const BG_IMAGE = "bgImage"

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.classList.add(BG_IMAGE)

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage)