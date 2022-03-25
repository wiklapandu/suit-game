
const enemy = ['✋🏼', '👊🏼', '✌🏼'];
let timer = 3;
let random = 0;
let sudahJwb = false;
const start = document.querySelector('#start');
const me = document.querySelectorAll('button.myHand');
function rules(me, enemy) {
    if (me === enemy) {
        swal({
            title: 'seri 🤜🏼🤛🏼',
            icon: 'warning',
            button: 'Close',
            className: 'alert',
        })
    }
    else if ((me === '👊🏼' && enemy === '✋🏼') || (me === '✋🏼' && enemy === '✌🏼') || (me === '✌🏼' && enemy === '👊🏼')) {
        swal({
            title: 'Kalah ❌❌❌',
            icon: 'error',
            button: 'Close',
            className: 'alert',
        });
    } else {
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

start.addEventListener('click', () => {
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
                swal({
                    title: 'Waktu Habis ❗',
                    icon: 'info',
                    button: 'Close',
                    className: 'alert',
                })
            }
        }
    }, 1000)
});