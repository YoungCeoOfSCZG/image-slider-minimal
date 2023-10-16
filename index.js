//the key is hidden because the API is personal

const accessKey = 'tN************************';
let currentIndex = 0;
let allImage;

async function fetchImages() {
    try {
        const response = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        });

        allImage = response.data;
        displayImage(currentIndex);
    } catch (err) {
        console.log('Si è verificato un errore', err);
    }
}

function displayImage(index) {
    let currentImage = allImage[currentIndex];
    console.log(currentImage);
    const slider = document.querySelector('.slider');
    slider.innerHTML = `
        <div class="slider">
            <div class="wrapper-img">
                <div class="title-img">
                    <h1 class="title">${currentImage.alt_description}</h1>
                </div>
                    <img src="${currentImage.urls.raw}" alt="${currentImage.slug}" id="img-container">
            </div>
        </div`;
}

const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', () => {
    currentIndex--;
    console.log(currentIndex);
    if (currentIndex < 0) {
        currentIndex = allImage.length - 1;
    }
    displayImage(currentIndex);
});

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex >= allImage.length) {
        currentIndex = 0;
    }
    displayImage(currentIndex);
});

fetchImages();


