const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const thumb3 = document.getElementById('thumb3');


function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle-container2');
    circle.style.backgroundColor = color;

}

thumb1.addEventListener('click', () => {
    imgSlider('./images/img1.png');
    changeCircleColor('#017143');
})

thumb2.addEventListener('click', () => {
    imgSlider('./images/img2.png');
    changeCircleColor('#e86f8b');
})
thumb3.addEventListener('click', () => {
    imgSlider('./images/img3.png');
    changeCircleColor('#8e0363');
})




