const { listen } = require("express/lib/application")


function cadastrar(){

var tb = document.getElementById('tab1')
var nome = document.getElementById('name').value
var idade = document.getElementById('age').value
var porte = document.getElementById('size').value
var caract = document.getElementById('feature').value
var raca = document.getElementById('breed').value
var qtdLinhas = tb.rows.length
var linha = tb.insertRow(qtdLinhas)

var cellCod = linha.insertCell(0)
var cellNome = linha.insertCell(1)
var cellIdade = linha.insertCell(2)
var cellPort = linha.insertCell(3)
var cellCarc = linha.insertCell(4)
var cellRaca = linha.insertCell(5)
var cellAcao = linha.insertCell(6)


cellCod.innerHTML = qtdLinhas
cellNome.innerHTML = nome
cellIdade.innerHTML = idade
cellPort.innerHTML = porte
cellCarc.innerHTML = caract
cellRaca.innerHTML = raca
cellAcao.innerHTML = '<div class="cont-botao"><button class="botao bte" onclick="excluir(this)">Excluir</button><button class="btd botao">Editar</button></div>'

}




function excluir(row){
       console.log(row.parentNode.parentNode.parentNode)
       row.parentNode.parentNode.parentNode.remove()

//     console.log('teste')
// tb.deleteCell(0)
// tb.deleteCell(1)
// tb.deleteCell(2)
// tb.deleteCell(3)
// tb.deleteCell(4)
// tb.deleteCell(5)
// tb.deleteCell(6)
}

