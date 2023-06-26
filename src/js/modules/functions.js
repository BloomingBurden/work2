const isWebp = () => {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
};

const onClickMenu = () => {
    const burger = document.querySelector('.header__burger');
    const header = document.querySelector('.header');
    const close = document.querySelector('.nav__close');

    burger.addEventListener('click', () => {
        header.classList.add('header--opened');
    });
    close.addEventListener('click', () => {
        header.classList.remove('header--opened');
    });
};

const onClickBottle = () => {
    const bottle = document.querySelector('.bottles');

    bottle.addEventListener('click', (evt) => {
        const target = evt.target;

        if (target.closest('[data-wine-src]')) {
            if (!target.dataset.wineSrc) return;

            
            if (target.closest('.bottles__color')) {
                const btnsColor = target.closest('.bottles__color').querySelectorAll('.bottles__btn-color');
                btnsColor.forEach(item => item.classList.remove('bottles__btn-color--current'));
                target.closest('.bottles__btn-color').classList.add('bottles__btn-color--current');
            }

            if (target.closest('.bottles__wines')) {
                const btnsColor = target.closest('.bottles__wines').querySelectorAll('.bottles__elem');
                const text = target.closest('.bottles__elem').querySelector('.bottles__wine').textContent;
                let isBlack = target.closest('.bottles__header').querySelector('.bottles__btn--black').classList.contains('bottles__btn-color--current');

                if (isBlack) return;

                target.closest('.bottles__wines').querySelector('.bottles__btn-wine').textContent = `${text} wine`;
                btnsColor.forEach(item => item.classList.remove('bottles__elem--current'));
                target.closest('.bottles__elem').classList.add('bottles__elem--current');
            }


            const img = target.closest('.bottles__header').querySelector('.bottles__img > picture');
            
            img.children[0].setAttribute('srcset', `${target.dataset.wineSrc}.webp`);
            img.children[1].setAttribute('src', `${target.dataset.wineSrc}.png`);
        }
    });
};

isWebp();
onClickMenu();

if (document.body.classList.contains('bottles-body')) {
    onClickBottle();
}

const onChangeForm = () => {
    const form = document.querySelectorAll('.contacts__item > input');
    const send = document.querySelector('.contacts__send');

    form.forEach(item => item.addEventListener('input', () => {
        if (item.value.length > 0) {
            send.classList.add('contacts__send--full');
        } else {
            send.classList.remove('contacts__send--full');
        }
    }));
};

if (document.body.classList.contains('contacts-body')) {
    onChangeForm();
}

