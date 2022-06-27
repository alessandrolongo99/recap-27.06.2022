const start = document.getElementById('btn-start');

const pausa = document.getElementById('btn-pausa');

const azzera = document.getElementById('btn-azzera');
let clock;
let output = document.getElementById('output');

let ore = document.getElementById('ore');
let minuti = document.getElementById('minuti');
let secondi =  document.getElementById('secondi');
let centesimi = document.getElementById('centesimi');

start.addEventListener('click', function(){
    clock = setInterval (function(){
    output.innerHTML = (parseFloat(output.innerHTML)) + 1
    }, 10);
});

pausa.addEventListener('click', function(){
    clearInterval(clock);
})

azzera.addEventListener('click', function(){
    clearInterval(clock);
    output.innerHTML = 0;
});

setInterval(function(){
    centesimi++;
    if(centesimi > 99){
        centesimi = 0;
        secondi++;
        document.getElementById('centesimi').innerHTML = addZero(centesimi);

    }
    if(secondi > 59){
        secondi = 0;
        minuti++;
        document.getElementById('secondi').innerHTML = addZero(secondi);
    }
    if(minuti > 59){
        minuti = 0;
        ore++;
        document.getElementById('minuti').innerHTML = addZero(minuti);
    }
});

function addZero(num){
    if(num < 10){
        return '0' + num;
    }
    return num;
}


// da finire