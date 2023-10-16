const accessKey = 'tNoQG1p8SOIRf-Ndwg9Sm6LfzuenzwfWZ9lWybMa6TM';
let currentIndex = 0;
let tutteLeImg;

async function fetchImages() {
    try {
        const response = await axios.get('https://api.unsplash.com/photos', {
            headers: {
                Authorization: `Client-ID ${accessKey}`
            }
        });

        tutteLeImg = response.data;
        displayImage(currentIndex);
    } catch (err) {
        console.log('Si è verificato un errore', err);
    }
}

function displayImage(index) {
    let indexUnaImg = tutteLeImg[currentIndex];
    console.log(indexUnaImg);
    const slider = document.querySelector('.slider');
    slider.innerHTML = `
        <div class="slider">
            <div class="wrapper-img">
                <div class="title-img">
                    <h1 class="title">${indexUnaImg.alt_description}</h1>
                </div>
                    <img src="${indexUnaImg.urls.raw}" alt="${indexUnaImg.slug}" id="img-container">
            </div>
        </div`;
}

const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', () => {
    currentIndex--;
    console.log(currentIndex);
    if (currentIndex < 0) {
        currentIndex = tutteLeImg.length - 1;
    }
    displayImage(currentIndex);
});

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
    currentIndex++;
    console.log(currentIndex);
    if (currentIndex >= tutteLeImg.length) {
        currentIndex = 0;
    }
    displayImage(currentIndex);
});

fetchImages();
