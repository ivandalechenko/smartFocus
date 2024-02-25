const casesTransition = 400;

const casesElements = document.getElementsByClassName('cases_nav_element');
for (let i = 0; i < casesElements.length; i++) {
    casesElements[i].addEventListener('click', () => {
        const ns = document.getElementsByClassName('cases_nav_element');
        for (let j = 0; j < ns.length; j++) {
            ns[j].classList.remove('cases_nav_elementSelected')
        }
    })
}


document.getElementById('casesSelectorMM').addEventListener('click', () => {
    document.getElementById('casesSelectorMM').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/mm.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});

document.getElementById('casesSelectorALF').addEventListener('click', () => {
    document.getElementById('casesSelectorALF').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/alf.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});

document.getElementById('casesSelectorBR').addEventListener('click', () => {
    document.getElementById('casesSelectorBR').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/br.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});
document.getElementById('casesSelectorLT').addEventListener('click', () => {
    document.getElementById('casesSelectorLT').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/lt.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});
document.getElementById('casesSelectorOKKO').addEventListener('click', () => {
    document.getElementById('casesSelectorOKKO').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/okko.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});


document.getElementById('casesSelectorTKF').addEventListener('click', () => {
    document.getElementById('casesSelectorTKF').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/tkf.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});


document.getElementById('casesSelectorTT').addEventListener('click', () => {
    document.getElementById('casesSelectorTT').classList.add('cases_nav_elementSelected')
    document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
    document.getElementById('casesImg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('casesImg').src = '/img/cases/tt.png';
        document.getElementById('casesImg').onload = () => {
            document.getElementById('casesImg').style.opacity = '1';
        }
    }, casesTransition);
});

