
const enemy = ['✋🏼', '👊🏼', '✌🏼'];
let timer = 3;
let random = 0;
let sudahJwb = false;
const start = document.querySelector('#start');
const me = document.querySelectorAll('button.myHand');
const ulangBtn = document.querySelectorAll('button.ulang');

// pages
const menangPages = document.querySelector('#menang');
const kalahPages = document.querySelector('#kalah');
const waktuPages = document.querySelector('#waktu-habis');
const seriPages = document.querySelector('#seri');

function rules(me, enemy) {
    if (me === enemy) {

        document.querySelector('#content').style.display = 'none'
        document.querySelector('#seri').style.display = 'flex'
        swal({
            title: 'seri 🤜🏼🤛🏼',
            icon: 'warning',
            button: 'Close',
            className: 'alert',
        })
    }
    else if ((me === '👊🏼' && enemy === '✋🏼') || (me === '✋🏼' && enemy === '✌🏼') || (me === '✌🏼' && enemy === '👊🏼')) {
        document.querySelector('#content').style.display = 'none'
        document.querySelector('#kalah').style.display = 'flex'
        swal({
            title: 'Kalah ❌❌❌',
            icon: 'error',
            button: 'Close',
            className: 'alert',
        });
    } else {
        document.querySelector('#content').style.display = 'none'
        document.querySelector('#menang').style.display = 'flex'
        swal({
            title: 'Menang ✔✔✔',
            icon: 'success',
            button: 'Close',
            className: 'alert'
        });
    }
}

me.forEach(hand => {
    hand.addEventListener('click', () => {
        let myHand = hand.innerHTML;
        document.querySelector('span#me').innerHTML = myHand;
        sudahJwb = true;
        setTimeout(() => {
            rules(myHand, enemy[random])
        }, 500);
    });
});

// ? Setup Function

function setupGame() {
    timer = 3;
    random = Math.floor(Math.random() * 3);
    document.querySelector('span#enemy').innerHTML = '?';

    const intervalTimer = setInterval(() => {
        timer -= 1;
        document.querySelector('.timer h2').innerHTML = timer;
        if (timer === 0) {
            document.querySelector('span#enemy').innerHTML = enemy[random];
            clearInterval(intervalTimer);
            if (!sudahJwb) {
                // swal()
                document.querySelector('#content').style.display = 'none'
                document.querySelector('#waktu-habis').style.display = 'flex'
                swal({
                    title: 'Waktu Habis ❗',
                    icon: 'info',
                    button: 'Close',
                    className: 'alert',
                })
            }
        }
    }, 1000)
}

start.addEventListener('click', () => {
    setupGame();
});

ulangBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(`#${btn.parentElement.id}`).style.display = 'none';
        document.querySelector('#content').style.display = 'flex'
        setTimeout(() => {
            setupGame();
        }, 1000)
    })
})