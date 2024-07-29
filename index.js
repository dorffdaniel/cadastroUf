function botao(){
    let personagem = document.getElementById('txt').value
    let usermens= document.getElementById('mensuser')
    usermens.innerHTML=`Vamos jogar ${personagem}, escolha com sabedoria um dos lados`
    if(personagem == ''){
        usermens.style.display= 'block'
        usermens.innerHTML=`[ERROR] digite um nome`
    } else{
        usermens.style.display='block'
        usermens.style.background ='blue'
    }
}


function clicar(){
    let personagem = document.getElementById('txt').value
    let resul = document.getElementById('res');
    let resultado = document.getElementById('resulmal')
    let img = 'vulcao.jpg'
    resul.innerHTML = `<img src=" ${img}">` 
    resultado.innerHTML = `infelizmente voce escolheu o lado errado e morreu queimado em um vulcao ${personagem}`
    if(personagem ==''){
        resul.innerHTML= ''
        resultado.innerHTML=' [ERROR] digite seu nome'
    }
}

function clica(){
    let personagem = document.getElementById('txt').value
    let certo = document.getElementById('rescimg');
    let bom = document.getElementById('resulbom');
    let img = 'caminho.jpg'
    certo.innerHTML= `<img src= "${img}">`
    bom.innerHTML =`Sabia escolha voce pode seguir sua viagem tranquilo ${personagem}`
    if(personagem == ''){
        certo.innerHTML =''
        bom.innerHTML= '[ERROR]'
    }
    
}

