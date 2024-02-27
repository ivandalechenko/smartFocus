function idEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

try {
    document.getElementById('termsConfirmChanger').onclick = () => {
        document.getElementById('termsConfirm').classList.toggle('contacts_confirm_cb_inner')
    }
} catch (error) {

}

const anchors = document.querySelectorAll('a')
for (let anchor of anchors) {
    let blockID = anchor.getAttribute('href')
    try {
        if (blockID[0] == '#') {
            blockID = blockID.slice(1)
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const lightRights = document.getElementsByClassName('lightRight')
                for (let i = 0; i < lightRights.length; i++) {
                    lightRights[i].style.transition = '100ms opacity';
                    lightRights[i].style.opacity = 0;
                    setTimeout(() => {
                        lightRights[i].style.display = 'none';
                    }, 100);
                }
                const lightLefts = document.getElementsByClassName('lightLeft')
                for (let i = 0; i < lightLefts.length; i++) {
                    lightLefts[i].style.transition = '100ms opacity';
                    lightLefts[i].style.opacity = 0;
                    setTimeout(() => {
                        lightLefts[i].style.display = 'none';
                    }, 100);
                }

                setTimeout(() => {

                    if (blockID == 'contacts') {
                        if (document.getElementById('mm').classList.contains('header_open')) {
                            document.getElementById('mm').classList.toggle('header_open')
                            document.getElementById('usp').classList.toggle('onone')
                            document.getElementById('body').classList.toggle('h100')
                            document.getElementById('mmOpenerImg').style.transform = 'rotate(0deg)';
                            setTimeout(() => {
                                document.getElementById('mmOpenerImg').src = '/img/general/mobMenuOpener.svg';
                            }, 250);
                            setTimeout(() => {
                                document.getElementById(blockID).scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }, 500);
                        } else {
                            document.getElementById(blockID).scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                    } else {
                        document.getElementById(blockID).scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                    }
                }, 200);

            })
        }

    } catch (error) {

    }

}