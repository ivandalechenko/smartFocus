try {
    let gap = 20;

    let scale = '';
    const timingMs = 100000


    const PSSR = document.getElementsByClassName('partnerSliderRight')
    for (let i = 0; i < PSSR.length; i++) {
        const initSlider = () => {
            const PSSRElements = PSSR[i].getElementsByClassName('partnerSliderRight_element')
            if (PSSRElements.length < 12) {

                let sumWidth = 0;
                for (let j = 0; j < PSSRElements.length; j++) {
                    sumWidth = sumWidth + PSSRElements[j].getBoundingClientRect().width
                }
                if (sumWidth < document.documentElement.scrollWidth * 2) {
                    let newPSSRInner = '';
                    for (let k = 0; k < PSSRElements.length * 2; k++) {
                        if (k > PSSRElements.length - 1) {
                            newPSSRInner = newPSSRInner + `<div class="partnerSliderRight_element">
                ${PSSRElements[k - PSSRElements.length].innerHTML}
              </div>`;
                        } else {
                            newPSSRInner = newPSSRInner + `<div class="partnerSliderRight_element">
                ${PSSRElements[k].innerHTML}
              </div>`;
                        }
                    }
                    PSSR[i].innerHTML = newPSSRInner;
                }
            }

            for (let j = 0; j < PSSRElements.length; j++) {
                PSSRElements[j].style.transition = ``;
                PSSRElements[j].style.transform = ``;
                setTimeout(() => {
                    PSSRElements[j].setAttribute('startPoint', PSSRElements[j].getBoundingClientRect().x)
                    PSSRElements[j].style.transition = `${timingMs}ms transform linear`;
                    PSSRElements[j].style.transform = `translate(${10000}px, 0px) ${scale}`;
                }, 50);
            }
            const checkerInterval = setInterval(() => {
                for (let j = PSSRElements.length - 1; j > -1; j--) {
                    if (PSSRElements[j].getBoundingClientRect().x > document.documentElement.scrollWidth) {
                        const num = j;
                        j = -1;
                        let minX = PSSRElements[0].getBoundingClientRect().x;
                        for (let k = 0; k < PSSRElements.length; k++) {
                            if (PSSRElements[k].getBoundingClientRect().x < minX) {
                                minX = PSSRElements[k].getBoundingClientRect().x;
                            }
                        }
                        const endPoint = minX - PSSRElements[num].getBoundingClientRect().width - gap
                        const translateNew = endPoint + (-1 * parseFloat(PSSRElements[num].getAttribute('startPoint')));
                        PSSRElements[num].style.transition = '';
                        PSSRElements[num].style.transform = `translate(${translateNew}px, 0px) ${scale}`;
                        setTimeout(() => {
                            PSSRElements[num].style.transition = `${timingMs}ms transform linear`;
                            PSSRElements[num].style.transform = `translate(${10000 + translateNew}px, 0px) ${scale}`;
                        }, 10);

                    }
                }
            }, 100);

            window.addEventListener('resize', function () {
                this.clearInterval(checkerInterval);
            });
        }
        initSlider()
        window.addEventListener('resize', function () {
            initSlider()
        });

    }

    const PSSL = document.getElementsByClassName('partnerSliderLeft')

    for (let i = 0; i < PSSL.length; i++) {
        const initSlider = () => {
            const PSSLElements = PSSL[i].getElementsByClassName('partnerSliderLeft_element')
            if (PSSLElements.length < 12) {

                let sumWidth = 0;
                for (let j = 0; j < PSSLElements.length; j++) {
                    sumWidth = sumWidth + PSSLElements[j].getBoundingClientRect().width
                }
                if (sumWidth < document.documentElement.scrollWidth * 2) {
                    let newPSSLInner = '';
                    for (let k = 0; k < PSSLElements.length * 2; k++) {
                        if (k > PSSLElements.length - 1) {
                            newPSSLInner = newPSSLInner + `<div class="partnerSliderLeft_element">
                ${PSSLElements[k - PSSLElements.length].innerHTML}
              </div>`;
                        } else {
                            newPSSLInner = newPSSLInner + `<div class="partnerSliderLeft_element">
                ${PSSLElements[k].innerHTML}
              </div>`;
                        }
                    }
                    PSSL[i].innerHTML = newPSSLInner;
                }
            }

            for (let j = 0; j < PSSLElements.length; j++) {
                PSSLElements[j].style.transition = ``;
                PSSLElements[j].style.transform = ``;
                setTimeout(() => {
                    PSSLElements[j].setAttribute('startPoint', PSSLElements[j].getBoundingClientRect().x)
                    PSSLElements[j].style.transition = `${timingMs}ms transform linear`;
                    PSSLElements[j].style.transform = `translate(${-10000}px, 0px) ${scale}`;
                }, 50);
            }
            const checkerInterval = setInterval(() => {
                for (let j = 0; j < PSSLElements.length; j++) {
                    if (PSSLElements[j].getBoundingClientRect().x + PSSLElements[j].getBoundingClientRect().width < 0) {
                        const num = j;
                        j = 9999;
                        let maxX = PSSLElements[0].getBoundingClientRect().x + PSSLElements[0].getBoundingClientRect().width;
                        for (let k = 0; k < PSSLElements.length; k++) {
                            if (PSSLElements[k].getBoundingClientRect().x + PSSLElements[k].getBoundingClientRect().width > maxX) {
                                maxX = PSSLElements[k].getBoundingClientRect().x + PSSLElements[k].getBoundingClientRect().width;
                            }
                        }
                        const endPoint = maxX + gap
                        const translateNew = endPoint - parseFloat(PSSLElements[num].getAttribute('startPoint'));
                        PSSLElements[num].style.transition = '';
                        PSSLElements[num].style.transform = `translate(${translateNew}px, 0px) ${scale}`;
                        setTimeout(() => {
                            PSSLElements[num].style.transition = `${timingMs}ms transform linear`;
                            PSSLElements[num].style.transform = `translate(${-10000 + translateNew}px, 0px) ${scale}`;
                        }, 10);

                    }
                }
            }, 100);

            window.addEventListener('resize', function () {
                this.clearInterval(checkerInterval);
            });
        }
        initSlider()
        window.addEventListener('resize', function () {
            initSlider()
        });

    }
} catch (error) {

}

