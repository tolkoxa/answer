window.onload = function() {
    let sound = new Audio();
    let checkMp3 = sound.canPlayType('audio/mp3');

    let btn = document.getElementById('btn');
    // let fpTop = document.getElementById('fp-top');
    // let clouds = document.getElementById('clouds');

    let cloudStart = true;
    let fpBgImg = document.getElementById('fpBg');
    let cloudInfo = true;

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
            // fpTop.classList.add('_innactive');
            // clouds.classList.remove('_innactive');

            if (btnType === 'play' || btnType === 'again') {

                // setInterval(() => {
                //     if (((sound.currentTime) >= 35) && (cloudInfo == true)) {
                //         cloudMore();
                //         cloudInfo = false;
                //     }
                // }, 12000);


                // if (cloudStart) { setTimeout(cloudPlay, 2000); }
                // clouds.classList.remove('clouds-pause');

                btn.innerHTML = '';
                str = `<button class="button pause" name="btn" data-type="pause"></button>`;
                btn.insertAdjacentHTML('afterbegin', str);
                sound.play();
                cloudStart = false;
                setTimeout(() => {
                    fpBgImg.classList.remove('bgimg-1');
                    fpBgImg.classList.add('bgimg-2');
                    console.log(`---1---`);

                    setTimeout(() => {
                        fpBgImg.classList.remove('bgimg-2');
                        fpBgImg.classList.add('bgimg-1');
                        console.log(`---2---`);
                    }, 1000);

                    setTimeout(() => {
                        fpBgImg.classList.remove('bgimg-1');
                        fpBgImg.classList.add('bgimg-2');
                        console.log(`---3---`);
                    }, 1000);

                }, 3000);

                setTimeout(() => {
                    fpBgImg.classList.remove('bgimg-2');
                    fpBgImg.classList.add('bgimg-3');
                    console.log(`---4---`);
                }, 10000);

            } else if (btnType === 'pause') {
                cloudStart = false;
                // if (((sound.currentTime) >= 10) && (cloudStop == true)) {
                //     cloudPause();
                //     cloudStop = false;
                // }
                btn.innerHTML = '';
                str = `<button class="button play" name="btn" data-type="play"></button>`;
                btn.insertAdjacentHTML('afterbegin', str);
                sound.pause();
            }
        }
    })



    sound.onended = () => {
        let finalStr = `<p>Сделал </p>
        <p><a class="link" href="http://tolkoxa.ru">tolkoxa.ru</a></p>`;
        btn.innerHTML = '';
        str = `<button class="button btn-main again" name="btn" data-type="again"></button>`;
        btn.insertAdjacentHTML('afterbegin', str);
        // clouds.classList.add('clouds-site');
        // clouds.innerHTML = finalStr;
        fpBgImg.classList.remove('bgimg-3');
        fpBgImg.classList.add('bgimg-1');
    };
};

// function cloudPlay() {
//     clouds.classList.add('clouds-play');
//     setTimeout(() => { clouds.classList.remove('clouds-play'); }, 5000);
// }

// function cloudPause() {
//     clouds.classList.add('clouds-pause');
//     cloudStop = false;
// }

// function cloudMore() {
//     clouds.classList.add('clouds-info');
//     cloudInfo = false;
//     setTimeout(() => { clouds.classList.remove('clouds-info'); }, 7000);
// }