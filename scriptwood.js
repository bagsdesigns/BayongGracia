
let currentImageIndex = 0;
const images = ['bags/wood/1d.jpg','bags/wood/2d.jpg','bags/wood/3d.jpg', 'bags/wood/4d.jpg','bags/wood/5d.jpg','bags/wood/6d.jpg','bags/wood/7d.jpg','bags/wood/8d.jpg','bags/wood/9d.jpg','bags/wood/10d.jpg',
'bags/wood/11d.jpg','bags/wood/12d.jpg','bags/wood/13d.jpg','bags/wood/14d.jpg','bags/wood/15d.jpg','bags/wood/16d.jpg','bags/wood/17d.jpg','bags/wood/18d.jpg','bags/wood/19d.jpg','bags/wood/20d.jpg','bags/wood/21d.jpg','bags/wood/22d.jpg']; // Add more image URLs as needed

function openModal(imageUrl) {
  currentImageIndex = images.indexOf(imageUrl);
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('modalImage').src = images[currentImageIndex];
}

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);