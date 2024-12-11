let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % (slides.length - 2);
    updateSliderPosition();
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length - 2) % (slides.length - 2);
    updateSliderPosition();
});

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => openLightbox(index));
});

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = slides[currentIndex].querySelector("img").src;

    lightbox.classList.add("show");
    lightboxImg.classList.add("scale-in");
}

function closeLightbox() {
    lightboxImg.classList.remove("scale-in");
    lightboxImg.classList.add("scale-out");

    setTimeout(() => {
        lightbox.classList.remove("show");
        lightboxImg.classList.remove("scale-out");
    }, 300);
}

document.querySelector(".close").addEventListener("click", closeLightbox);

function changeLightboxImage(index) {
    lightboxImg.classList.remove("scale-in");
    lightboxImg.classList.add("scale-out");

    setTimeout(() => {
        currentIndex = index;
        lightboxImg.src = slides[currentIndex].querySelector("img").src;

        lightboxImg.classList.remove("scale-out");
        lightboxImg.classList.add("scale-in");
    }, 300);
}

document.querySelector(".arrow-left").addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeLightboxImage(newIndex);
});

document.querySelector(".arrow-right").addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    changeLightboxImage(newIndex);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
