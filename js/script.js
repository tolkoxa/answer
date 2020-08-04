window.onload = function() {
    let sound = new Audio();
    let checkMp3 = sound.canPlayType('audio/mp3');

    let btn = document.getElementById('btn');

    let cloudStart = true;
    let cloudStop = true;
    let cloudInfo = true;

    if (checkMp3 != '') {
        sound.src = 'data/answer.mp3';
    } else {
        sound.src = 'data/answer.ogg';
    };

    let str = '';
    btn.addEventListener('click', (evt) => {
        let e = evt.target;

        if (e.name === 'btn') {
            let btnType = e.dataset.type;

            if (btnType === 'play' || btnType === 'again') {

                setInterval(() => {
                    if (((sound.currentTime) >= 35) && (cloudInfo == true)) {
                        cloudMore();
                        cloudInfo = false;
                    }
                }, 12000);


                if (cloudStart) { setTimeout(cloudPlay, 2000); }
                document.getElementById('clouds').classList.remove('clouds-pause');

                btn.innerHTML = '';
                str = `<button class="button btn-main pause" name="btn" data-type="pause"></button>`;
                btn.insertAdjacentHTML('afterbegin', str);
                sound.play();
                cloudStart = false;
            } else if (btnType === 'pause') {
                cloudStart = false;
                if (((sound.currentTime) >= 10) && (cloudStop == true)) {
                    cloudPause();
                    cloudStop = false;
                }
                btn.innerHTML = '';
                str = `<button class="button btn-main play" name="btn" data-type="play"></button>`;
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
        document.getElementById('clouds').classList.add('clouds-site');
        document.getElementById('clouds').innerHTML = finalStr;
    };
};

function cloudPlay() {
    document.getElementById('clouds').classList.add('clouds-play');
    setTimeout(() => { document.getElementById('clouds').classList.remove('clouds-play'); }, 5000);
}

function cloudPause() {
    document.getElementById('clouds').classList.add('clouds-pause');
    cloudStop = false;
}

function cloudMore() {
    document.getElementById('clouds').classList.add('clouds-info');
    cloudInfo = false;
    setTimeout(() => { document.getElementById('clouds').classList.remove('clouds-info'); }, 7000);
}