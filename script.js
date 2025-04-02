const botoes = document.querySelectorAll('.botoes');

botoes.forEach((event)=>{
    event.addEventListener('click', ()=>{
        botoes.forEach((itens)=>{
            itens.classList.remove('ativado');
        })

        event.classList.add('ativado')
    })

})


let cards = document.querySelectorAll('.cards');

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

    Swal.fire({
        title: "Bom trabalho",
        text: "Arquivos enviados com sucesso",
        icon: "success",
        customClass: {
            title: 'swal2-title',
            popup: 'swal2-content'
          }
      });

//poderia ter colocado o value na varial, mas nao deixaria limpar o campo depois

    resUfcd.innerHTML= ufcd.value;
    resCodigo.innerHTML = codigo.value;

    ufcd.value = "";
    codigo.value= "";
}

let resNome = document.querySelector('.resNome');

function enviarNome(){
    let nome = document.getElementById('nome');

    Swal.fire({
        title: "Bom trabalho",
        text: "Arquivo enviado com sucesso",
        icon: "success",
        customClass: {
            title: 'swal2-title',
            popup: 'swal2-content'
          }
      });

    resNome.innerHTML = nome.value;

    nome.value = "";
}