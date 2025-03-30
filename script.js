let cards = document.querySelectorAll('.cards')


function btn(index){
    cards.forEach((evento)=>{
        evento.classList.remove('mostrar');
    })

    cards[index].classList.add('mostrar');
}

let resUfcd = document.querySelector('.resUfcd');
let resCodigo = document.querySelector('.resCodigo');


function enviarUfcd(){
    let ufcd = document.getElementById('ufcd');
    let codigo = document.getElementById('codigo');

//poderia ter colocado o value na varial, mas nao deixaria limpar o campo depois

    resUfcd.innerHTML= ufcd.value;
    resCodigo.innerHTML = codigo.value;

    ufcd.value = "";
    codigo.value= "";
}

let resNome = document.querySelector('.resNome');

function enviarNome(){
    let nome = document.getElementById('nome');

    resNome.innerHTML = nome.value;

    nome.value = "";
}