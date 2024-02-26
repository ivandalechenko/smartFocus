
function uspSliderMove() {
    const uspSlider = document.getElementById('uspSlider');
    const uspSliderElements = document.getElementsByClassName('usp_content_sliderBlock_slider_element');
    const elementHeight = uspSliderElements[0].getBoundingClientRect().height;

    let newElements = '';

    for (let i = -1; i < uspSliderElements.length; i++) {
        if (i == -1) {
            newElements = newElements + `<div class="usp_content_sliderBlock_slider_element" style="transform: translate(0px, -${elementHeight}px)">
            ${uspSliderElements[uspSliderElements.length - 1].innerHTML}
          </div>`
        } else {
            newElements = newElements + `<div class="usp_content_sliderBlock_slider_element ${i == 2 ? 'selected' : ''}" style="transform: translate(0px, -${elementHeight}px)">
            ${uspSliderElements[i].innerHTML}
          </div>`
        }
    }
    setTimeout(() => {
        uspSlider.innerHTML = newElements;
    }, 100);
    const newElementsList = document.getElementsByClassName('usp_content_sliderBlock_slider_element');

    setTimeout(() => {
        for (let i = 0; i < newElementsList.length; i++) {
            newElementsList[i].style.transform = 'translate(0px,0px)';
            if (i == 2) {
                newElementsList[i].classList.add('selected');
            }
            if (i == 3) {
                newElementsList[i].classList.remove('selected');
            }
        }
    }, 200);

    let newElementsWithoutLast = '';
    setTimeout(() => {

        for (let i = 0; i < newElementsList.length; i++) {
            if (i != newElementsList.length - 1) {
                newElementsWithoutLast = newElementsWithoutLast + `<div class="usp_content_sliderBlock_slider_element ${i == 2 ? 'selected' : ''}" style="transform: translate(0px, 0px)">
                ${newElementsList[i].innerHTML}
                </div>`
            }
        }
        setTimeout(() => {
            uspSlider.innerHTML = newElementsWithoutLast;
        }, 1000);
    }, 500);
}

setInterval(() => {
    try {
        uspSliderMove()
    } catch (error) {

    }
}, 4000);
