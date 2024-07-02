
function adicionarProduto(nome, valor, imagem) {
    var card = document.createElement('div');
    card.className = 'card-produto';

    var img = document.createElement('img');
    img.src = imagem;
    card.appendChild(img);

    var h3 = document.createElement('h3');
    h3.textContent = nome;
    card.appendChild(h3);

    var div = document.createElement('div');
    div.className = 'preco-botao';

    var preco = document.createElement('span');
    preco.className = 'preco';
    preco.textContent = 'R$ ' + valor;
    div.appendChild(preco);

    var botao = document.createElement('button');
    botao.innerHTML = '<img src="../Alura-Geek-Challenge-2-main/src/assets/icones/lixo.png" alt="Excluir" class="icone-lixeira">';
    botao.addEventListener('click', function() {
        card.remove();
    });
    div.appendChild(botao);

    card.appendChild(div);
    document.getElementById('container-produtos').appendChild(card);
}


function validarNomeProduto(nome) {
    if (!nome) {
        alert('Por favor, insira o nome do produto.');
        return false;
    }
    return true;
}


function validarValorProduto(valor) {
    if (!valor) {
        alert('Por favor, insira o valor do produto.');
        return false;
    }
    return true;
}


function validarImagemProduto(imagem) {
    if (!imagem) {
        alert('Por favor, insira a URL da imagem do produto.');
        return false;
    }
    return true;
}


window.onload = function() {
   
    var produtos = [
        {
            nome: 'StormTrooper',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img1.png',
            valor: '60,00'
        },
        {
            nome: 'Game Boy Classic',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img2.png',
            valor: '60,00'
        },
        {
            nome: 'StormTrooper',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img1.png',
            valor: '60,00'
        },
        {
            nome: 'Game Boy Classic',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img2.png',
            valor: '60,00'
        },
        {
            nome: 'StormTrooper',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img1.png',
            valor: '60,00'
        },
        {
            nome: 'Game Boy Classic',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img2.png',
            valor: '60,00'
        },
        {
            nome: 'StormTrooper',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img1.png',
            valor: '60,00'
        },
        {
            nome: 'Game Boy Classic',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img2.png',
            valor: '60,00'
        },
        {
            nome: 'StormTrooper',
            imagem: '../Alura-Geek-Challenge-2-main/src/assets/cards/img1.png',
            valor: '60,00'
        }
        
    ];

    
    produtos.forEach(function(produto) {
        adicionarProduto(produto.nome, produto.valor, produto.imagem);
    });

   
    document.getElementById('form-produto').addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome-produto').value;
        var valor = document.getElementById('valor-produto').value;
        var imagem = document.getElementById('imagem-produto').value;

        if (validarNomeProduto(nome) && validarValorProduto(valor) && validarImagemProduto(imagem)) {
            adicionarProduto(nome, valor, imagem);
            document.getElementById('form-produto').reset();
        }
    });
}
