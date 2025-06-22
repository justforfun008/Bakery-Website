const imageSources = [
   "images/Drip cake.jpg",
   "images/Oreo drip cake.jpg",
   "images/goat cake.jpg",
   "images/Pink cat cake.jpg"
];

const cupcakeSources = [
  "images/chocolate cupcake.jpg",
   "images/vanilla cupcake 2.jpg",
   "images/vanilla cupcake.jpg",
   "images/cherrycc.jpeg",
   "images/chococc.jpg",
   "images/cupcake.jpeg"
];

let currentIndex = null;
let currentGallery = null;
let autoSlideInterval = null;

document.getElementById('menu-toggle').addEventListener('click', function(){
    document.getElementById('collapsed').classList.toggle('menu');
    document.getElementById('main-wrapper').classList.toggle('shifted');
});

function openImage(imgElement, index){
    currentIndex = index;
    currentGallery = imageSources;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = currentGallery[index];
    lightbox.style.display = 'flex';
    lightbox.focus();

}

function openImageFromSection(section, index) {
    currentIndex = index;
    currentGallery = section === 'cupcake' ? cupcakeSources : imageSources;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = currentGallery[index];
    lightbox.style.display = 'flex';
    lightbox.focus();

}

function closeImage(){
    document.getElementById('lightbox').style.display = 'none';
    currentIndex = null;
    stopAutoSlide();
}   

document.addEventListener('keydown', (e) => {
    if (currentIndex !== null && currentGallery !== null) {
        if (e.key === 'ArrowRight' && currentIndex < currentGallery.length - 1) {
            currentIndex++;
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
        } else if (e.key === 'Escape') {
            closeImage();
            return;
        } else {
            return;
        }

        document.getElementById('lightbox-img').src = currentGallery[currentIndex];

        if (currentGallery === imageSources) {
            const gallery = document.getElementById('imageGallery');
            const scrollAmount = 300;
            gallery.scrollBy({ left: e.key === 'ArrowRight' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
        } else if (currentGallery === cupcakeSources) {
            const gallery = document.getElementById('cupcakeGallery');
            const scrollAmount = 300;
            gallery.scrollBy({ left: e.key === 'ArrowRight' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
        }
    }
});

function scrollGallery(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const scrollAmount = 300 * direction;
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollGalleryCupcakes(direction, galleryId) {
    const gallery = document.getElementById(galleryId);
    const scrollAmount = 300 * direction;
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
