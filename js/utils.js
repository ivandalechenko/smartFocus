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
setTimeout(() => {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').slice(1)
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
        })
    }
}, 500);