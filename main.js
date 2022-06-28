const start = document.getElementById('start');
const pausa = document.getElementById('pause');
const azzera = document.getElementById('reset');

let cs = 0;
let s = 0;
let m = 0;
let h = 0;

let clock = 0;

let running = false;

start.addEventListener('click', function () {
    if (!running) {
        clock = setInterval(() => {
            cs++;
            if (cs >= 100) {
                cs = 0;
                s++;
            }
            if (s >= 60) {
                s = 0;
                m++;
            }
            if (m >= 60) {
                m = 0;
                h++;
            }
            document.getElementById('cs').innerHTML = addZero(cs);
            document.getElementById('s').innerHTML = addZero(s);
            document.getElementById('m').innerHTML = addZero(m);
            document.getElementById('h').innerHTML = addZero(h);
        }, 10);
        running = true;
        console.log('cliccato');
    }
});

pausa.addEventListener('click', function () {
    clearInterval(clock);
    running = false;
});

reset.addEventListener('click', function () {
    clearInterval(clock);
    running = false;
    clock = 0;
    cs = 0;
    document.getElementById('cs').innerHTML = addZero(cs);
    s = 0;
    document.getElementById('s').innerHTML = addZero(s);
    m = 0;
    document.getElementById('m').innerHTML = addZero(m);
    h = 0;
    document.getElementById('h').innerHTML = addZero(h);
});

function addZero(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}