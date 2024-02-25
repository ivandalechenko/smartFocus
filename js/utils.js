function idEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('termsConfirmChanger').onclick = () => {
    document.getElementById('termsConfirm').classList.toggle('contacts_confirm_cb_inner')
}
setTimeout(() => {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').slice(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}, 500);