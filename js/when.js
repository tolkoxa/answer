window.onload = function() {
    let sound = new Audio();
    let checkMp3 = sound.canPlayType('audio/mp3');

    let btn = document.getElementById('btn');
    // let fpTop = document.getElementById('fp-top');
    // let clouds = document.getElementById('clouds');

    let cloudStart = true;
    let fpBgImg = document.getElementById('fpBg');
    let cloudInfo = true;
    let timerId;
    let i = 0;

    if (checkMp3 != '') {
        sound.src = '../data/when/when.mp3';
    } else {
        sound.src = '../data/when/when.ogg';
    };

    let str = '';
    btn.addEventListener('click', (evt) => {
        let e = evt.target;

        if (e.name === 'btn') {
            let btnType = e.dataset.type;

            if (btnType === 'play' || btnType === 'again') {
                btn.innerHTML = '';
                str = `<button class="button pause" name="btn" data-type="pause"></button>`;
                btn.insertAdjacentHTML('afterbegin', str);
                sound.play();
                fpBgImg.classList.remove('bgimg-3');
                fpBgImg.classList.add('bgimg-1');
                cloudStart = false;

                document.getElementById('fp-top').innerHTML = '';

                function one2two() {
                    fpBgImg.classList.remove('bgimg-1');
                    fpBgImg.classList.add('bgimg-2');
                    console.log('1');
                };

                function two2one() {
                    fpBgImg.classList.remove('bgimg-2');
                    fpBgImg.classList.add('bgimg-1');
                    console.log('2');
                }

                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                async function delayedGreeting() {
                    let i = 0;
                    do {
                        one2two();
                        await sleep(2000);
                        console.log(i);
                        two2one();
                        await sleep(2000);
                        i++;
                    }
                    while (i < 100 && sound.currentTime <= 17);
                }

                delayedGreeting();

            } else if (btnType === 'pause') {
                cloudStart = false;
                btn.innerHTML = '';
                str = `<button class="button play" name="btn" data-type="play"></button>`;
                btn.insertAdjacentHTML('afterbegin', str);
                sound.pause();
            }
        }
    })

    sound.onended = () => {
        fpBgImg.classList.remove('bgimg-1');
        fpBgImg.classList.remove('bgimg-2');
        fpBgImg.classList.add('bgimg-3');
        let finalStr = `
        <div class="info-margin">
        <p class="next-page">Смотри ниже.</p>
        <p class="next-page">Там подробности.</p></div>
        `;
        // document.getElementById('fpText').innerHTML = '';
        document.getElementById('fp-top').insertAdjacentHTML('afterbegin', finalStr);
        btn.innerHTML = '';
        str = `<button class="button btn-main again" name="btn" data-type="again"></button>`;
        btn.insertAdjacentHTML('afterbegin', str);
    };
};