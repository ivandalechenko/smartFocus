try {
    document.getElementById('handImg').src = document.getElementById('handImg').getAttribute('data-src');
    document.getElementById('handImg').onload = () => {
        document.getElementById('handImg').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('handPreload').style.animation = '';
            document.getElementById('handPreload').style.opacity = 0;
        }, 500);
    }
} catch (error) {

}

try {
    document.getElementById('bg').style.width = `${document.getElementById('body').getBoundingClientRect().width}px`
    document.getElementById('bg').style.height = `${document.getElementById('body').getBoundingClientRect().height}px`
    document.getElementById('bg').src = document.getElementById('bg').getAttribute('data-src');
    document.getElementById('bg').onload = () => {
        document.getElementById('bg').style.opacity = 1;
    }
} catch (error) {

}
