
let currentImageIndex = 0;
const images = ['bags/bayong type/1a.jpg','bags/bayong type/2a.jpg','bags/bayong type/3a.jpg','bags/bayong type/4a.jpg', 'bags/bayong type/5a.jpg','bags/bayong type/6a.jpg','bags/bayong type/7a.jpg','bags/bayong type/8a.jpg', 'bags/bayong type/9a.jpg','bags/bayong type/10a.jpg',
'bags/bayong type/11a.jpg','bags/bayong type/12a.jpg','bags/bayong type/13a.jpg','bags/bayong type/14a.jpg', 'bags/bayong type/15a.jpg','bags/bayong type/16a.jpg','bags/bayong type/17a.jpg','bags/bayong type/18a.jpg', 'bags/bayong type/19a.jpg','bags/bayong type/20a.jpg',
'bags/bayong type/21a.jpg','bags/bayong type/22a.jpg','bags/bayong type/23a.jpg','bags/bayong type/24a.jpg', 'bags/bayong type/25a.jpg','bags/bayong type/26a.jpg','bags/bayong type/27a.jpg','bags/bayong type/28a.jpg', 'bags/bayong type/29a.jpg','bags/bayong type/30a.jpg',
'bags/bayong type/31a.jpg','bags/bayong type/32a.jpg','bags/bayong type/33a.jpg','bags/bayong type/34a.jpg', 'bags/bayong type/35a.jpg','bags/bayong type/36a.jpg','bags/bayong type/37a.jpg','bags/bayong type/38a.jpg', 'bags/bayong type/39a.jpg','bags/bayong type/40a.jpg',
'bags/bayong type/41a.jpg','bags/bayong type/42a.jpg','bags/bayong type/43a.jpg','bags/bayong type/44a.jpg', 'bags/bayong type/45a.jpg','bags/bayong type/46a.jpg','bags/bayong type/47a.jpg','bags/bayong type/48a.jpg', 'bags/bayong type/49a.jpg','bags/bayong type/50a.jpg']; // Add more image URLs as needed

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
