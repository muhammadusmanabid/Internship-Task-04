const slides = document.querySelectorAll(".slide");
let counter = 0;
let direction = 1;

slides.forEach((slide,index) =>{
    slide.style.left = `${index * 100}%`;
})

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
};

const goPrev = () =>{
    counter--
    slideImage();
    disable();
}

const goNext = () => {
    counter++
    slideImage();
    disable();
}


const disable = () => {

    if (counter >= slides.length - 1) {
        goNext.disabled = true;
    } else {
        goNext.disabled = false;
    }

    if (counter <= 0) {
        goPrev.disabled = true;
    } else {
        goPrev.disabled = false;
    }
};

const autoplay = () => {
    setInterval(() => {
        counter += direction;

        if(counter >= slides.length - 1 || counter <= 0){
            direction *= -1;
        }

        slideImage();

    }, 3000);
};

autoplay();