const casesTransition = 400;

try {
    const casesElements = document.getElementsByClassName('cases_nav_element');
    for (let i = 0; i < casesElements.length; i++) {
        casesElements[i].addEventListener('click', () => {
            const ns = document.getElementsByClassName('cases_nav_element');
            for (let j = 0; j < ns.length; j++) {
                ns[j].classList.remove('cases_nav_elementSelected')
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
            document.getElementById(`casesSelector_${selectorElements[i].name}`).classList.add('cases_nav_elementSelected')
            document.getElementById('casesImg').style.transition = `${casesTransition}ms opacity`;
            document.getElementById('casesImg').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('casesImg').src = `/img/cases/${selectorElements[i].name}.png`;
                document.getElementById('casesImg').onload = () => {
                    document.getElementById('casesImg').style.opacity = '1';
                }
            }, casesTransition);
        });
    }

} catch (error) {

}

