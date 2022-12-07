var valor1 = document.getElementById('valor1').value;
var valor2 = document.getElementById('valor2').value;
var resultado = document.getElementById("total") = total;

function somar() {
var valor1 = document.getElementById('valor1').value;
var valor2 = document.getElementById('valor2').value;
total = Number(valor1)+Number(valor2);
document.getElementById("total").value=total;
}
function subtrair() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    total = Number(valor1)-Number(valor2);
    document.getElementById("total").value=total;
    }
function dividir() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    total = Number(valor1)/Number(valor2);
    document.getElementById("total").value=total;
    }    
function multiplicar() {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    total = Number(valor1)*Number(valor2);
    document.getElementById("total").value=total;
    } 