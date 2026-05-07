const overlay = document.getElementById('overlay');
const fullSizeImg = document.getElementById('fullSizeImg');

function showImage(thumbnailSrc) {
    // Convert thumbnail path to full-size path
    const fullSrc = thumbnailSrc.replace('images-thumbnail', 'images-full');

    fullSizeImg.src = fullSrc; // Only loads when clicked
    overlay.style.display = 'flex';
}

function hideImage() {
    overlay.style.display = 'none';

    // Optional: clear src so browser can free memory
    fullSizeImg.src = '';
}