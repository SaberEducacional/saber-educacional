const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeButton = document.getElementById('closeButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function showLightbox(index) {
    const imgSrc = galleryItems[index].querySelector('img').src;
    lightboxImage.src = imgSrc;
    currentIndex = index;
    lightbox.style.display = 'flex';
    updateNavigationButtons();
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function updateNavigationButtons() {
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentIndex < galleryItems.length - 1 ? 'block' : 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showLightbox(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showLightbox(currentIndex);
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showLightbox(index);
    });
});

closeButton.addEventListener('click', closeLightbox);
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Oculta as setas de navegação no início
updateNavigationButtons();