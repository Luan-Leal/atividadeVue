export default function Data(){

    var data = new Date();

    var hora = data.getHours()
    if(hora.toString().length == 1) hora = "0"+hora
    document.querySelector("#hora").innerText=hora;

    var minutos = data.getMinutes()
    if(minutos.toString().length == 1) minutos = "0"+minutos
    document.querySelector("#minutos").innerText=minutos;

    var semana = data.getDay()
    if(semana == 0) semana = "Domingo"
    if(semana == 1) semana = "Segunda-Feira"
    if(semana == 2) semana = "Terça-Feira"
    if(semana == 3) semana = "Quarta-Feira"
    if(semana == 4) semana = "Quinta-Feira"
    if(semana == 5) semana = "Sexto-Feira"
    if(semana == 6) semana = "Sábado"
    document.querySelector("#diaSemana").innerText=semana;

    var dia = data.getDate()
    document.querySelector("#dia").innerText=dia;

    var mes = data.getMonth()+1
    if(mes == 1) mes = "Janeiro"
    if(mes == 2) mes = "Fevereiro"
    if(mes == 3) mes = "Março"
    if(mes == 4) mes = "Abril"
    if(mes == 5) mes = "Maio"
    if(mes == 6) mes = "Junho"
    if(mes == 7) mes = "Julho"
    if(mes == 8) mes = "Agosto"
    if(mes == 9) mes = "Setembro"
    if(mes == 10) mes = "Outubro"
    if(mes == 11) mes = "Novembro"
    if(mes == 12) mes = "Dezembro"
    document.querySelector("#mes").innerText=mes;

    var ano = data.getFullYear()
    document.querySelector("#ano").innerText=ano;

}
