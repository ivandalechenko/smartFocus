document.getElementById('mmOpener').onclick = () => {
    if (document.getElementById('mm').classList.contains('header_open')) {
        document.getElementById('mmOpenerImg').style.transform = 'rotate(0deg)';
        setTimeout(() => {
            document.getElementById('mmOpenerImg').src = '/img/mobMenuOpener.svg';
        }, 250);
    } else {
        document.getElementById('mmOpenerImg').style.transform = 'rotate(360deg)';
        setTimeout(() => {
            document.getElementById('mmOpenerImg').src = '/img/mobMenuCloser.svg';
        }, 250);
    }
    document.getElementById('mm').classList.toggle('header_open')
    document.getElementById('usp').classList.toggle('onone')
    document.getElementById('body').classList.toggle('h100')
}