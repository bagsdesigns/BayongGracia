
let currentImageIndex = 0;
const images = ['bags/leather/1b.jpg','bags/leather/2b.jpg', 'bags/leather/3b.jpg']; // Add more image URLs as needed

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


function PrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
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
