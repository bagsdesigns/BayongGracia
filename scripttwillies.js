
let currentImageIndex = 0;
const images = ['bags/tw/1.jpg', 'bags/tw/2.jpg', 'bags/tw/3.jpg', 'bags/tw/4.jpg', 'bags/tw/6.jpg', 'bags/tw/7.jpg', 'bags/tw/8.jpg', 'bags/tw/9.jpg', 'bags/tw/10.jpg', 'bags/tw/11.jpg', 'bags/tw/12.jpg', 'bags/tw/13.jpg', 'bags/tw/14.jpg', 'bags/tw/15.jpg', 'bags/tw/16.jpg', 'bags/tw/17.jpg', 'bags/tw/18.jpg', 'bags/tw/19.jpg', 'bags/tw/20.jpg', 'bags/tw/22.jpg', 'bags/tw/23.jpg', 'bags/tw/24.jpg', 'bags/tw/25.jpg', 'bags/tw/26.jpg', 'bags/tw/28.jpg', 'bags/tw/29.jpg', 'bags/tw/30.jpg', 'bags/tw/31.jpg', 'bags/tw/34.jpg', 'bags/tw/35.jpg', 'bags/tw/36.jpg', 'bags/tw/37.jpg', 'bags/tw/38.jpg', 'bags/tw/39.jpg', 'bags/tw/40.jpg', 'bags/tw/41.jpg', 'bags/tw/42.jpg', 'bags/tw/43.jpg', 'bags/tw/44.jpg', 'bags/tw/45.jpg', 'bags/tw/46.jpg', 'bags/tw/47.jpg', 'bags/tw/48.jpg', 'bags/tw/49.jpg', 'bags/tw/50.jpg',  'bags/tw/52.jpg', 'bags/tw/53.jpg', 'bags/tw/54.jpg', 'bags/tw/55.jpg', 
'bags/tw/57.jpg', 'bags/tw/58.jpg', 'bags/tw/59.jpg', 'bags/tw/60.jpg', 'bags/tw/61.jpg', 'bags/tw/62.jpg', 'bags/tw/63.jpg']; // Add more image URLs as needed

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
