const nodemon = require("nodemon")


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
cellAcao.innerHTML = '<div class="cont-botao"><button class="botao bte" onclick="excluir(this)">Excluir</button><button class="btd botao" onclick="editar(this)">Editar</button></div>'

document.getElementById('name').value = ''
document.getElementById('age').value = ''
document.getElementById('size').value = ''
document.getElementById('feature').value = ''
document.getElementById('breed').value = ''


}


function bgLinhaSelecionada(row){  //função que deixa a linha selecionada
    row.parentNode.parentNode.parentNode.style.backgroundColor = "#bdbdbd"  //pega a row, acessa os parentes até chegar no td, e seta o background-color para a cor cinza
}

function excluir(row){
       console.log(row.parentNode.parentNode.parentNode)    
       row.parentNode.parentNode.parentNode.remove()
}

function editar(row){
    const celulas = row.parentNode.parentNode.parentNode.children

    bgLinhaSelecionada(row) //aqui é chamado a função que muda a cor da linha ao ser selecionada, mas é necessário passar pelo paramtro a linha

    getElementById('bt-att')

    console.log(row.parentNode.parentNode.parentNode)
    
    // celulas[1].innerText = document.getElementById('name').value
    
    // for (const celula of celulas) {
        
    //     console.log(celula.innerText)
    // }
    }



