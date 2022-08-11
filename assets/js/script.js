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
const infoG = document.getElementById('infoG');


const calendario = setInterval(function time() {
    let dateToday = new Date();
    let d = dateToday.getDate();   // O getDay não funciona como eu pensava.
    let m = dateToday.getMonth()+1;   // Só o getMonth trás o mês anterior ao que se está. O método getMonth() retorna o mês da data especificada. É importante observar a respeito do método getMonth() que ele retorna valores indexados em zero (ou seja, de 0 a 11), onde 0 representa janeiro e 11 representa dezembro. Por isso, é preciso adicionar 1 para "normalizar" o valor do mês.
    let a = dateToday.getFullYear();
    let i = dateToday.toUTCString();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;
    if (a < 10) a = '0' + a;

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
    infoG.textContent = i;
})