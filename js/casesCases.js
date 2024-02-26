const casesTransition = 400;

try {
    const casesElements = document.getElementsByClassName('casesMainNav_element');
    for (let i = 0; i < casesElements.length; i++) {
        casesElements[i].addEventListener('click', () => {
            const ns = document.getElementsByClassName('casesMainNav_element');
            for (let j = 0; j < ns.length; j++) {
                ns[j].classList.remove('casesMainNav_element_selected')
            }
        })
    }
    const selectorElements = [
        {
            name: 'mm',
            fullName: 'Мегамаркет',
            description: 'Выгодные покупки и доставка',
            stat: [
                { l: '120.523', s: 'Новых покупок в декабре' },
                { l: '8.5%', s: 'CR  из установки в новую покупку' },
                { l: '4901Р', s: 'Средний чек' },
            ]
        },
        {
            name: 'okko',
            fullName: 'Okko',
            description: 'Онлайн-кинотеатр',
            stat: [
                { l: '5200+', s: 'Новых уникальных подписок в месяц' },
                { l: '12%', s: 'CR ' }
            ]
        },
        {
            name: 'tkf',
            fullName: 'Тинькофф',
            description: 'Онлайн банк',
            stat: [
                { l: '1193', s: 'Новых кредитных карт за месяц' },
                { l: '3799', s: 'Новых дебетовых карт за месяц' },
                { l: '<6%', s: 'Fraud Rate' },
            ]
        },
        {
            name: 'yg',
            fullName: 'template',
            description: 'template_desc',
            stat: [
                { l: '123', s: 'template' },
                { l: '123', s: 'template' },
            ]
        },
        {
            name: 'alf',
            fullName: 'Альфа Инвестиции',
            description: 'Фонд, акции, облигации, биржа',
            stat: [
                { l: '700+', s: 'Новых открытых брокерских счетов за месяц' },
                { l: '17%', s: 'CR в целевое действие ' }
            ]
        },
        {
            name: 'tt',
            fullName: 'Туту',
            description: 'Поиск и покупка билетов',
            stat: [
                { l: '6794+', s: 'Новых заказов' },
                { l: '11%', s: 'CR  в целевое действие' }
            ]
        },
        {
            name: 'id',
            fullName: 'template',
            description: 'template_desc',
            stat: [
                { l: '123', s: 'template' },
                { l: '123', s: 'template' },
            ]
        },
        {
            name: 'mgn',
            fullName: 'template',
            description: 'template_desc',
            stat: [
                { l: '123', s: 'template' },
                { l: '123', s: 'template' },
            ]
        },
        {
            name: 'fw',
            fullName: 'template',
            description: 'template_desc',
            stat: [
                { l: '123', s: 'template' },
                { l: '123', s: 'template' },
            ]
        },
        {
            name: 'lt',
            fullName: 'Level Travel',
            description: 'Бронирование туров и отелей',
            stat: [
                { l: '4.391+', s: 'Новых заказов' },
                { l: '9%', s: 'CR в целевое действие ' }
            ]
        },
        {
            name: 'br',
            fullName: 'Банки.ру',
            description: 'Подбор кредитов и займы онлайн',
            stat: [
                { l: '479', s: 'Отправленных заявок на ипотеку за месяц' },
                { l: '882', s: 'Заявки на кредит наличными за месяц' }
            ]
        },
        {
            name: 'ke',
            fullName: 'template',
            description: 'template_desc',
            stat: [
                { l: '123', s: 'template' },
                { l: '123', s: 'template' },
            ]
        },
    ]


    for (let i = 0; i < selectorElements.length; i++) {
        document.getElementById(`casesSelector_${selectorElements[i].name}`).addEventListener('click', () => {
            document.getElementById(`casesSelector_${selectorElements[i].name}`).classList.add('casesMainNav_element_selected')
            document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesImg').style.opacity = '0';
            document.getElementById('casesIcon').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesIcon').style.opacity = '0';
            document.getElementById('casesIconMob').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesIconMob').style.opacity = '0';

            document.getElementById('casesFullName').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesFullNameMob').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesFullName').style.opacity = `0`;
            document.getElementById('casesFullNameMob').style.opacity = `0`;
            setTimeout(() => {
                document.getElementById('casesFullName').innerHTML = selectorElements[i].fullName
                document.getElementById('casesFullNameMob').innerHTML = selectorElements[i].fullName
                document.getElementById('casesFullName').style.opacity = `1`;
                document.getElementById('casesFullNameMob').style.opacity = `1`;
            }, casesTransition);

            document.getElementById('casesDescription').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesDescriptionMob').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesDescription').style.opacity = `0`;
            document.getElementById('casesDescriptionMob').style.opacity = `0`;
            setTimeout(() => {
                document.getElementById('casesDescription').innerHTML = selectorElements[i].description
                document.getElementById('casesDescriptionMob').innerHTML = selectorElements[i].description
                document.getElementById('casesDescription').style.opacity = `1`;
                document.getElementById('casesDescriptionMob').style.opacity = `1`;
            }, casesTransition);

            document.getElementById('casesStat').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesStat').style.opacity = `0`;

            setTimeout(() => {
                let newStat = ''
                for (let j = 0; j < selectorElements[i].stat.length; j++) {
                    newStat = newStat + `<div class="casesMain_stat_element">
                    <div class="casesMain_stat_element_header goldTexture">
                        ${selectorElements[i].stat[j].l}
                        </div>
                        <div class="casesMain_stat_element_p">
                        ${selectorElements[i].stat[j].s}
                    </div>
                </div>`
                }
                document.getElementById('casesStat').innerHTML = newStat
                setTimeout(() => {
                    document.getElementById('casesStat').style.opacity = `1`;
                }, 100);
            }, casesTransition);


            setTimeout(() => {
                document.getElementById('casesDescription').innerHTML = selectorElements[i].description
                document.getElementById('casesDescriptionMob').innerHTML = selectorElements[i].description
            }, casesTransition);



            setTimeout(() => {
                document.getElementById('casesImg').src = `/img/cases/${selectorElements[i].name}.png`;
                document.getElementById('casesImg').onload = () => {
                    document.getElementById('casesImg').style.opacity = '1';
                }
                document.getElementById('casesIcon').src = `/img/cases/${selectorElements[i].name}Small.png`;
                document.getElementById('casesIcon').onload = () => {
                    document.getElementById('casesIcon').style.opacity = '1';
                }
                document.getElementById('casesIconMob').src = `/img/cases/${selectorElements[i].name}Small.png`;
                document.getElementById('casesIconMob').onload = () => {
                    document.getElementById('casesIconMob').style.opacity = '1';
                }
            }, casesTransition);
        });
    }




} catch (error) {

}

