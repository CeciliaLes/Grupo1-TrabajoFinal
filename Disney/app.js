const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 4;


const createSlide = () => {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creando elemento DOM
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // adjuntando todos los elementos
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    // configurando la imagen
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
    // configuración de elementos nombre de clase
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    sliders.push(slide);
    // efecto deslizante
    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)} - ${30 * (sliders.length - 2)})`;
    }
}

for(let i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    // createSlide();
}, 3000);


// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// cards sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})