    const names_before = `Farofa
    Bolo
    Picole
    Pirulito
    Sanduiche
    Pizza
    Hot dog
    Lasanha
    Fricasé
    Espetinho
    Paçoca
    Molho
    Torta
    Farofa
    Mousse
    Sushi
    Yakisoba
    Bowl de salada 
    Macarronada
    Bolacha
    Sushi
    Milk-shake
    Omelete
    Carreteiro
    Churrasco
    Caldo
    Cuscuz
    Strogonoff
    Moqueca
    Panqueca
    Feijoada
    Calzone
    Coxinha
    Crepe
    Croissant
    Empada
    Enroladinho
    Esfiha
    Quiche
    Tapioca
    Wrap
    Burrito
    Poke
    Churros
    Broa
    Cereal
    Pão de batata
    Pão de forma
    Waffle
    Salada
    Vitamina
    `;


    const names_after = `Água de coco
    Abacate
    Abacaxi
    Abóbora
    Abobrinha
    Açaí
    Acelga
    Acerola
    Açafrão
    Agrião
    Aipim
    Alface
    Alho
    Alho-poró
    Amendoim
    Amora
    Arroz
    Aveia
    Azeitona
    Bacon
    Banana
    Batata
    Batata-doce
    Batata frita
    Berinjela
    Beterraba
    Bife
    Biscoito
    Brócolis
    Broto de feijão
    Cacau
    Café
    Caju
    Camarão
    Carambola
    Carne bovina
    Carne moída
    Carne seca
    Castanha-de-caju
    Castanha-do-pará
    Cebola
    Cebolinha verde
    Cenoura
    Cereja
    Chia
    Chimarrão
    Chocolate branco
    Chocolate preto
    Chuchu
    Coco
    Couve
    Couve-flor
    Creme de leite
    Dadinho de tapioca
    Doce de leite
    Ervilha
    Espinafre
    Farinha
    Farinha de mandioca
    Farinha de milho
    Farinha de trigo
    Feijão
    Feijão-branco
    Feijão-preto
    Feijão-verde
    Figo
    Framboesa
    Frango
    Gengibre
    Goiaba
    Grão-de-bico
    Hortelã
    Inhame
    Iogurte
    Jabuticaba
    Jaca
    Kiwi
    Laranja
    Leite
    Leite condensado
    Leite de coco
    Leite em pó
    Lentilha
    Limão
    Linhaça
    Maçã
    Mamão
    Mandioca
    Manga
    Maracujá
    Melancia
    Melão
    Milho
    Mirtilo
    Morango
    Mussarela
    Nabo
    Nachos
    Nozes
    Óleo
    Oliva
    Omelete
    Orégano
    Ovo cozido
    Ovo frito
    Ovo mexido
    Palmito
    Pão de queijo
    Pão francês
    Papaya
    Peito de frango
    Pepino
    Pera
    Pêssego
    Pimenta
    Pimentão
    Pinhão
    Pipoca
    Pitanga
    Queijo coalho
    Queijo minas
    Queijo parmesão
    Queijo prato
    Queijo provolone
    Quiabo
    Polenta
    Purê de batata
    Rabanete
    Repolho
    Requeijão
    Ricota
    Romã
    Rúcula
    Salsa
    Salsicha
    Sardinha
    Soja
    Tangerina
    Tapioca
    Tomate
    Uva
    Uva-passa
    Vagem
    Yacon
    Yakult
    Zucchini
    Linguiça
    Torresmo`;


const random_array_item = function(items) {
    return rando(items).value;
};

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('check');
    button.addEventListener('click', () => {
        const all_names_before = names_before.split("\n").map(item => item.trim()).filter(Boolean);
        const all_names_after = names_after.split("\n").map(item => item.trim()).filter(Boolean);
        const prato = random_array_item(all_names_before);
        const quantidade_com = rando(1, 3);
        const ingredientes = randoSequence(all_names_after).slice(0, quantidade_com + 1).map(item => item.value);
        const ingrediente_principal = ingredientes[0];
        const ingredientes_com = ingredientes.slice(1);
        let complemento;
        if (ingredientes_com.length === 1) {
            complemento = ingredientes_com[0];
        } else if (ingredientes_com.length === 2) {
            complemento = `${ingredientes_com[0]} e ${ingredientes_com[1]}`;
        } else {
            complemento = `${ingredientes_com[0]}, ${ingredientes_com[1]} e ${ingredientes_com[2]}`;
        }
        document.querySelector("#my-new-name span").innerHTML = `${prato} de ${ingrediente_principal} com ${complemento}`;
    });
});