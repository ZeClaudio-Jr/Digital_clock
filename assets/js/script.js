const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let horarioToday = new Date();
    let hr = horarioToday.getHours();
    let min = horarioToday.getMinutes();
    let s = horarioToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})





const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');


const calendario = setInterval(function calendar() {
    let dateToday = new Date();
    let d = dateToday.getDay();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;
    if (a < 10) a = '0' + a;

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
})