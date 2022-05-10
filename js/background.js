// const images = [
//   "0.jpg",
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
// ];
const BG_IMAGE = "bgImage";

// const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.classList.add(BG_IMAGE);

// bgImage.src = `img/${chosenImage}`;
bgImage.src = `https://source.unsplash.com/1920x1080/?nature`;

document.body.appendChild(bgImage);
